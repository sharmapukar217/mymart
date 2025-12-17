import { Button, Card } from "@heroui/react";
import { SmartphoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import heroImage from "@/assets/images/hero.png";

export function HeroSection() {
  return (
    <section className="bg-radial from-accent/10 scroll-my-20 from-40% to-accent/5 overflow-clip">
      <div className="relative container py-10 grid gap-x-20 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="mb-4">
            <strong className="font-semibold text-sm md:text-lg bg-gradient-to-b from-accent to-accent/60 text-transparent bg-clip-text">
              Nepal's Fastest Grocery Delivery
            </strong>
          </div>
          <div className="grid gap-2">
            <div className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              <h1>Order Grocery and More...</h1>
              <h2 className="bg-gradient-to-b from-accent/60 to-accent text-transparent bg-clip-text">
                in Minutes
              </h2>
            </div>
            <p className="text-sm md:text-lg max-w-xl text-pretty">
              Fresh groceries, daily essentials, and more delivered to your
              doorstep in just minutes. Shop from Rice, Oil, Snacks, Fruits,
              Drinks, Veggies and much more!
            </p>
          </div>

          <Card className="w-full max-w-lg flex flex-col sm:flex-col border gap-y-6 md:gap-y-0">
            <h1 className="w-fit font-bold text-xl sm:text-2xl">
              <span>Scan QR Code &amp;</span>
              <br />
              <span className="bg-gradient-to-b from-accent/60 to-accent text-transparent bg-clip-text">
                Download the App
              </span>
            </h1>

            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-end gap-8">
              <div className="grid gap-4 mb-1">
                <Card.Description className="text-sm md:text-lg text-pretty">
                  My Mart is available on the App Store. Get started with My
                  Mart in Seconds!
                </Card.Description>

                <Button
                  asChild
                  variant="secondary"
                  className="w-full ring-1 bg-accent/5 hover:bg-accent hover:text-accent-foreground transition-colors duration-500">
                  <Link href="/d">
                    Download App
                    <SmartphoneIcon />
                  </Link>
                </Button>
              </div>

              <div className="shrink-0 size-36 p-2 group relative">
                <svg
                  fill="none"
                  viewBox="0 0 96 96"
                  className="absolute inset-0 size-full stroke-border transition-colors group-hover:stroke-accent duration-500">
                  <title>qr frame</title>
                  <path
                    d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                    strokeWidth="2"
                  />
                </svg>
                <QRCode
                  value="https://mymart.com.np/d"
                  className="rounded-2xl text-accent size-full"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="relative">
          <div className="lg:absolute lg:-right-[40%] xl:-right-[20%] bottom-0">
            <Image
              alt=""
              src={heroImage.src}
              width={heroImage.width}
              height={heroImage.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
