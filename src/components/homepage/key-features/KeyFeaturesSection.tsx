import appHomepage from "@/assets/images/app-homepage.png";
import Image from "next/image";

export function KeyFeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 bg-radial to-surface scroll-my-20 from-accent/10">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="text-sm md:text-base bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            Key Features
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-2xl md:text-4xl">
              Smart Shopping Made Simple
            </h1>
            <p className="font-medium text-base md:text-lg text-pretty text-foreground/85">
              Discover the benefits that make your shopping faster, easier and
              secure
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="flex flex-col-reverse lg:flex-col lg:even:flex-col-reverse gap-8 items-center justify-center">
            <div className="text-center">
              <h3 className="font-semibold text-lg md:text-2xl">
                Customer Support
              </h3>
              <p className="text-foreground/85 text-sm md:text-base">
                Strategically located micro-warehouses ensure fastest delivery
                times
              </p>
            </div>

            <div className="max-h-64 mx-auto overflow-y-clip">
              <div className="relative mx-auto border-gray-800 bg-base border-[8px] rounded-[2.5rem] h-[600px] w-[292px]">
                <div className="z-10 w-[110px] h-[28px] bg-foreground top-1.5 rounded-[1rem] left-1/2 -translate-x-1/2 absolute" />
                <div className="absolute -start-[13px] top-[124px] space-y-2">
                  <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
                  <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
                </div>
                <div className="h-[64px] w-[5px] bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg" />
                <div className="rounded-[2rem] overflow-hidden size-full">
                  <Image
                    width="292"
                    height="600"
                    alt="app homepage"
                    src={appHomepage.src}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-col lg:even:flex-col-reverse gap-8 items-center justify-center">
            <div className="text-center">
              <h3 className="font-semibold text-lg md:text-2xl">
                Fresh Groceries
              </h3>
              <p className="text-foreground/85 text-sm md:text-base">
                Multiple payment options with bank-level security for peace of
                mind
              </p>
            </div>

            <div className="max-h-64 mx-auto overflow-y-clip">
              <div className="relative mx-auto border-gray-800 bg-base border-[8px] rounded-[2.5rem] h-[600px] w-[292px]">
                <div className="z-10 w-[110px] h-[28px] bg-foreground top-1.5 rounded-[1rem] left-1/2 -translate-x-1/2 absolute" />
                <div className="absolute -start-[13px] top-[124px] space-y-2">
                  <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
                  <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
                </div>
                <div className="h-[64px] w-[5px] bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg" />
                <div className="rounded-[2rem] overflow-hidden size-full">
                  <Image
                    width="292"
                    height="600"
                    alt="app homepage"
                    src={appHomepage.src}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-col lg:even:flex-col-reverse gap-8 items-center justify-center">
            <div className="text-center">
              <h3 className="font-semibold text-lg md:text-2xl">
                100% Secure Payment
              </h3>
              <p className="text-foreground/85 text-sm md:text-base">
                Get your groceries delivered in just 15-20 minutes with our
                quick commerce model
              </p>
            </div>

            <div className="max-h-64 mx-auto overflow-y-clip">
              <div className="relative mx-auto border-gray-800 bg-base border-[8px] rounded-[2.5rem] h-[600px] w-[292px]">
                <div className="z-10 w-[110px] h-[28px] bg-foreground top-1.5 rounded-[1rem] left-1/2 -translate-x-1/2 absolute" />
                <div className="absolute -start-[13px] top-[124px] space-y-2">
                  <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
                  <div className="h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
                </div>
                <div className="h-[64px] w-[5px] bg-gray-800 absolute -end-[13px] top-[142px] rounded-e-lg" />
                <div className="rounded-[2rem] overflow-hidden size-full">
                  <Image
                    width="292"
                    height="600"
                    alt="app homepage"
                    src={appHomepage.src}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
