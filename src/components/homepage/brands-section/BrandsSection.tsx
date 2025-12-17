import Image from "next/image";
import americanGourmentLogo from "@/assets/images/american-gourment-logo.png";
import annamLogo from "@/assets/images/annam-logo.png";
import britiniaLogo from "@/assets/images/britinia-logo.png";
import currentLogo from "@/assets/images/current-logo.png";
import daburLogo from "@/assets/images/dabur-logo.png";
import hilifeLogo from "@/assets/images/hilife-logo.png";
import unileverLogo from "@/assets/images/unilever-logo.png";
import waiwaiLogo from "@/assets/images/waiwai-logo.png";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem
} from "@/components/common/Marquee";

export function BrandsSection() {
  return (
    <div className="pt-10 space-y-12">
      <div className="flex flex-col items-start  justify-start text-start gap-y-1">
        <div className="text-sm md:text-base text-accent font-semibold">
          Brands
        </div>
        <p className="font-medium text-base md:text-lg text-pretty text-foreground/85">
          Some of the top selling brands that we sell...
        </p>
      </div>

      <Marquee>
        <MarqueeContent>
          <MarqueeItem>
            <Image alt="Annam" src={annamLogo.src} width={150} height={150} />
          </MarqueeItem>

          <MarqueeItem>
            <Image alt="Dabur" src={daburLogo.src} width={150} height={150} />
          </MarqueeItem>

          <MarqueeItem>
            <Image
              alt="Wai Wai"
              src={waiwaiLogo.src}
              width={150}
              height={150}
            />
          </MarqueeItem>

          <MarqueeItem>
            <Image
              alt="Unilever"
              src={unileverLogo.src}
              width={150}
              height={150}
            />
          </MarqueeItem>

          <MarqueeItem>
            <Image
              alt="Britinia"
              src={britiniaLogo.src}
              width={150}
              height={150}
            />
          </MarqueeItem>

          <MarqueeItem>
            <Image alt="Hilife" src={hilifeLogo.src} width={150} height={150} />
          </MarqueeItem>

          <MarqueeItem>
            <Image
              alt="American Gourment"
              src={americanGourmentLogo.src}
              width={150}
              height={150}
            />
          </MarqueeItem>

          <MarqueeItem>
            <Image
              alt="Current"
              src={currentLogo.src}
              width={150}
              height={150}
            />
          </MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  );
}

// waiwai
// current
// 2pm
// hilife
// uniliver
// britinia
// American Gourment
// RARA
// sai kripa
