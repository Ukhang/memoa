import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Memoa",
  description:
    "Review Memoa's Terms and Conditions to understand your rights, responsibilities, and the rules for using our services.",
};

const TermsAndConditionsPage = () => {
  return (
    <main className="dark:bg-[#1F1F1F]">
      <div className="max-w-2xl mx-auto pb-16 px-4">
        <h1 className="font-medium text-xl md:text-2xl text-black dark:text-white text-center mb-4">
          Terms and Conditions
        </h1>

        <section className="space-y-6 text-base leading-relaxed">
          <p className="w-full py-0.5 text-left text-muted-foreground">
            Welcome to Memoa. By accessing or using our application, you agree
            to be bound by these Terms and Conditions. Please read them
            carefully.
          </p>

          <div className="space-y-4">
            <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
              1. Use of Our Services
            </h2>
            <p className="text-muted-foreground">
              You agree to use Memoa only for lawful purposes and in accordance
              with these Terms. Unauthorized use or misuse of the application is
              strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
              2. Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              All content, trademarks, and data on Memoa are the property of
              Memoa or its licensors. You may not reproduce, distribute, or
              create derivative works without our explicit permission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
              3. User Responsibilities
            </h2>
            <p className="text-muted-foreground">
              You are responsible for maintaining the confidentiality of your
              account and any activities that occur under your account. You
              agree to notify us immediately of any unauthorized use.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
              4. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              Memoa is provided &quot;as is&quot; without warranties of any kind. We are
              not liable for any damages resulting from your use of the
              application.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
              5. Modifications to Terms
            </h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. Continued
              use of Memoa after changes constitutes your acceptance of the new
              Terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="w-full text-left text-lg text-zinc-950 dark:text-zinc-50 text-muted-foreground">
              6. Contact Information
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms and Conditions, please
              contact us at support@memoa.app.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;
