"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Message, Advisor } from "./types";

interface MessagesTabProps {
  advisor: Advisor;
  initialMessages: Message[];
}

export default function MessagesTab({
  advisor,
  initialMessages,
}: MessagesTabProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: `MSG-${Date.now()}`,
      senderId: "USER-001",
      senderName: "Maria Gonzalez",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      isUser: true,
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Backend integration placeholder
    console.log("Sending message:", message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusColor = (status: Advisor["status"]) => {
    switch (status) {
      case "Available":
        return "bg-[#0EA56B]";
      case "Busy":
        return "bg-yellow-500";
      case "Offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="flex h-[calc(100vh-180px)] flex-col">
      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="mt-1 text-sm text-gray-600">
          Your conversation with your funding advisor.
        </p>
      </div>

      {/* Chat Container */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-sm">
        {/* Advisor Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0EA56B] text-sm font-semibold text-white">
                {advisor.name.charAt(0)}
              </div>
              <span
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${getStatusColor(
                  advisor.status
                )}`}
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {advisor.name}
              </p>
              <p className="flex items-center gap-1.5 text-xs text-gray-500">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${getStatusColor(advisor.status)}`}
                />
                {advisor.status}
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex max-w-[80%] gap-3 ${
                    message.isUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  {!message.isUser && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0EA56B] text-xs font-semibold text-white">
                      {message.senderName.charAt(0)}
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.isUser
                          ? "bg-[#0EA56B] text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                    <p
                      className={`mt-1 text-xs text-gray-500 ${
                        message.isUser ? "text-right" : "text-left"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex items-end gap-3">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${advisor.name}...`}
              rows={1}
              className="flex-1 resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-500 focus:border-[#0EA56B] focus:bg-white focus:ring-4 focus:ring-[#0EA56B]/10"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg transition-all ${
                newMessage.trim()
                  ? "bg-[#0EA56B] text-white hover:bg-[#0c9461]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
