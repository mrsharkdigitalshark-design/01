"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { CampaignHeader } from "@/components/campaign-header"
import { CampaignFooter } from "@/components/campaign-footer"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", formData)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <CampaignHeader />
      
      <main className="flex-1 flex items-center justify-center py-8 md:py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 md:p-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-sm text-[#5fafba] hover:text-[#4a8f97] transition-colors font-medium">
              ← Voltar para a campanha
            </Link>
          </div>

          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/images/banner.png" 
              alt="Campanha do Bem" 
              className="h-16 object-contain mx-auto mb-4"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#333] text-center mb-2">Login</h1>
          
          {/* Signup Link */}
          <div className="text-center mb-6">
            <span className="text-sm text-[#666]">Não tem conta? </span>
            <Link href="/cadastro" className="text-sm text-[#5fafba] font-medium hover:text-[#4a8f97] transition-colors">
              Cadastre-se aqui
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#333] mb-2">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                className="w-full px-4 py-3 border-2 border-[#5fafba] rounded-lg focus:outline-none focus:border-[#e91e63] transition-colors"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-[#333] mb-2">
                Senha <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 border-2 border-[#5fafba] rounded-lg focus:outline-none focus:border-[#e91e63] transition-colors"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="#" className="text-xs text-[#5fafba] hover:text-[#4a8f97] transition-colors">
                Esqueceu a senha?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#5fafba] text-white py-3 rounded-lg font-medium hover:bg-[#4a8f97] transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>

      <CampaignFooter />
    </div>
  )
}
