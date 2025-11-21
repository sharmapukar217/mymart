import appHomepage from "@/assets/images/app-homepage.png";
import Image from "next/image";

export function MobileAppSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container grid gap-16 lg:grid-cols-2">
        <div className="space-y-6 my-auto">
          <div className="flex items-center text-center lg:text-start lg:items-start flex-col gap-y-8">
            <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
              Mobile App
            </div>
            <div className="space-y-2 max-w-xl">
              <h1 className="font-bold text-4xl">
                <span>Download Our</span>
                <br />
                <span className="bg-gradient-to-b from-accent to-accent/60 text-transparent bg-clip-text">
                  Mobile app
                </span>
              </h1>
              <p className="font-medium text-lg text-pretty text-foreground/85">
                Fresh groceries, daily essentials, and more delivered to your
                doorstep in just minutes. Shop from Rice, Oil, Snacks, Fruits,
                Drinks, Veggies and much more!
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center sm:flex-row lg:justify-start gap-4 mt-8">
            <button
              type="button"
              className="p-2.5 w-full md:w-fit cursor-pointer flex items-center justify-center rounded-2xl text-xl bg-foreground text-background hover:bg-foreground/85">
              <svg
                className="size-8 me-3 fill-background"
                viewBox="0 0 22.773 22.773">
                <title>App Store</title>
                <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"></path>
              </svg>
              <div className="text-left">
                <p className="text-xs font-medium">Download on the</p>
                <p className="text-xs font-semibold">App Store</p>
              </div>
            </button>
            <button
              type="button"
              className="py-2.5 px-8 w-full md:w-fit cursor-pointer flex items-center justify-center rounded-2xl text-xl bg-foreground text-background hover:bg-foreground/85">
              <svg
                viewBox="30 336.7 120.9 129.2"
                className="size-8 me-3 fill-background">
                <title>Google Play Store</title>
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"></path>
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"></path>
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"></path>
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"></path>
              </svg>
              <div className="text-left">
                <p className="text-xs font-medium">GET IT ON</p>
                <p className="text-xs font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        <div className="relative overflow-x-clip h-48 md:h-auto">
          <div className="relative mx-auto border-gray-800 bg-base border-[8px] rounded-[2rem] md:rounded-[2.5rem] w-[160px] h-[340px] md:h-[550px] md:w-[262px]">
            <div className="z-10 w-[55px] h-[16px] md:w-[110px] md:h-[28px] bg-foreground top-1.5 rounded-[1rem] left-1/2 -translate-x-1/2 absolute" />
            <div className="absolute -start-[13px] top-[70px] md:top-[124px] space-y-2">
              <div className="h-[40px] md:h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
              <div className="h-[40px] md:h-[50px] w-[5px] bg-gray-800 rounded-s-lg" />
            </div>
            <div className="h-[64px] w-[5px] bg-gray-800 absolute -end-[13px] top-[70px] md:top-[142px] rounded-e-lg" />
            <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden size-full">
              <Image
                width="262"
                height="550"
                alt="app homepage"
                src={appHomepage.src}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
