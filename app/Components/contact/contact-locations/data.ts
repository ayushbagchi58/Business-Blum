import { ContactLocationsSectionData } from "./types";

export const contactLocationsSectionData: ContactLocationsSectionData = {
  heading: "Our Locations",
  description: "Visit us at one of our offices nationwide",

  locations: [
    {
      id: 1,
      city: "New York (HQ)",
      addressLine1: "123 Financial Blvd",
      addressLine2: "New York, NY 10001",
      hours: "Mon-Fri: 8am-8pm EST",
    },
    {
      id: 2,
      city: "Los Angeles",
      addressLine1: "456 Business Ave",
      addressLine2: "Los Angeles, CA 90001",
      hours: "Mon-Fri: 8am-8pm PST",
    },
    {
      id: 3,
      city: "Chicago",
      addressLine1: "789 Commerce St",
      addressLine2: "Chicago, IL 60601",
      hours: "Mon-Fri: 8am-8pm CST",
    },
  ],
};
