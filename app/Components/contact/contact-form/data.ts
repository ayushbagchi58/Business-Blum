import { ContactFormSectionData } from "./types";

export const contactFormSectionData: ContactFormSectionData = {
  heading: "Send Us a Message",

  disclaimer:
    "By submitting this form, you agree to our Privacy Policy and Terms of Service.",

  submitButtonText: "Send Message",

  formFields: [
    {
      id: 1,
      name: "firstName",
      type: "text",
      label: "First Name *",
      placeholder: "John",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      label: "Last Name *",
      placeholder: "Doe",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      label: "Email *",
      placeholder: "john@example.com",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      label: "Phone",
      placeholder: "(555) 123-4567",
    },
    {
      id: 5,
      name: "subject",
      type: "text",
      label: "Subject *",
      placeholder: "How can we help you?",
      required: true,
    },
    {
      id: 6,
      name: "message",
      type: "textarea",
      label: "Message *",
      placeholder: "Tell us more about your needs...",
      required: true,
    },
  ],

  businessHours: [
    {
      id: 1,
      day: "Monday - Friday",
      time: "8:00 AM - 8:00 PM EST",
    },
    {
      id: 2,
      day: "Saturday",
      time: "9:00 AM - 5:00 PM EST",
    },
    {
      id: 3,
      day: "Sunday",
      time: "Closed",
    },
  ],

  sidebarCards: [
    {
      id: 1,
      title: "Business Hours",
      description:
        "Available during standard business hours for support and consultation.",
      icon: "clock",
    },
    {
      id: 2,
      title: "FAQ",
      description:
        "Visit our FAQ page for answers to common questions about our loan matching service.",
      buttonLabel: "View FAQ",
      buttonHref: "/howitworks",
      icon: "help",
    },
  ],
};
