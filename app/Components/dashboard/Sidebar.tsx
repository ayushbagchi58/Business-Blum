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
  X,
  Loader2,
} from "lucide-react";
import { useLogout } from "@/hooks/useAuth";
import { UserProfile } from "./types";

interface SidebarProps {
  user: UserProfile;
  activeTab: string;
  onTabChange: (tab: string) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
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
  isMobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const logoutMutation = useLogout();

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    onCloseMobile(); // Close mobile sidebar after selection
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 bg-[#0a1628] text-white transition-transform duration-300 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-3">
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

            <button
              onClick={onCloseMobile}
              className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
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
            <button
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {logoutMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Logging out...
                </>
              ) : (
                <>
                  <LogOut className="h-4 w-4" />
                  Log out
                </>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
