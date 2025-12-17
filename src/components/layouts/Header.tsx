"use client";

import { Button } from "@heroui/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import LogoFull from "@/assets/icons/logo-full.svg";
import { useIsNativeWebView } from "../NativeWebViewProvider";

const NAV_LINKS = [
  { title: "Categories", href: "/#categories" },
  { title: "Services", href: "/#services" },
  { title: "Features", href: "/#features" },
  { title: "About Us", href: "/#about-us" },
  { title: "FAQs", href: "/#faqs" },
  { title: "Contact Us", href: "/contact-us/#contact-us" }
];

export function Header() {
  const isNativeWebView = useIsNativeWebView();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveSection(entry.isIntersecting ? entry.target.id : null);
        });
      },
      {
        threshold: 0.2
        // rootMargin: "-10% 0px -90% 0px"
      }
    );

    sections.forEach((sec) => {
      observer.observe(sec);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-surface/80 backdrop-blur-lg shadow-md py-2 sticky top-0 z-10000">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <LogoFull />
          </Link>
        </div>
        <nav className="lg:flex items-center gap-4 hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={twMerge(
                "text-base font-medium text-foreground/75 hover:text-foreground duration-500",
                [
                  activeSection === link.href.replace("/#", "") &&
                    "!text-accent"
                ]
              )}>
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="inline-flex items-center gap-4">
          {!isNativeWebView && (
            <Button asChild className="group hidden lg:flex">
              <Link href="/d" onClick={() => setIsOpen(false)}>
                Download Now
                <ArrowRightIcon className="group-hover:translate-x-1 duration-500" />
              </Link>
            </Button>
          )}
          <Button
            className="lg:hidden"
            variant="ghost"
            onClick={() => setIsOpen((v) => !v)}>
            <div
              className={twMerge(
                "tham tham-e-spin tham-w-6",
                isOpen && "tham-active"
              )}>
              <div className="tham-box">
                <div className="tham-inner bg-muted group-hover:bg-foreground" />
              </div>
            </div>
          </Button>
        </div>
      </div>

      <div
        className={twMerge(
          "container overflow-clip",
          isOpen ? "h-full" : "h-0"
        )}>
        <nav className="pt-6 grid gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={twMerge(
                "text-base font-medium text-foreground/75 hover:text-foreground duration-500",
                [
                  activeSection === link.href.replace("/#", "") &&
                    "!text-accent"
                ]
              )}>
              {link.title}
            </Link>
          ))}
        </nav>

        {!isNativeWebView && (
          <Button asChild size="sm" className="group mt-2 w-full">
            <Link href="/d" onClick={() => setIsOpen(false)}>
              Download Now
              <ArrowRightIcon className="group-hover:translate-x-1 duration-500" />
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}
