import { ImageResponse } from "next/og";
import Logo from "@/assets/icons/logo.svg";
import { siteConfig } from "@/lib/siteConfig";

export const contentType = "image/svg";
export const size = { width: 64, height: 64 };

export default function Icon() {
  return new ImageResponse(
    <Logo {...size} style={{ background: siteConfig.colors.primary }} />,
    {
      ...size
    }
  );
}
