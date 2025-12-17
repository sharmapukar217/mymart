import "@/assets/styles/global.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cookies, headers } from "next/headers";
import { AnimationProvider } from "@/components/common/AnimationProvider";
import { InstallAppPopup } from "@/components/popups/InstallAppPopup";
import { siteConfig } from "@/lib/siteConfig";
import { userAgent } from "next/server";
import { NativeWebViewProvider } from "@/components/NativeWebViewProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description
};

const dmSans = Roboto();

export default async function RootLayout({
  children
}: React.PropsWithChildren) {
  const cookieStore = await cookies();
  const popupState = cookieStore.get("InstallAppPopup_APP_POPUP_STATE")?.value;

  const headersList = await headers();
  const { ua } = userAgent({ headers: headersList });

  const uaLowerCased = ua?.toLowerCase() || "";

  const isAndroidWebView = uaLowerCased.includes("wv");
  const isIosWebView =
    /iphone|ipad|ipod/.test(uaLowerCased) && !uaLowerCased.includes("safari");
  const isNativeWebView = isAndroidWebView || isIosWebView;

  console.log(Object.fromEntries(headersList));
  console.log(ua);

  return (
    <html lang="en">
      <head>
        <style id="injected-styles">
          {`
          :root { --accent: ${siteConfig.colors.primary}; }
        `}
        </style>
      </head>
      <body className={`${dmSans.className}`}>
        <NativeWebViewProvider isNativeWebView={isNativeWebView}>
          {!isNativeWebView && (
            <InstallAppPopup defaultOpen={popupState !== "hidden"} />
          )}
          <AnimationProvider />
          <div>{children}</div>
        </NativeWebViewProvider>
      </body>
    </html>
  );
}
