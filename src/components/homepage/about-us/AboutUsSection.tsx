import { Card } from "@heroui/react";
import { EyeIcon, HandHeartIcon, TargetIcon } from "lucide-react";

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-20 scroll-my-20 bg-surface-secondary">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="text-sm md:text-base bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            About Us
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-2xl md:text-4xl">About Us</h1>
            <p className="text-base font-medium md:text-lg text-pretty text-foreground/85">
              Experience the future of grocery shopping with our innovative
              features
            </p>
          </div>
        </div>

        <div className="grid mx-auto gap-8 w-fit md:grid-cols-2 lg:grid-cols-3">
          <Card className="w-full max-w-sm gap-6 hover:scale-105 transtion-[scale] duration-500">
            <Card.Header className="size-15 md:size-20 rounded-3xl bg-accent/20 text-accent flex items-center justify-center">
              <TargetIcon className="size-8 md:size-12" />
            </Card.Header>
            <Card.Content>
              <h3 className="font-semibold text-base md:text-lg">
                Our Mission
              </h3>
              <p className="text-foreground/85 text-sm md:text-base">
                To make grocery shopping simple, affordable, and reliable for
                every Nepali household — delivering fresh, quality products.
              </p>
            </Card.Content>
          </Card>

          <Card className="w-full max-w-sm gap-6 hover:scale-105 transtion-[scale] duration-500">
            <Card.Header className="size-15 md:size-20 rounded-3xl bg-accent/20 text-accent flex items-center justify-center">
              <EyeIcon className="size-8 md:size-12" />
            </Card.Header>
            <Card.Content>
              <h3 className="font-semibold text-base md:text-lg">Our Vision</h3>
              <p className="text-foreground/85 text-sm md:text-base">
                To become Nepal’s most reliable online marketplace by redefining
                everyday shopping with technology, transparency, and customer
                trust.
              </p>
            </Card.Content>
          </Card>

          <Card className="w-full max-w-sm gap-6 hover:scale-105 transtion-[scale] duration-500">
            <Card.Header className="size-15 md:size-20 rounded-3xl bg-accent/20 text-accent flex items-center justify-center">
              <HandHeartIcon className="size-8 md:size-12" />
            </Card.Header>
            <Card.Content>
              <h3 className="font-semibold text-base md:text-lg">Our Values</h3>
              <p className="text-foreground/85 text-sm md:text-base">
                We believe in quality, affordability, and trust — bringing fresh
                groceries to your doorstep while supporting local communities.
              </p>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
