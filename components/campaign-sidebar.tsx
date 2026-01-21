"use client"

import { useState } from "react"
import { Copy, Facebook, Twitter, Send, MessageCircle, Check } from "lucide-react"

interface CampaignData {
  raised: number
  goal: number
  donors: number
  percentage: number
  slug: string
}

export function CampaignSidebar({ campaignData, onDonateClick }: { campaignData: CampaignData; onDonateClick?: () => void }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`campanhadobem.com/${campaignData.slug}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
      {/* Amount Raised */}
      <div className="mb-4">
        <div className="text-3xl font-bold text-[#4caf50]">
          {formatCurrency(campaignData.raised)}
        </div>
        <div className="text-sm text-[#666] mt-1">
          {campaignData.donors} pessoas já contribuíram
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#666]">Meta: {formatCurrency(campaignData.goal)}</span>
          <span className="font-medium text-[#4caf50]">{campaignData.percentage}%</span>
        </div>
        <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
          <div 
            className="bg-[#4caf50] h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(campaignData.percentage, 100)}%` }}
          />
        </div>
      </div>

      {/* Donate Button */}
      <button onClick={onDonateClick} className="w-full bg-[#e91e63] text-white py-4 rounded-lg text-lg font-bold hover:bg-[#c2185b] transition-colors mb-6">
        DOAR
      </button>

      {/* Help Message Section */}
      <div className="border-t border-[#e0e0e0] pt-4">
        <div className="text-sm font-medium text-[#333] mb-2">Ajude essa causa a chegar mais longe</div>
        <div className="text-sm text-[#666] leading-relaxed">
          Compartilhar também é uma forma de ajudar.
        </div>
      </div>
    </div>
  )
}
