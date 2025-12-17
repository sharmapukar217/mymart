import "@/assets/styles/global.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cookies } from "next/headers";
import { AnimationProvider } from "@/components/common/AnimationProvider";
import { InstallAppPopup } from "@/components/popups/InstallAppPopup";
import { siteConfig } from "@/lib/siteConfig";

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
  const popupState = cookieStore.get("INSTALL_APP_POPUP_STATE")?.value;

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
        <InstallAppPopup defaultOpen={popupState !== "hidden"} />
        <AnimationProvider />
        <div>{children}</div>
      </body>
    </html>
  );
}
