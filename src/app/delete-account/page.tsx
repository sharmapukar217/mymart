import { Button, Card, Checkbox, Input, Label } from "@heroui/react";
import { TriangleAlertIcon } from "lucide-react";
import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { Footer } from "@/components/layouts/Footer";

export default function DeleteAccountPage() {
  return (
    <div>
      <main className="py-20 bg-gradient-to-br from-surface-secondary to-accent/10">
        <Card className="max-w-md mx-auto border bg-surface/90 backdrop-blur-2xl">
          <Card.Header>
            <TriangleAlertIcon className="text-danger size-6" />
            <Card.Title>Delete your account</Card.Title>
            <Card.Description>
              Do you relly want to delete your account?
            </Card.Description>
          </Card.Header>

          <Card.Content>
            <form className="grid gap-4 select-none">
              <div className="inline-flex items-start gap-2">
                <Checkbox isRequired id="confirm-delete" className="mt-1">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                </Checkbox>
                <Label htmlFor="confirm-delete" className="text-xs">
                  I am aware that deleting my account is an irreversible process
                  and i have read and agreed to the terms and conditions.
                </Label>
              </div>

              <div className="flex items-center p-1.5 border bg-surface-tertiary rounded-full">
                <div className="size-8 rounded-full bg-surface shrink-0 flex items-center justify-center">
                  ✉️
                </div>
                <Input
                  required
                  type="email"
                  placeholder="eg: shyam@gmail.com"
                  className="w-full focus:ring-0"
                />
                <Button
                  type="submit"
                  variant="danger"
                  className="shrink-0 rounded-full">
                  Delete account
                </Button>
              </div>
            </form>
          </Card.Content>
        </Card>
      </main>
      <AvailableCities />
      <Footer />
    </div>
  );
}
