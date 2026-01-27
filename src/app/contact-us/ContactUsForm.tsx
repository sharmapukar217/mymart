"use client";

import { Button, Input, TextArea } from "@heroui/react";

export function ContactUsForm() {
  return (
    <form className="grid gap-4 w-full">
      <Input required className="h-11 w-full" placeholder="Name*" />
      <Input
        required
        type="email"
        className="h-11 w-full"
        placeholder="Email*"
      />
      <Input
        required
        type="tel"
        className="h-11 w-full"
        placeholder="Phone Number*"
      />
      <Input required className="h-11 w-full" placeholder="Subject*" />
      <TextArea rows={6} placeholder="Message" className="w-full" />
      <Button type="button" size="lg" className="w-full">
        Submit
      </Button>
    </form>
  );
}
