import { Card } from "@heroui/react";
import {
  CirclePercentIcon,
  SmartphoneIcon,
  StoreIcon,
  TruckElectricIcon
} from "lucide-react";
import Image from "next/image";

import appHomepage from "@/assets/images/app-homepage.png";

export function OurPromiseSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            Our Promise and Purpose
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-4xl">Why Choose Us</h1>
            <p className="font-medium text-lg text-pretty text-foreground/85">
              Experience the future of grocery shopping with our innovative
              features
            </p>
          </div>
        </div>

        <div className="grid gap-y-4 gap-x-4 xl:grid-cols-3 mt-12">
          <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4 m-auto">
            <Card className="border shadow-sm hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-center size-14 rounded-3xl bg-accent/10 text-accent">
                <TruckElectricIcon className="size-8" />
              </div>
              <h1 className="font-bold text-lg">Lightning Fast Delivery</h1>
              <p className="text-foreground/85">
                Get your groceries delivered in just 15-20 minutes with our
                quick commerce model
              </p>
            </Card>

            <Card className="border shadow-sm hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-center size-14 rounded-3xl bg-accent/10 text-accent">
                <CirclePercentIcon className="size-8" />
              </div>
              <h1 className="font-bold text-lg">Best Prices</h1>
              <p className="text-foreground/85">
                Competitive pricing on all products with exciting deals and
                offers daily
              </p>
            </Card>
          </div>
          <div className="mb-8 -order-1 xl:mb-0 xl:order-0 relative">
            <div className="relative mx-auto border-gray-800 bg-base border-[8px] rounded-[2.5rem] h-[600px] w-[292px] shadow-2xl">
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
          <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4 m-auto">
            <Card className="border shadow-sm hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-center size-14 rounded-3xl bg-accent/10 text-accent">
                <SmartphoneIcon className="size-8" />
              </div>
              <h1 className="font-bold text-lg">Easy Mobile App</h1>
              <p className="text-foreground/85">
                User-friendly app to browse, order, and track your deliveries in
                real-time
              </p>
            </Card>

            <Card className="border shadow-sm hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-center size-14 rounded-3xl bg-accent/10 text-accent">
                <StoreIcon className="size-8" />
              </div>
              <h1 className="font-bold text-lg">Dark Store Model</h1>
              <p className="text-foreground/85">
                Strategically located micro-warehouses ensure fastest delivery
                times
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
