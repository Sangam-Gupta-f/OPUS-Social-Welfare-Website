// Generate pricvacy policy page for OPUS Social Welfare Foundation using Next.js and Tailwind CSS
// The page should include a header, a section for the privacy policy content, and a footer.
// The privacy policy content should be structured with headings and paragraphs for better readability.
// The footer should include copyright information and social media links.

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Privacy Policy
          </h1>
          {/* Privacy Policy Content */}
          <div className="max-w-3xl text-left">
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p className="mb-6">
              At OPUS Social Welfare Foundation, we are committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your personal information when you visit our website
              or interact with our services.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="mb-6">
              We may collect personal information such as your name, email
              address, and contact details when you voluntarily provide it to us
              through our website or other interactions. We also collect
              non-personal information such as browser type, IP address, and
              usage data to improve our services.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-6">
              We use your personal information to provide and improve our
              services, communicate with you, and send you updates about our
              initiatives. We do not sell or rent your personal information to
              third parties.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction. However, please be aware that no
              method of transmission over the internet or electronic storage is
              completely secure.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="mb-6">
              You have the right to access, correct, or delete your personal
              information. You can also opt-out of receiving communications from
              us at any time. To exercise these rights, please contact us using
              the information provided on our website.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. You are advised to review this Privacy Policy
              periodically for any changes.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please
              contact us at
              <a
                href="mailto:info@opusfoundation.org"
                className="text-blue-500 hover:underline"
              >
                {" "}
                info@opusfoundation.org
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
