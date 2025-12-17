import {
  SiFacebook,
  SiInstagram,
  SiYoutube
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import LogoFull from "@/assets/icons/logo-full.svg";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="pt-10 bg-surface-secondary">
      <div className="container gap-y-8 flex flex-col md:flex-row md:items-center justify-between">
        <div className="grid gap-4">
          <LogoFull />
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hover:scale-110 duration-500 text-accent hover:text-accent/90">
              <SiFacebook className="size-6" />
            </Link>

            <Link
              href="/"
              className="hover:scale-110 duration-500 text-accent hover:text-accent/90">
              <SiInstagram className="size-6" />
            </Link>

            <Link
              href="/"
              className="hover:scale-110 duration-500 text-accent hover:text-accent/90">
              <SiYoutube className="size-6" />
            </Link>
          </div>
        </div>

        <div className="grid gap-y-2">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                href="/"
                className="text-foreground/85 font-medium hover:text-accent duration-500">
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="text-foreground/85 font-medium hover:text-accent duration-500">
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-foreground/85 font-medium hover:text-accent duration-500">
                Become a Seller
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="text-foreground/85 font-medium hover:text-accent duration-500">
                FAQs
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="text-foreground/85 font-medium hover:text-accent duration-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 py-2 text-sm flex flex-wrap justify-center border-t border-foreground/10 items-center gap-y-1 gap-x-2">
        <ul className="inline-flex items-center gap-2">
          <li>
            <Link
              href="/terms-of-services"
              className="text-foreground/85 font-medium hover:text-accent duration-500">
              Terms of Services
            </Link>
          </li>
          <span>•</span>
          <li>
            <Link
              href="/privacy-policy"
              className="text-foreground/85 font-medium hover:text-accent duration-500">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="col-span-2 w-fit">
          &copy; Copyright {new Date().getFullYear()} {siteConfig.title} • All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
}
