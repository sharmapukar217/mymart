"use client";

import { CheckCircle2Icon, CheckCircleIcon, MapPinIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MapView = dynamic(() => import("./MapView").then((m) => m.MapView), {
  ssr: false
});

export function AvailableCities() {
  return (
    <section className="py-10 bg-surface">
      <div className="py-10 bg-gradient-to-br from-surface to-accent/20 container grid md:grid-cols-2 gap-y-16 rounded-4xl">
        <div>
          <Suspense>
            <MapView />
          </Suspense>
        </div>

        <div className="-order-1 md:order-0 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-start gap-y-8">
          <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            Cities
          </div>
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2">
              <MapPinIcon className="size-8 text-accent" />
              <h1 className="font-bold text-4xl">Available Cities</h1>
            </div>
            <p className="font-medium text-lg text-pretty text-foreground/85">
              Now serving these cities — find us near you!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="cursor-default hover:scale-105 transition-all duration-500 bg-surface px-2.5 py-1.5 inline-flex items-center gap-2 rounded-2xl border shadow-xs">
              <CheckCircleIcon className="size-5 text-accent" />
              <span className="font-medium">Kathmandu</span>
            </div>

            <div className="cursor-default hover:scale-105 transition-all duration-500 bg-surface px-2.5 py-1.5 inline-flex items-center gap-2 rounded-2xl border shadow-xs">
              <CheckCircle2Icon className="size-5 text-accent" />
              <span className="font-medium">Bhaktapur</span>
            </div>

            <div className="cursor-default hover:scale-105 transition-all duration-500 bg-surface px-2.5 py-1.5 inline-flex items-center gap-2 rounded-2xl border shadow-xs">
              <CheckCircleIcon className="size-5 text-accent" />
              <span className="font-medium">Lalitpur</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="h-fit bg-surface/80 backdrop-blur-lg border-2 px-6 py-4 grid place-items-center rounded-4xl">
              <span className="text-xl font-bold text-accent">2+</span>
              <span className="font-medium text-xl">Cities</span>
            </div>

            <div className="h-fit bg-surface/80 backdrop-blur-lg border-2 px-6 py-4 grid place-items-center rounded-4xl">
              <span className="text-xl font-bold text-accent">3+</span>
              <span className="font-medium text-xl">Zones</span>
            </div>

            <div className="h-fit bg-surface/80 backdrop-blur-lg border-2 px-6 py-4 grid place-items-center rounded-4xl">
              <span className="text-xl font-bold text-accent">99%</span>
              <span className="font-medium text-xl">Coverage</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-x-1 bg-surface px-3 py-2 w-full rounded-xl border">
              <span>Don’t see your city? We’re expanding!</span>
              <span className="bg-gradient-to-b from-accent to-accent/60 text-transparent bg-clip-text">
                Check back soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
