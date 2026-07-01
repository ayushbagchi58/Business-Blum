import { ProgressStep } from "./types";

export const applicationProgressSteps: ProgressStep[] = [
  {
    id: 1,
    title: "Create your account",
    subtitle: "Done! You're in.",
    status: "completed",
    action: "Start",
  },
  {
    id: 2,
    title: "Start your application",
    subtitle: "Takes under 3 minutes",
    status: "active",
    action: "Start",
  },
  {
    id: 3,
    title: "Upload Documents",
    subtitle: "View the documents page",
    status: "pending",
  },
];
