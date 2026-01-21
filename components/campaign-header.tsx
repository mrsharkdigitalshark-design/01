"use client"

import { Heart } from "lucide-react"
import Link from "next/link"

export function CampaignHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-2 md:py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 md:gap-2 min-w-fit">
          <div className="flex items-center">
            <Heart className="w-6 md:w-8 h-6 md:h-8 text-[#e91e63] fill-[#e91e63]" />
            <span className="ml-1 md:ml-2 text-sm md:text-xl font-semibold text-[#333]">
              Campanha do <span className="text-[#e91e63]">Bem</span>
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-3 md:gap-6">
          <Link href="/login" className="text-[#666] hover:text-[#e91e63] text-xs md:text-sm font-medium whitespace-nowrap">
            LOGIN
          </Link>
          <Link href="/cadastro" className="bg-[#e91e63] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-[#c2185b] transition-colors whitespace-nowrap">
            CADASTRE
          </Link>
        </nav>
      </div>
    </header>
  )
}
