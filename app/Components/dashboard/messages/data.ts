import { MessagesData } from "./types";

export const messagesData: MessagesData = {
  advisor: {
    id: "ADV-001",
    name: "James Okafor",
    title: "Funding Advisor",
    status: "Available",
  },
  messages: [
    {
      id: "MSG-001",
      senderId: "ADV-001",
      senderName: "James Okafor",
      content:
        "Hi Maria! Your documents look great. Clearfield Capital has pre-approved you for $100k. Any questions about the terms?",
      timestamp: "10:45 AM",
      isUser: false,
    },
    {
      id: "MSG-002",
      senderId: "USER-001",
      senderName: "Maria Gonzalez",
      content: "What's the difference between a factor rate and APR?",
      timestamp: "10:47 AM",
      isUser: true,
    },
    {
      id: "MSG-003",
      senderId: "ADV-001",
      senderName: "James Okafor",
      content:
        "A 1.25× factor rate means you repay $125k on $100k — fixed total cost. APR factors in time. Over 12 months, 1.25× is roughly 40% APR. Working Capital is still your fastest path given your cash flow goals.",
      timestamp: "10:48 AM",
      isUser: false,
    },
  ],
};
