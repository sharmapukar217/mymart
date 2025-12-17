"use client";

import Cookie from "js-cookie";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import myMartAppImage from "@/assets/images/install-app-popup.png";
import * as Dialog from "@/components/common/Dialog";
import { siteConfig } from "@/lib/siteConfig";

export const InstallAppPopup = ({
  defaultOpen = false
}: {
  defaultOpen?: boolean;
}) => {
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(defaultOpen);

  React.useEffect(() => {
    if (searchParams.get("popup") === "install_app") {
      setOpen(true);
    }
  }, [searchParams]);

  const handleClose = () => {
    setOpen(false);
    Cookie.set("INSTALL_APP_POPUP_STATE", "hidden", { expires: 7 });
    const url = new URL(location.href);
    url.searchParams.delete("popup");
    history.pushState(null, "", url);
  };

  return (
    <Dialog.Dialog modal open={open} onOpenChange={handleClose}>
      <Dialog.DialogContent className="flex z-[10000] top-1/2 max-h-[56%] backdrop-blur-2xl border-0 lg:max-h-[80%] !max-w-[90%] lg:!max-w-4xl !p-0 overflow-clip">
        <div className=" backdrop-blur-2xl grid overflow-auto md:grid-cols-2 p-6">
          <div className="my-auto flex w-full flex-col gap-4">
            <Dialog.DialogTitle className="text-pretty pe-8 text-4xl max-md:pe-4 md:text-5xl text-foreground">
              Introducing the My Mart App
            </Dialog.DialogTitle>

            <div className="w-fit bg-green-500 px-2 py-1.5 text-base font-semibold italic text-accent-foreground md:text-base">
              DELIVERED IN MINUTES
            </div>

            <Dialog.DialogDescription className="tracking-loose text-base text-foreground/80 lg:text-lg">
              Download the My Mart app today and start saving instantly! Access
              exclusive coupons, browse your favorite products, and shop with
              ease-all from the palm of your hand.
            </Dialog.DialogDescription>

            <div className="flex flex-col items-center gap-2 lg:flex-row xl:flex-col 2xl:flex-row">
              {/* iOS App Store Button */}
              <a
                href={siteConfig.appDownloadLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download the My Mart app on the Apple App Store (opens in a new tab)"
                className="flex h-14 w-full items-center justify-center rounded-xl bg-black text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2">
                <div className="mr-3">
                  <svg width="30" viewBox="0 0 384 512" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-2xl font-semibold">
                    App Store
                  </div>
                </div>
              </a>

              {/* Android Google Play Button */}
              <a
                href={siteConfig.appDownloadLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get the My Mart app on Google Play (opens in a new tab)"
                className="flex h-14 w-full items-center justify-center rounded-lg bg-black text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2">
                <div className="mr-3">
                  <svg
                    width="30"
                    viewBox="30 336.7 120.9 129.2"
                    aria-hidden="true">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          <Image
            alt="MyMart App Screenshot"
            src={myMartAppImage.src}
            width={myMartAppImage.width}
            height="100"
            className="mx-auto w-auto h-[450px] drop-shadow-2xl drop-shadow-accent/30"
          />
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};
