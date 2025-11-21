import LogoFull from "@/assets/icons/logo-full.svg";
import {
  SiFacebook,
  SiInstagram,
  SiYoutube
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="pt-20 pb-5 lg:pb-20 bg-surface-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
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

          <div className="flex flex-col gap-4 w-fit">
            <div>
              <ul className="flex gap-4">
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

            <div className="gap-8 flex w-fit500 flex-col lg:flex-row lg:flex-wrap items-start justify-between">
              <ul className="inline-flex w-fit gap-4">
                <li>
                  <Link
                    href="/"
                    className="text-foreground/85 font-medium hover:text-accent duration-500">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-foreground/85 font-medium hover:text-accent duration-500">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-foreground/85 font-medium hover:text-accent duration-500">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-foreground/85 font-medium hover:text-accent duration-500">
                    Mobile App
                  </Link>
                </li>
              </ul>
              <div className="w-fit">
                &copy; Copywrite {new Date().getFullYear()} MyMart. All Rights
                Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
