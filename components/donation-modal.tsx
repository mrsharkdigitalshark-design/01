'use client'

import { X, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState(false)
  const pixKey = "d9c5fc90-38b2-4cf6-8873-2fa9be331143"

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
      <div className="w-full md:w-full md:max-w-2xl bg-white rounded-t-2xl md:rounded-lg shadow-lg overflow-hidden animate-in slide-in-from-bottom-5 md:slide-in-from-center-0">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Doação via PIX</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Instructions */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              Use o QR Code do Pix para pagar
            </p>
            <p className="text-xs text-purple-800">
              Abra o app em que vai fazer a transferência, escaneie a imagem!
            </p>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="border-4 border-purple-500 rounded-2xl p-4 bg-white">
              <img
                src="/images/qrcode-pix.jpeg"
                alt="QR Code PIX"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>

          {/* Pix Key Section */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Chave PIX (Aleatória)
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={pixKey}
                readOnly
                className="flex-1 bg-white border border-yellow-300 rounded px-3 py-2 text-sm text-gray-700 font-mono"
              />
              <button
                onClick={handleCopyPix}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 p-2 rounded transition-colors"
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Como fazer sua doação:
            </p>
            <ol className="text-sm text-gray-700 space-y-2">
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600 min-w-fit">1.</span>
                <span>Abra seu banco ou app PIX</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600 min-w-fit">2.</span>
                <span>Selecione "Transferência PIX" ou escaneie o QR Code</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600 min-w-fit">3.</span>
                <span>Cole a chave PIX ou use o código</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-blue-600 min-w-fit">4.</span>
                <span>Confirme o valor e conclua a transferência</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
