"use client"

interface CampaignData {
  raised: number
  goal: number
  percentage: number
}

export function MobileFooter({ campaignData, onDonateClick }: { campaignData: CampaignData; onDonateClick?: () => void }) {
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] shadow-lg z-50">
      <div className="p-4">
        {/* Progress Info */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-bold text-[#4caf50]">
            {formatCurrency(campaignData.raised)}
          </div>
          <div className="text-sm text-[#666]">
            Meta: {formatCurrency(campaignData.goal)}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#e0e0e0] rounded-full h-2 mb-3">
          <div 
            className="bg-[#4caf50] h-2 rounded-full"
            style={{ width: `${Math.min(campaignData.percentage, 100)}%` }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button onClick={onDonateClick} className="w-full bg-[#e91e63] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#c2185b] transition-colors">
            DOAR
          </button>
        </div>
      </div>
    </div>
  )
}
