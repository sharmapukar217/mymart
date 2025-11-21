import { Button, Card } from "@heroui/react";
import { SmartphoneIcon } from "lucide-react";
import QRCode from "react-qr-code";

export function HeroSection() {
  return (
    <section className="bg-radial from-accent/10 from-40% to-accent/5">
      <div className="container py-32">
        <div className="space-y-8">
          <div className="mb-4">
            <strong className="font-semibold text-lg bg-gradient-to-b from-accent to-accent/60 text-transparent bg-clip-text">
              Nepal's Fastest Grocery Delivery
            </strong>
          </div>
          <div className="grid gap-2">
            <div className="font-bold text-6xl tracking-tight">
              <h1>Order Grocery and More...</h1>
              <h2 className="bg-gradient-to-b from-accent/60 to-accent text-transparent bg-clip-text">
                in Minutes
              </h2>
            </div>
            <p className="text-lg max-w-xl text-pretty">
              Fresh groceries, daily essentials, and more delivered to your
              doorstep in just minutes. Shop from Rice, Oil, Snacks, Fruits,
              Drinks, Veggies and much more!
            </p>
          </div>

          <Card className="w-full max-w-lg flex flex-row border">
            <Card.Header className="flex justify-center gap-2">
              <Card.Title className="font-bold text-2xl">
                <span>Scan QR Code &amp;</span>
                <br />
                <span className="bg-gradient-to-b from-accent/60 to-accent text-transparent bg-clip-text">
                  Download the App
                </span>
              </Card.Title>
              <Card.Description className="text-lg text-pretty">
                Sastodeal is available on the App Store. Get started with
                Sastodeal in Seconds!
              </Card.Description>
            </Card.Header>

            <Card.Content className="shrink-0 space-y-2">
              <div className="size-36 p-2 group relative">
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
                  value=""
                  className="rounded-2xl text-accent size-full"
                />
              </div>
              <Button
                variant="secondary"
                className="w-full ring-1 bg-accent/5 hover:bg-accent hover:text-accent-foreground transition-colors duration-500">
                Download App
                <SmartphoneIcon />
              </Button>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
