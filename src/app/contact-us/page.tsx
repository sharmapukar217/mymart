import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import contactUsImage from "@/assets/images/contact-us.png";
import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { ContactUsForm } from "./ContactUsForm";

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main id="contact-us" className="py-20 scroll-my-20 bg-surface-secondary">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
              Contact Us
            </div>
            <div>
              <Image
                alt=""
                src={contactUsImage.src}
                width="561"
                height="413"
                className="rounded-2xl"
              />
            </div>
            <p className="text-foreground/85 max-w-[561px]">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>

            <Link
              href="mailto:mymart@gmail.com"
              className="inline-flex items-center gap-4 hover:underline hover:text-accent duration-500">
              <MailIcon className="size-5 text-accent" />
              mymart@gmail.com
            </Link>
          </div>

          <div className="flex items-center">
            <ContactUsForm />
          </div>
        </div>
      </main>
      <AvailableCities />
      <Footer />
    </>
  );
}
