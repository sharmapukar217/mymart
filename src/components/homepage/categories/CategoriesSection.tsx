import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem
} from "@/components/common/Marquee";

const Categories = [
  { label: "Vegetables & Fruits", image: "" },
  { label: "Munches", image: "" },
  { label: "Cold Drinks & Juices", image: "" },
  { label: "Sweet Tooth", image: "" },
  { label: "Bakery & Biscuits", image: "" },
  { label: "Atta, Rice & Dal", image: "" },
  { label: "Dry Fruits, Masala & Oil", image: "" },
  { label: "Sauces & Spreads", image: "" },
  { label: "Instant & Frozen Food", image: "" },
  { label: "Chicken, Meal & Fish", image: "" }
];

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="bg-surface-secondary space-y-12 pt-20 pb-10 scroll-my-20 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            Products Available
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-2xl md:text-4xl">Our Categories</h1>
            <p className="font-medium text-base md:text-lg text-pretty text-foreground/85">
              Don&apos;t miss out these best selling products, Trending products
              and Products that are near you!
            </p>
          </div>
        </div>
      </div>

      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent className="[&_div]:!flex [&_div]:!items-start">
          {Categories.map((category, idx) => (
            <MarqueeItem
              key={idx}
              className="p-4 w-28 h-full flex flex-col items-center text-center gap-2">
              <div className="shrink-0 bg-accent/10 rounded-3xl backdrop-blur-lg size-24">
                {/* image here*/}
              </div>
              <h3 className="text-sm tracking-tight leading-4">
                {category.label}
              </h3>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}
