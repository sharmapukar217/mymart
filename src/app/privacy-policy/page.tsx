import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gradient-to-br from-surface-secondary to-accent/5">
        <article className="container prose lg:prose-lg">
          <header>
            <p className="text-sm text-muted font-medium">
              Last Updated: November 2025
            </p>
            <h1>Privacy Policy</h1>
            <p>
              <strong>Operated by:</strong> My Mart Industries Pvt. Ltd.
              <br />
              <strong>Brand Name:</strong> My Mart: Delivered in Minutes.
            </p>
          </header>

          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>My Mart: Delivered in Minutes</strong> - operated
            by <strong>My Mart Industries Pvt. Ltd.</strong>, headquartered
            at&nbsp;
            <strong>Panipokhari, Kathmandu-03, Nepal.</strong> This Privacy
            Policy describes how we collect, use, store, and protect your
            personal information when you use our website, mobile app, or any
            related services (collectively referred to as the “Platform”). By
            accessing or using My Mart, you agree to this Privacy Policy. If you
            do not agree, please refrain from using our services.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>A. Personal Information</h3>
          <ul>
            <li>Name, Phone number, Email address</li>
            <li>Delivery address and Billing address</li>
            <li>Date and time of order</li>
            <li>
              Payment details (Online payment, Wallet, or Cash on Delivery)
            </li>
          </ul>

          <h3>B. Device and Technical Information</h3>
          <ul>
            <li>Device type, Operating system, and App version</li>
            <li>IP address, Browser type, and Usage logs</li>
            <li>Cookies and analytics data</li>
          </ul>

          <h3>C. Location Information</h3>
          <p>
            We may collect your real-time location to identify nearby stores,
            assign delivery agents, and ensure quick delivery. You can manage
            location permissions through your device settings.
          </p>

          <h3>D. Transaction & Order Data</h3>
          <ul>
            <li>
              Details of orders placed, payments made, refunds processed, and
              delivery history.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and deliver your orders efficiently.</li>
            <li>Provide customer support and resolve issues.</li>
            <li>Send order confirmations, updates, and promotional offers.</li>
            <li>Improve our app and website performance.</li>
            <li>
              Detect and prevent fraud, unauthorized transactions, or misuse.
            </li>
            <li>
              Conduct analytics to enhance our services and user experience.
            </li>
          </ul>

          <h2>4. Sharing of Information</h2>
          <p>We may share your information only when necessary, such as:</p>
          <ul>
            <li>
              <strong>Delivery Partners:</strong> To deliver your orders quickly
              and accurately.
            </li>
            <li>
              <strong>Payment Gateways:</strong> For secure online transactions.
            </li>
            <li>
              <strong>Service Providers:</strong> For data hosting, analytics,
              SMS, or email communication.
            </li>
            <li>
              <strong>Legal Obligations:</strong> When required by law or
              regulatory authorities.
            </li>
          </ul>
          <p>
            We <strong>do not</strong> sell or rent your personal information to
            any third parties.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            Our Platform uses cookies and similar technologies to remember your
            preferences, improve navigation, and analyze usage patterns. You may
            disable cookies through your browser, but some features may not work
            properly.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information as long as necessary to fulfill
            our business and legal obligations. After that, we securely delete
            or anonymize your data.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement advanced security measures to protect your data from
            unauthorized access, alteration, or disclosure. However, no online
            system is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>8. Your Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Access and update your personal information.</li>
            <li>
              Request deletion of your data (subject to legal or operational
              requirements).
            </li>
            <li>Withdraw consent for data usage.</li>
          </ul>
          <p>
            You can contact us at&nbsp;
            <a href="mailto:privacy@mymartindustries.com">
              privacy@mymartindustries.com
            </a>
            &nbsp; for any privacy-related requests.
          </p>

          <h2>9. Children’s Privacy</h2>
          <p>
            Our services are not intended for children under 18. We do not
            knowingly collect personal information from minors.
          </p>

          <h2>10. Third-Party Links</h2>
          <p>
            Our Platform may include links to third-party websites or apps. We
            are not responsible for their content or privacy practices. Please
            review their policies separately.
          </p>

          <h2>11. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy occasionally. Changes will be
            posted on this page with the updated date. Continued use of the
            Platform indicates your acceptance of the revised policy.
          </p>

          <h2>12. Contact Us</h2>
          <address className="not-italic">
            <p>
              My Mart Industries Pvt. Ltd.
              <br />
              Panipokhari, Kathmandu-03, Nepal
              <br /> Email:&nbsp;
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
