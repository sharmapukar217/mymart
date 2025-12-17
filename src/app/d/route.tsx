import { redirect } from "next/navigation";
import { type NextRequest, userAgent } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

export async function GET(request: NextRequest) {
  const ua = userAgent({ headers: request.headers });
  if (ua.os.name === "Android")
    return redirect(siteConfig.appDownloadLinks.android);
  if (ua.os.name === "iOS") return redirect(siteConfig.appDownloadLinks.ios);
  return redirect(`${request.nextUrl.origin}?popup=install_app`);
}
