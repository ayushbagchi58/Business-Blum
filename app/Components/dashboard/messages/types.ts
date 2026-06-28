export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  timestamp: string;
  isUser: boolean;
}

export interface Advisor {
  id: string;
  name: string;
  title: string;
  avatar?: string;
  status: "Available" | "Busy" | "Offline";
}

export interface MessagesData {
  advisor: Advisor;
  messages: Message[];
}
