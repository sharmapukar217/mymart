import { Card } from "@heroui/react";
import {
  CheckCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
  TruckElectricIcon
} from "lucide-react";
import Image from "next/image";
import image from "@/assets/images/shop-online-old.gif";

export function OurServicesSection() {
  return (
    <section id="services" className="py-20 scroll-my-20 bg-surface-secondary">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="text-sm md:text-base bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            Our Services
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-2xl md:text-4xl">
              Order in Just a Minute!{" "}
            </h1>
            <p className="font-medium text-base md:text-lg text-pretty text-foreground/85">
              Four simple steps to get your groceries delivered to your
              doorstep.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="shrink-0 mx-auto">
            <Image
              width="424"
              height="424"
              src={image.src}
              alt="heart of vegetables"
              className="rounded-3xl"
            />
          </div>
          <div className="grid gap-2 w-full">
            <Card className="flex flex-row items-center">
              <div className="relative">
                <div className="relative size-16 flex items-center justify-center bg-radial from-accent/50 via-40% to-accent rounded-full text-accent-foreground">
                  <SearchIcon className="size-8" />
                </div>
                <div className="absolute top-0 right-0 z-10 border border-surface size-6 text-accent-foreground font-bold bg-accent rounded-full flex items-center justify-center text-center text-sm">
                  01
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Browse Products
                </h3>
                <p className="text-foreground/85 text-sm md:text-base">
                  Explore thousands of products across categories
                </p>
              </div>
            </Card>
            <Card className="flex flex-row items-center">
              <div className="relative">
                <div className="relative size-16 flex items-center justify-center bg-radial from-accent/50 via-40% to-accent rounded-full text-accent-foreground">
                  <ShoppingCartIcon className="size-8" />
                </div>
                <div className="absolute top-0 right-0 z-10 border border-surface size-6 text-accent-foreground font-bold bg-accent rounded-full flex items-center justify-center text-center text-sm">
                  02
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Add to Cart
                </h3>
                <p className="text-foreground/85 text-sm md:text-base">
                  Select items and add them to your cart
                </p>
              </div>
            </Card>
            <Card className="flex flex-row items-center">
              <div className="relative">
                <div className="relative size-16 flex items-center justify-center bg-radial from-accent/50 via-20% to-accent rounded-full text-accent-foreground">
                  <CheckCircleIcon className="size-8" />
                </div>
                <div className="absolute top-0 right-0 z-10 border border-surface size-6 text-accent-foreground font-bold bg-accent rounded-full flex items-center justify-center text-center text-sm">
                  03
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Confirm Order
                </h3>
                <p className="text-foreground/85 text-sm md:text-base">
                  Review and place your order securely
                </p>
              </div>
            </Card>
            <Card className="flex flex-row items-center">
              <div className="relative">
                <div className="relative size-16 flex items-center justify-center bg-radial from-accent/50 via-40% to-accent rounded-full text-accent-foreground">
                  <TruckElectricIcon className="size-8" />
                </div>
                <div className="absolute top-0 right-0 z-10 border border-surface size-6 text-accent-foreground font-bold bg-accent rounded-full flex items-center justify-center text-center text-sm">
                  04
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Fast Delivery
                </h3>
                <p className="text-foreground/85 text-sm md:text-base">
                  Get Delivery in just 15-20 minutes
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
