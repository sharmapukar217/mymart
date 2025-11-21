"use client";

import { Button, Input, TextArea } from "@heroui/react";

export function ContactUsForm() {
  return (
    <form className="grid gap-4 w-full">
      <Input required className="h-11" placeholder="Name*" />
      <Input required type="email" className="h-11" placeholder="Email*" />
      <Input required type="tel" className="h-11" placeholder="Phone Number*" />
      <Input required className="h-11" placeholder="Subject*" />
      <TextArea rows={6} placeholder="Message" />
      <Button type="button" size="lg" className="w-full">
        Submit
      </Button>
    </form>
  );
}
