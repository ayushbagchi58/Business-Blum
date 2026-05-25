"use client";

import ContactFormCard from "./ContactFormCard";
import ContactSidebarCardComponent from "./ContactSidebarCardComponent";

import { contactFormSectionData } from "./data";

export default function ContactFormSection() {
  const {
    heading,
    disclaimer,
    submitButtonText,
    formFields,
    businessHours,
    sidebarCards,
  } = contactFormSectionData;

  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-5xl px-3 sm:px-4 lg:px-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.38fr_0.72fr]">
          <ContactFormCard
            heading={heading}
            disclaimer={disclaimer}
            submitButtonText={submitButtonText}
            formFields={formFields}
          />

          <div className="space-y-4">
            {sidebarCards.map((card, index) => (
              <ContactSidebarCardComponent
                key={card.id}
                card={card}
                businessHours={businessHours}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
