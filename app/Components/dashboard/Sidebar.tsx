"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Tag,
  FolderOpen,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react";
import { UserProfile } from "./types";

interface SidebarProps {
  user: UserProfile;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "applications", label: "Applications", icon: FileText },
  { id: "offers", label: "Offers", icon: Tag },
  { id: "documents", label: "Documents", icon: FolderOpen },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "profile", label: "Profile", icon: User },
];

export default function Sidebar({
  user,
  activeTab,
  onTabChange,
}: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#0a1628] text-white transition-transform lg:translate-x-0">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0EA56B]">
            <Image
              src="/Logos/navlogo.png"
              alt="Business Blum"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-lg font-semibold">Business Blum</span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#0EA56B]/20 text-[#0EA56B]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-white/10 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#0EA56B]">
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="truncate text-xs text-gray-400">
                {user.businessName}
              </p>
            </div>
          </div>
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white">
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </div>
    </aside>
  );
}
