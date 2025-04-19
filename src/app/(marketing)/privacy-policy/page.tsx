import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Memoa",
  description:
    "Read Memoa's Privacy Policy to understand how we collect, use, and protect your information. Your privacy and trust are important to us.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-2xl mx-auto pb-16 px-4">
      <h1 className="font-medium text-xl md:text-2xl text-black dark:text-white text-center mb-4">
        Privacy Policy
      </h1>

      <section className="space-y-6 text-base leading-relaxed">
        <p className="w-full py-0.5 text-left text-muted-foreground">
          Your privacy is important to us. This Privacy Policy explains how
          Memoa collects, uses, and protects your information when you use our
          application.
        </p>

        <div className="space-y-4">
          <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
            1. Information We Collect
          </h2>
          <p className="text-muted-foreground">
            Memoa does not collect personal information unless you voluntarily
            provide it. We may collect basic usage data to improve the
            performance and experience of the application.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
            2. How We Use Information
          </h2>
          <p className="text-muted-foreground">
            We use collected information solely to enhance and optimize the
            functionality of Memoa. Your data is never sold, shared, or rented
            to third parties.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
            3. Data Security
          </h2>
          <p className="text-muted-foreground">
            We prioritize your data security and implement appropriate measures
            to protect your information from unauthorized access or disclosure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
            4. Third-Party Services
          </h2>
          <p className="text-muted-foreground">
            Memoa may integrate with third-party services. We are not
            responsible for the privacy practices of these external services. We
            encourage you to review their privacy policies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
            5. Changes to This Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Changes will be
            reflected on this page with a new effective date.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
            6. Contact Us
          </h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at support@memoa.app.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
