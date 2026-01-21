"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/images/cachorro-1.jpg",
    alt: "1º resgatado - com lesões severas nas patas",
    number: 1,
  },
  {
    src: "/images/cachorro-2.jpg",
    alt: "2º resgatado - com bicheira na orelha",
    number: 2,
  },
  {
    src: "/images/cachorro-3.jpg",
    alt: "3º resgatado - com ferimentos profundos",
    number: 3,
  },
]

export function CampaignCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="bg-white rounded-none md:rounded-lg overflow-hidden shadow-none md:shadow-sm mb-4">
      <div className="relative bg-gray-100 overflow-hidden" style={{ height: "400px" }}>
        {/* Images */}
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all z-10"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all z-10"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={20} />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1}/{images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="bg-white px-4 py-3 flex gap-2 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? "border-[#e91e63] ring-2 ring-[#e91e63]/50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            aria-label={`Ver imagem ${index + 1}`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-contain bg-gray-50"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-xs font-bold opacity-0 hover:opacity-100 transition-opacity">
              🐶 {image.number}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
