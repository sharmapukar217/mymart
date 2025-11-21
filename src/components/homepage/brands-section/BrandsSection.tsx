export function BrandsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            Brands
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-4xl">Our Partners</h1>
            <p className="font-medium text-lg text-pretty text-foreground/85">
              We have been working with some clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
