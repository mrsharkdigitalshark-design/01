"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { CampaignHeader } from "@/components/campaign-header"
import { CampaignFooter } from "@/components/campaign-footer"

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    cpf: "",
    email: "",
    confirmEmail: "",
    senha: "",
    confirmSenha: "",
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
    console.log("Cadastro:", formData)
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
          <h1 className="text-2xl font-bold text-[#333] text-center mb-2">Cadastro</h1>
          
          {/* Login Link */}
          <div className="text-center mb-6">
            <span className="text-sm text-[#666]">Já tem conta? </span>
            <Link href="/login" className="text-sm text-[#5fafba] font-medium hover:text-[#4a8f97] transition-colors">
              Faça Login
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* CPF/CNPJ */}
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-[#333] mb-2">
                CPF/CNPJ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="Digite seu CPF ou CNPJ"
                className="w-full px-4 py-3 border-2 border-[#5fafba] rounded-lg focus:outline-none focus:border-[#e91e63] transition-colors"
                required
              />
            </div>

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

            {/* Confirm Email */}
            <div>
              <label htmlFor="confirmEmail" className="block text-sm font-medium text-[#333] mb-2">
                Confirma E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                placeholder="Confirme seu email"
                className="w-full px-4 py-3 border-2 border-[#5fafba] rounded-lg focus:outline-none focus:border-[#e91e63] transition-colors"
                required
              />
            </div>

            {/* Senha Row */}
            <div className="grid grid-cols-2 gap-4">
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
                  placeholder="Crie uma senha"
                  className="w-full px-4 py-3 border-2 border-[#5fafba] rounded-lg focus:outline-none focus:border-[#e91e63] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmSenha" className="block text-sm font-medium text-[#333] mb-2">
                  Confirme a Senha <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmSenha"
                  name="confirmSenha"
                  value={formData.confirmSenha}
                  onChange={handleChange}
                  placeholder="Confirme a senha"
                  className="w-full px-4 py-3 border-2 border-[#5fafba] rounded-lg focus:outline-none focus:border-[#e91e63] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#5fafba] text-white py-3 rounded-lg font-medium hover:bg-[#4a8f97] transition-colors mt-6"
            >
              Próximo Passo
            </button>
          </form>
        </div>
      </main>

      <CampaignFooter />
    </div>
  )
}
