"use client";

import { useState } from "react";
import Image from "next/image";
import { Bell, Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import OverviewTab from "./OverviewTab";
import { ApplicationsTab, applicationsData } from "./applications";
import { OffersTab, offersData } from "./offers";
import { DocumentsTab, documentsData } from "./documents";
import { MessagesTab, messagesData } from "./messages";
import { ProfileTab, profileData } from "./profile";
import { DashboardData } from "./types";

interface DashboardLayoutProps {
  data: DashboardData;
}

export default function DashboardLayout({ data }: DashboardLayoutProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        user={data.user}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>

              <h1 className="text-lg font-semibold capitalize text-gray-900">
                {activeTab}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#0EA56B]" />
              </button>

              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-[#0EA56B]">
                <Image
                  src={data.user.avatar}
                  alt={data.user.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6">
          <div className="mx-auto max-w-4xl">
            {activeTab === "overview" && <OverviewTab data={data} />}
            {activeTab === "applications" && (
              <ApplicationsTab applications={applicationsData.applications} />
            )}
            {activeTab === "offers" && (
              <OffersTab
                offers={offersData.offers}
                totalOffers={offersData.totalOffers}
              />
            )}
            {activeTab === "documents" && (
              <DocumentsTab documents={documentsData.documents} />
            )}
            {activeTab === "messages" && (
              <MessagesTab
                advisor={messagesData.advisor}
                initialMessages={messagesData.messages}
              />
            )}
            {activeTab === "profile" && (
              <ProfileTab initialData={profileData} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
