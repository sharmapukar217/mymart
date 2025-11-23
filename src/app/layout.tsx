import "@/assets/styles/global.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import { AnimationProvider } from "@/components/common/AnimationProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description
};

const dmSans = DM_Sans();

export default function RootLayout({ children }: React.PropsWithChildren) {
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
        <AnimationProvider />
        <div>{children}</div>
      </body>
    </html>
  );
}
