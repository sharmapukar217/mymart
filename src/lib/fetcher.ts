"use server";

import { print } from "graphql";
import { cookies } from "next/headers";
import { env } from "@/env";
import { AUTH_TOKEN_SESSION_KEY } from "./constants";

type GraphqlResponse<Response> = {
  data: Response;
  errors?: Array<{
    message: string;
    extensions?: { code?: string };
  }>;
};

type ErrorResult = {
  message?: string;
  statusText?: string;
};

type FetcherOptions<Result, Variables> = Omit<
  RequestInit,
  "method" | "body"
> & {
  variables?: Variables;
  document: import("@graphql-typed-document-node/core").TypedDocumentNode<
    Result,
    Variables
  >;
};

// TODO: Figure out a way better manage cookie token
export async function fetcher<Result, Variables>(
  args: FetcherOptions<Result, Variables>
): Promise<[null, ErrorResult] | [Result, null]> {
  const { document, variables, ...init } = args;
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_TOKEN_SESSION_KEY);

  try {
    const response = await fetch(env.GRAPHQL_API_URL, {
      ...init,
      method: "POST",
      body: JSON.stringify({
        query: print(document),
        variables
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token?.value ? `Bearer ${token.value}` : "",
        ...init.headers
      }
    });

    // TODO: Figure out a way better manage cookie token
    const authToken = response.headers.get(AUTH_TOKEN_SESSION_KEY);
    if (authToken) {
      try {
        cookieStore.set(AUTH_TOKEN_SESSION_KEY, authToken);
      } catch {}
    }

    const { data, errors }: GraphqlResponse<Result> = await response.json();

    if (errors) {
      const error = errors[0];

      return [
        null,
        { message: error.message, statusText: error.extensions?.code }
      ];
    }

    return [data, null];
  } catch (err) {
    return [null, { message: err.message, statusText: "CLIENT_ERROR" }];
  }
}
