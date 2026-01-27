import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  Building2Icon,
  FileTextIcon,
  UserIcon,
  LinkedinIcon,
  ClockIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { ContactUsForm } from "./ContactUsForm";

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main id="contact-us" className="py-20 scroll-my-20 bg-surface-secondary">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 w-full">
            <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
              Contact Us
            </div>
            <div className="w-full">
              <Image
                alt="My Mart Grab & Go"
                src="/celebrate-community-img.png"
                width={561}
                height={413}
                quality={100}
                priority
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Contact Details - Horizontal Layout */}
            <div className="pt-4">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Company Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Company Details
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Building2Icon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">
                          My Mart Industries Pvt. Ltd.
                        </p>
                        <p className="text-foreground/85 text-sm">
                          Business Model: Inventory Model
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPinIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-foreground/85 text-sm">
                        <p>Panipokhari-3, Kathmandu</p>
                        <p className="mt-1">
                          Registered Office: Panipokhari-3, Kathmandu
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileTextIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-foreground/85 text-sm space-y-1">
                        <p>Registered Entity: Office of Company Registrar</p>
                        <p>Registration No: 161040/073/074</p>
                        <p>PAN/VAT No: 604377162</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Get in Touch */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Get in Touch
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-foreground/85 text-sm">
                        <p>
                          <Link
                            href="tel:014002663"
                            className="hover:text-accent duration-500">
                            01-4002663
                          </Link>
                          {" • "}
                          <Link
                            href="tel:9802075708"
                            className="hover:text-accent duration-500">
                            9802075708
                          </Link>
                        </p>
                        <p className="text-foreground/70 mt-1">
                          (Sun to Fri, 7AM to 10PM)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MailIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                      <Link
                        href="mailto:info@mymartindustries.com"
                        className="text-foreground/85 hover:text-accent duration-500 text-sm">
                        info@mymartindustries.com
                      </Link>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      Follow Us
                    </h3>
                    <div className="flex items-center gap-4">
                      <Link
                        href="https://www.facebook.com/mymartindustries"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 duration-500 text-accent hover:text-accent/90">
                        <SiFacebook className="size-6" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/mymartnp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 duration-500 text-accent hover:text-accent/90">
                        <SiInstagram className="size-6" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/82611744"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 duration-500 text-accent hover:text-accent/90">
                        <LinkedinIcon className="size-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-4 pt-6 mt-6 border-t border-foreground/10">
                <h3 className="text-xl font-semibold text-foreground">
                  Contact Person
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <UserIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-foreground/85 text-sm">
                      <p className="font-semibold text-foreground">
                        Ramchandra Paudel
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <Link
                      href="tel:9802075715"
                      className="text-foreground/85 hover:text-accent duration-500 text-sm">
                      9802075715
                    </Link>
                  </div>

                  <div className="flex items-start gap-3">
                    <MailIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <Link
                      href="mailto:ramchandra@mymartindustries.com"
                      className="text-foreground/85 hover:text-accent duration-500 text-sm">
                      ramchandra@mymartindustries.com
                    </Link>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPinIcon className="size-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/85 text-sm">
                      Panipokhari-03, Kathmandu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-6">
            <div className="bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold opacity-0 pointer-events-none">
              Contact Us
            </div>
            <div className="space-y-4 w-full">
              <div className="bg-surface p-6 rounded-2xl shadow-sm border border-foreground/5 w-full">
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-foreground/75 text-sm">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <ContactUsForm />
              </div>

              {/* Office Hours & Quick Contact */}
              <div className="grid md:grid-cols-2 gap-4 mt-6 items-stretch">
                {/* Office Hours */}
                <div className="bg-surface p-6 rounded-2xl shadow-sm border border-foreground/5 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <ClockIcon className="size-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/75 flex-1">
                        Sunday - Friday
                      </span>
                      <span className="font-medium text-foreground">
                        7AM - 10PM
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/75 flex-1">
                        Saturday
                      </span>
                      <span className="font-medium text-foreground">
                        Closed
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-foreground/10">
                    <p className="text-xs text-foreground/60">
                      We're here to help you during business hours
                    </p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-surface p-6 rounded-2xl shadow-sm border border-foreground/5 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-3 flex-1">
                    <Link
                      href="tel:014002663"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <PhoneIcon className="size-5 text-accent group-hover:scale-110 duration-300" />
                      <span className="text-sm font-medium text-foreground">
                        Call Us Now
                      </span>
                    </Link>
                    <Link
                      href="mailto:info@mymartindustries.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <MailIcon className="size-5 text-accent group-hover:scale-110 duration-300" />
                      <span className="text-sm font-medium text-foreground">
                        Send Email
                      </span>
                    </Link>
                    <Link
                      href="https://maps.app.goo.gl/rfwbCdsnJCnXkQQUA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <MapPinIcon className="size-5 text-accent group-hover:scale-110 duration-300" />
                      <span className="text-sm font-medium text-foreground">
                        Get Directions
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AvailableCities />
      <Footer />
    </>
  );
}
