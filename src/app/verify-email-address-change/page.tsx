import Link from "next/link";
import { VerifyEmailDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

interface PageProps {
  searchParams: Promise<{ token: string }>;
}

export default async function VerifyEmailAddressChangePage(props: PageProps) {
  const { token } = await props.searchParams;

  if (!token) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-lg font-medium">
        Invalid or missing token.
      </div>
    );
  }

  const [response, error] = await fetcher({
    document: VerifyEmailDocument,
    variables: { token }
  });

  if (error) {
    <div className="flex items-center justify-center h-screen text-red-600 text-lg font-medium">
      Failed to verify email. Please try again later.
    </div>;
  }

  if (response?.updateCustomerEmailAddress.__typename === "Success") {
    return (
      <div className="flex items-center justify-center h-screen text-green-600 text-lg font-medium">
        Email verified successfully!
        <Link
          href="/verify-otp"
          className="mt-4 px-3 py-2 bg-green-600 text-white rounded-md">
          Proceed
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen text-red-600 text-lg font-medium">
      Invalid Token . Please check your verification token.
    </div>
  );
}
