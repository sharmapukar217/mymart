import faqsImage from "@/assets/images/faqs.png";
import { Accordion } from "@heroui/react";
import { PlusIcon } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What is this app about?",
    answer:
      "Our app makes grocery shopping fast and easy. You can browse, order, and get your groceries delivered right to your doorstep — all from your phone."
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply select your desired items, add them to your cart, and proceed to checkout. Follow the prompts to enter your delivery details and complete the payment."
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, we offer same-day delivery for orders placed within our operating hours. Delivery times may vary depending on your location and item availability."
  },
  {
    question: "Is there a delivery charge?",
    answer:
      "A delivery charge may apply based on your order value and location. Free delivery is available on orders that meet our minimum purchase requirements."
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing your order, you can track its status in the app under 'My Orders.' You will also receive notifications with updates on your delivery."
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods, including credit/debit cards, digital wallets, and cash on delivery where available."
  }
];

export function FAQSection() {
  return (
    <section id="faqs" className="py-20 scroll-my-20 bg-surface-secondary">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="text-sm md:text-base bg-accent/15 w-fit px-3 py-1.5 rounded-3xl text-accent font-semibold">
            FAQs
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-bold text-2xl md:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="font-medium text-base md:text-lg text-pretty text-foreground/85">
              Can&apos;t find the answer here? Check out our Help Center.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Accordion.Root
            defaultExpandedKeys={["0"]}
            className="h-fit my-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Accordion.Item
                key={idx}
                id={`${idx}`}
                className="bg-surface rounded-3xl border shadow-sm divide-y-0">
                <Accordion.Heading>
                  <Accordion.Trigger className="text-base md:text-lg rounded-3xl hover:bg-surface data-[hovered]:bg-surface data-[hovered]:text-accent aria-[expanded=true]:text-accent hover:text-accent">
                    {faq.question}
                    <Accordion.Indicator className="data-[expanded]:rotate-45">
                      <PlusIcon />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>

                <Accordion.Panel>
                  <Accordion.Body className="text-sm md:text-base">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <div className="hidden lg:inline mx-auto">
            <Image
              alt="faqs"
              width="548"
              height="548"
              src={faqsImage.src}
              className="size-[548px] aspect-16/9 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
