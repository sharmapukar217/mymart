import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gradient-to-br from-surface-secondary to-accent/5">
        <article className="container prose lg:prose-lg">
          <header>
            <p className="text-sm text-muted font-medium">
              Last Updated: November 2025
            </p>
            <h1>Terms of Use</h1>
            <p>
              <strong>Operated by:</strong> My Mart Industries Pvt. Ltd.
              <br />
              <strong>Brand Name:</strong> My Mart: Delivered in Minutes
            </p>
          </header>
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>My Mart: Delivered in Minutes</strong> - operated
            by <strong>My Mart Industries Pvt. Ltd.</strong>, headquartered
            at&nbsp;<strong>Panipokhari, Kathmandu-03, Nepal.</strong> These
            Terms of Use (“Terms”) govern your access and use of our website,
            mobile application, and related services (“Platform”). By accessing
            or using My Mart, you agree to comply with these Terms. If you do
            not agree, please refrain from using our services.
          </p>
          <h2>2. Services Offered</h2>
          <p>
            My Mart provides a quick commerce platform that allows users to
            order groceries and daily essentials for fast delivery. In the
            future, My Mart may expand to include other product categories such
            as electronics, stationery, clothing, and more. Currently, our
            delivery services are available within the{" "}
            <strong>Kathmandu, Bhaktapur &amp; Lalitpur</strong> with plans to
            expand across Nepal soon.
          </p>
          <h2>3. Eligibility</h2>
          <p>To use our Platform, you must:</p>
          <ul>
            <li>Be at least 18 years old or have parental/guardian consent.</li>
            <li>
              Agree to provide accurate, complete, and up-to-date information.
            </li>
            <li>Use the Platform only for lawful purposes.</li>
          </ul>
          <h2>4. User Account</h2>
          <p>
            You may need to create an account to place orders. You are
            responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your login credentials.</li>
            <li>All activities under your account.</li>
          </ul>
          <p>
            My Mart is not responsible for any unauthorized access resulting
            from your failure to secure your account.
          </p>
          <h2>5. Orders and Delivery</h2>
          <ul>
            <li>Orders can be placed via our website or mobile app.</li>
            <li>
              Delivery is currently fulfilled by My Mart’s in-house riders and
              authorized courier partners.
            </li>
            <li>
              Estimated delivery time may vary due to factors such as traffic,
              weather, or product availability.
            </li>
            <li>
              My Mart reserves the right to cancel or reject any order at its
              discretion (e.g., product unavailability, incorrect address,
              payment failure).
            </li>
          </ul>
          <h2>6. Payments</h2>
          <p>My Mart accepts multiple payment modes, including:</p>
          <ul>
            <li>Cash on Delivery (COD)</li>
            <li>
              Online Payment (Digital wallets, Debit/Credit cards, or other
              gateways)
            </li>
          </ul>
          <p>
            All payments must be made in Nepalese Rupees (NPR). In case of
            refunds due to order cancellation or non-delivery, My Mart will
            process them within a reasonable time according to our refund
            policy.
          </p>
          <h2>7. Pricing and Offers</h2>
          <ul>
            <li>
              Product prices listed on the Platform are inclusive of applicable
              taxes unless stated otherwise.
            </li>
            <li>Prices and offers may change without prior notice.</li>
            <li>
              Discounts, promo codes, or offers are subject to terms specific to
              each campaign and may be withdrawn anytime.
            </li>
          </ul>
          <h2>8. Returns, Replacements, and Refunds</h2>
          <p>If you receive damaged, expired, or incorrect products:</p>
          <ul>
            <li>
              You must notify My Mart customer support within 24 hours of
              delivery.
            </li>
            <li>
              Replacement or refund eligibility will be determined after
              verification.
            </li>
            <li>
              Perishable goods may not be eligible for return once opened or
              consumed.
            </li>
          </ul>
          For Customer Support:&nbsp;
          <a href="tel:+9779802075708">+977 980-2075708</a>
          <h2>9. User Conduct</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Use the Platform for unlawful or fraudulent purposes.</li>
            <li>Interfere with or disrupt My Mart’s systems or networks.</li>
            <li>Upload or share false, misleading, or harmful content.</li>
            <li>Misuse offers, referral programs, or delivery systems.</li>
          </ul>
          <p>
            Violation of these conditions may result in suspension or
            termination of your account.
          </p>
          <h2>10. Intellectual Property</h2>
          <p>
            All content on the My Mart Platform — including text, logos,
            graphics, images, software, and brand name — is the property of My
            Mart Industries Pvt. Ltd. You may not copy, modify, reproduce, or
            distribute any content without written permission from My Mart.
          </p>
          <h2>11. Third-Party Services</h2>
          <p>
            Our Platform may integrate with third-party services (e.g., Payment
            gateways, Delivery partners). My Mart is not responsible for their
            terms, performance, or privacy practices. Please review their
            policies separately.
          </p>
          <h2>12. Limitation of Liability</h2>
          <p>
            My Mart strives to provide a reliable, fast, and secure experience.
            However:
          </p>
          <ul>
            <li>
              My Mart is not liable for delays due to factors beyond its control
              (traffic, weather, technical failure, etc.).
            </li>
            <li>
              My Mart is not responsible for indirect, incidental, or
              consequential damages arising from the use of its services.
            </li>
          </ul>
          <p>Your use of the Platform is at your own risk.</p>
          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless My Mart Industries Pvt.
            Ltd., My Mart, its employees, directors, and partners from any
            claims, damages, or liabilities arising from your use of the
            Platform or violation of these Terms.
          </p>
          <h2>14. Termination</h2>
          <p>
            My Mart may suspend or terminate access to your account or Platform
            at any time if you:
          </p>
          <ul>
            <li>Violate these Terms.</li>
            <li>Engage in misuse, fraud, or abuse of services.</li>
            <li>Provide false information or engage in suspicious activity.</li>
          </ul>
          <h2>15. Modifications to the Terms</h2>
          <p>
            My Mart reserves the right to modify or update these Terms at any
            time. Updated versions will be posted on the website/app with the
            new date. Your continued use of My Mart services after changes means
            you accept the revised Terms.
          </p>
          <h2>16. Governing Law and Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of Nepal. Any disputes arising
            under or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts in Kathmandu, Nepal.
          </p>
          <h2>17. Contact Us</h2>
          <address className="not-italic">
            <p>
              My Mart Industries Pvt. Ltd.
              <br />
              Panipokhari, Kathmandu-03, Nepal
              <br />
              Email:&nbsp;
              <a href="mailto:support@mymartindustries.com">
                support@mymartindustries.com
              </a>
              <br />
              Customer Support:&nbsp;
              <a href="tel:+9779802075708">+977 980-2075708</a>
            </p>
          </address>
        </article>
      </main>
      <AvailableCities />
      <Footer />
    </>
  );
}
