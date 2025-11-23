import becomeASeller from "@/assets/images/become-a-seller.gif";
import { Button } from "@heroui/react";
import {
  ClockArrowUpIcon,
  RocketIcon,
  StoreIcon,
  UserPlusIcon
} from "lucide-react";
import Image from "next/image";
import { BrandsSection } from "@/components/homepage/brands-section/BrandsSection";

export function PartnerWithUsSection() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex flex-col gap-y-8">
            <div className="text-sm md:text-base bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
              Partner with us
            </div>
            <div className="space-y-2 max-w-xl">
              <h1 className="font-bold text-2xl md:text-4xl">
                <span>Become a Seller & Grow</span>
                <br />
                <span className="bg-gradient-to-b from-accent to-accent/60 text-transparent bg-clip-text">
                  Your Business
                </span>
              </h1>
              <p className="font-medium text-base md:text-lg text-pretty text-foreground/85">
                Join thousand of sellers who are already growing their business
                with our platform. Start selling today and reach more customer
                than ever before
              </p>
            </div>
          </div>

          <ul className="grid gap-4 max-w-sm">
            <li className="inline-flex items-center gap-2">
              <div className="size-6 md:size-8 bg-accent/80 text-accent-foreground rounded-xl flex items-center justify-center">
                <UserPlusIcon className="size-4 md:size-5" />
              </div>
              <span className="text-foreground/85 text-sm md:text-lg">
                Access 10K+ customers instantly
              </span>
            </li>

            <li className="inline-flex items-center gap-2">
              <div className="size-6 md:size-8 bg-accent/80 text-accent-foreground rounded-xl flex items-center justify-center">
                <RocketIcon className="size-4 md:size-5" />
              </div>
              <span className="text-foreground/85 text-sm md:text-lg">
                Boost your sales by 3x
              </span>
            </li>

            <li className="inline-flex items-center gap-2">
              <div className="size-6 md:size-8 bg-accent/80 text-accent-foreground rounded-xl flex items-center justify-center">
                <ClockArrowUpIcon className="size-4 md:size-5" />
              </div>
              <span className="text-foreground/85 text-sm md:text-lg">
                Quick 24-hour onboarding
              </span>
            </li>

            <li className="inline-flex items-center gap-2">
              <div className="size-6 md:size-8 bg-accent/80 text-accent-foreground rounded-xl flex items-center justify-center">
                <StoreIcon className="size-4 md:size-5" />
              </div>
              <span className="text-foreground/85 text-sm md:text-lg">
                Zero commission for first month
              </span>
            </li>
          </ul>

          <Button size="lg" className="w-full max-w-sm">
            Register Now
          </Button>
        </div>

        <div className="flex items-center">
          <Image
            width="684"
            height="684"
            alt="partner-with-us"
            src={becomeASeller.src}
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="container">
        <BrandsSection />
      </div>
    </section>
  );
}
