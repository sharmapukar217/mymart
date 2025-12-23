import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gradient-to-br from-surface-secondary to-accent/5">
        <article className="container prose prose-slate max-w-none">
          <h1>Privacy Policy – My Mart Rider</h1>

          <p>
            <strong>Effective Date:</strong> 22nd Dec 2025
          </p>

          <p>
            At My Mart, we respect the privacy of our riders. This Privacy
            Policy explains how information is used and protected when you use
            the My Mart Rider app.
          </p>

          <p>
            This app is designed only for authorized delivery riders who are
            already registered in our internal system.
          </p>

          <h2>1. Rider Information &amp; Account Creation</h2>

          <ul>
            <li>The My Mart Rider app does not allow public sign-up</li>
            <li>Rider accounts are created internally by My Mart</li>
            <li>Login details are provided directly to riders</li>
            <li>
              Personal details such as name, phone number, and rider ID are
              already available in our system before app use
            </li>
            <li>
              The app simply displays and uses this existing information for
              delivery operations
            </li>
          </ul>

          <h2>2. Information Used by the App</h2>

          <p>
            The app may access and use the following information to function
            properly:
          </p>

          <h3>Basic Rider Information</h3>
          <ul>
            <li>Name</li>
            <li>Mobile number</li>
            <li>Rider ID</li>
          </ul>

          <h3>Location Information</h3>
          <ul>
            <li>Real-time location only during active deliveries</li>
            <li>Pickup and drop-off confirmation</li>
          </ul>

          <h3>Device &amp; App Information</h3>
          <ul>
            <li>Device model and Android version</li>
            <li>
              App performance data and crash logs (for technical improvement)
            </li>
          </ul>

          <p>
            👉 The app does not collect new personal data directly from riders,
            except information generated during delivery activity (such as
            location during delivery).
          </p>

          <h2>3. Location Permission</h2>

          <p>Location access is required to:</p>
          <ul>
            <li>Assign and track delivery orders</li>
            <li>Confirm successful pickup and delivery</li>
            <li>Ensure operational efficiency and rider safety</li>
          </ul>

          <p>
            📍 Location tracking is limited to delivery-related activities and
            is not used for personal tracking.
          </p>

          <h2>4. How We Protect Rider Data</h2>

          <p>We take reasonable steps to keep rider information secure:</p>
          <ul>
            <li>Data is stored on secure servers</li>
            <li>Access is limited to authorized My Mart personnel</li>
            <li>
              Security measures are in place to prevent unauthorized access
            </li>
          </ul>

          <p>We do not sell, rent, or misuse rider data.</p>

          <h2>5. Data Sharing</h2>

          <p>Rider information is shared only when necessary:</p>
          <ul>
            <li>For internal delivery management</li>
            <li>When required by law or legal authorities</li>
          </ul>

          <p>
            We do not share rider data with advertisers or third-party marketing
            platforms.
          </p>

          <h2>6. Rider Rights</h2>

          <p>Riders have the right to:</p>
          <ul>
            <li>View their profile information</li>
            <li>Request corrections if any detail is incorrect</li>
            <li>Contact My Mart regarding data usage or privacy concerns</li>
          </ul>

          <h2>7. Updates to This Policy</h2>

          <p>
            This Privacy Policy may be updated occasionally to reflect system or
            legal changes. Riders will be informed through the app or official
            communication channels.
          </p>

          <h2>8. Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, please contact:
          </p>

          <address className="not-italic">
            <strong>My Mart Industries Pvt. Ltd.</strong>
            <br />
            Panipokhari, Kathmandu, Nepal
            <br />📞 Customer Support: 01-4002663
            <br />📱 WhatsApp / Viber: 9802075708
          </address>
        </article>
      </main>
      <AvailableCities />
      <Footer />
    </>
  );
}
