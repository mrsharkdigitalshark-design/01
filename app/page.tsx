"use client"

import { useState } from "react"
import { CampaignHeader } from "@/components/campaign-header"
import { CampaignSidebar } from "@/components/campaign-sidebar"
import { CampaignTabs } from "@/components/campaign-tabs"
import { MobileFooter } from "@/components/mobile-footer"
import { CampaignCarousel } from "@/components/campaign-carousel"
import { CampaignFooter } from "@/components/campaign-footer"
import { DonationModal } from "@/components/donation-modal"

export default function CampaignPage() {
  const [activeTab, setActiveTab] = useState("sobre")
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  
  const campaignData = {
    title: "SALVEM OS 3 CACHORROS",
    author: "JULLIA MARQUES",
    category: "Animal",
    raised: 500.00,
    goal: 5000.00,
    donors: 13,
    percentage: 10,
    slug: "ajudesalvarvidas"
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <CampaignHeader />
      
      {/* Banner */}
      <div className="bg-white px-4 md:px-6 py-4 md:py-6 shadow-sm">
        <img 
          src="/images/banner.png" 
          alt="Campanha do Bem" 
          className="h-16 md:h-20 object-contain"
        />
      </div>
      
      <main className="max-w-full mx-auto px-0 py-0 md:px-4 md:py-6 flex-1">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Content */}
          <div className="flex-1 min-w-0">
            {/* Campaign Carousel */}
            <CampaignCarousel />
            
            {/* Title and Info */}
            <div className="bg-white rounded-none md:rounded-lg p-4 md:p-6 shadow-none md:shadow-sm mb-4 md:mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-[#333] mb-2">{campaignData.title}</h1>
              <div className="flex items-center gap-2 text-xs md:text-sm text-[#666]">
                <span className="font-medium text-[#333]">{campaignData.author}</span>
                <span className="bg-[#e8f5e9] text-[#4caf50] px-2 py-0.5 rounded text-xs font-medium">
                  {campaignData.category}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <CampaignTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Right Sidebar - Hidden on Mobile */}
          <div className="hidden md:block md:w-[350px]">
            <CampaignSidebar campaignData={campaignData} onDonateClick={() => setIsDonationModalOpen(true)} />
          </div>
        </div>
      </main>

      {/* Mobile Footer */}
      <MobileFooter campaignData={campaignData} onDonateClick={() => setIsDonationModalOpen(true)} />

      {/* Campaign Footer */}
      <CampaignFooter />

      {/* Donation Modal */}
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </div>
  )
}
