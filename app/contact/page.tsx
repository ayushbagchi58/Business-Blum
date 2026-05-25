import ContactFormSection from "../Components/contact/contact-form";
import ContactHeroSection from "../Components/contact/contact-hero";
import ContactInfoSection from "../Components/contact/contact-info";
import ContactLocationsSection from "../Components/contact/contact-locations";

export default function Page() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactLocationsSection />
    </>
  );
}
