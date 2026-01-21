"use client"

import { Flag, Loader2 } from "lucide-react"
import { useState } from "react"

interface TabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function CampaignTabs({ activeTab, setActiveTab }: TabsProps) {
  const [reportOpen, setReportOpen] = useState(false)
  const [reportReason, setReportReason] = useState("")
  const [reportSubmitting, setReportSubmitting] = useState(false)

  const messages = [
    { name: "Pedro Henrique de Almeida Azevedo", text: "E tudo que sobrou do meu vale transporte, mas espero que ajude", time: "há 3 meses" },
    { name: "Doador Anônimo", text: "Que Deus abençoe e proteja cada animalzinho 🙏", time: "há 8 meses" },
    { name: "Ester Cardoso Dias", text: "Quando for divulgar meu nome pfvr, colocar Stella | Eu oro a Deus pela vida de todos os animaizinhos e que vc consiga o que é precisa pra salvar a vida dele.", time: "há 8 meses" },
    { name: "Doador Anônimo", text: "<3", time: "há 8 meses" },
    { name: "Pedro Henrique Martins Lourenço", text: "Eu não tenho muito mas vou ajudar, vou por nas minhas orações, amo cachorros e faço o possível pra ajudar ❤️ Deus te abençoe e ilumine sua vida, obrigado por existir 🙏", time: "há 8 meses" },
    { name: "Joenaria dos Santos", text: "Tudo posso naquele que me fortalece.", time: "há 8 meses" },
    { name: "Maria Eduarda Da Silva Vieira", text: "que vocês possam continuar esse trabalho incrível!", time: "há 8 meses" },
    { name: "Maria Vitória Alves Teixeira", text: "Vai ficar tudo bem 🙏", time: "há 8 meses" },
    { name: "Doador Anônimo", text: "🙏🙏🙏", time: "há 8 meses" },
    { name: "Doador Anônimo", text: "Espero que dê tudo certo!", time: "há 8 meses" },
    { name: "Doador Anônimo", text: "🐕 🐕", time: "há 8 meses" },
    { name: "Doador Anônimo", text: "Espero que o pouco que posso doar ajude", time: "há 8 meses" },
    { name: "Doador Anônimo", text: "É pouco, porém de coração", time: "há 8 meses" },
    { name: "Kettilyn Victória martins dias", text: "Não deista amiga sei que não doei muito mais é de coração deus vai te honrar por tudo que vc faz te amo amiga", time: "há 8 meses" },
  ]

  const tabs = [
    { id: "sobre", label: "Sobre" },
    { id: "mensagens", label: "Mensagens", count: messages.length },
    { id: "doadores", label: "Doadores", count: messages.length },
    { id: "denunciar", label: "Denunciar" },
  ]

  const handleReport = () => {
    if (!reportReason.trim()) return
    setReportSubmitting(true)
    setTimeout(() => {
      setReportSubmitting(false)
      setReportReason("")
      setReportOpen(false)
      alert("Denúncia enviada com sucesso!")
    }, 1500)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Tabs Header */}
      <div className="flex border-b border-[#e0e0e0]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? "text-[#e91e63] border-b-2 border-[#e91e63]"
                : "text-[#666] hover:text-[#333]"
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="ml-1 text-xs">({tab.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "sobre" && (
          <div>
            <h3 className="text-lg font-semibold text-[#333] mb-6">
              Sobre esta Campanha
            </h3>
            <div className="space-y-6 text-[#555] leading-relaxed">
              {/* Cachorro 1 */}
              <div className="border-l-4 border-[#e91e63] pl-4">
                <h4 className="font-semibold text-[#333] mb-2 flex items-center gap-2">
                  <span>🐶</span> 1º resgatado:
                </h4>
                <p>
                  Chegou em estado grave, extremamente fraco, com lesões severas nas patas, grande perda de pele e dificuldade para se locomover. Apresentava sinais claros de sofrimento prolongado e abandono.
                </p>
              </div>

              {/* Cachorro 2 */}
              <div className="border-l-4 border-[#e91e63] pl-4">
                <h4 className="font-semibold text-[#333] mb-2 flex items-center gap-2">
                  <span>🐶</span> 2º resgatado:
                </h4>
                <p>
                  Encontrado em condição crítica, muito magro e debilitado, com uma bicheira extensa e avançada na orelha. A ferida estava aberta, infeccionada e infestada por larvas, colocando sua vida em risco imediato.
                </p>
              </div>

              {/* Cachorro 3 */}
              <div className="border-l-4 border-[#e91e63] pl-4">
                <h4 className="font-semibold text-[#333] mb-2 flex items-center gap-2">
                  <span>🐶</span> 3º resgatado:
                </h4>
                <p>
                  Resgatado com ferimentos profundos, pele gravemente lesionada e infecção ativa. Sofria com uma bicheira extensa, dor constante e necessitou de atendimento veterinário urgente.
                </p>
              </div>

              {/* Situação Atual */}
              <div className="bg-[#fce4ec] rounded-lg p-4 border border-[#f8bbd0]">
                <p className="text-[#555]">
                  Todos precisaram de internação, medicação intensiva, limpeza profunda das feridas, antibióticos e acompanhamento veterinário contínuo. Atualmente, encontram-se mais estáveis, porém ainda em recuperação <span>🙏</span>
                </p>
              </div>

              {/* Próximos Passos */}
              <div className="bg-[#f0f7f4] rounded-lg p-4 border border-[#c8e6c9]">
                <h4 className="font-semibold text-[#333] mb-2">Próximos passos para a reabilitação completa:</h4>
                <p className="text-[#555]">
                  Serão necessários procedimentos cirúrgicos, fechamento das feridas, castração e a continuidade do tratamento até a total recuperação.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mensagens" && (
          <div>
            <h3 className="text-lg font-semibold text-[#333] mb-4">
              Mensagens Recebidas de quem já contribuiu
            </h3>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="border-b border-[#f0f0f0] pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-[#5fafba]">{message.name}</div>
                    <div className="text-xs text-[#999]">{message.time}</div>
                  </div>
                  <p className="text-[#555] leading-relaxed">{message.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "doadores" && (
          <div>
            <h3 className="text-lg font-semibold text-[#333] mb-4">
              Quem já contribuiu
            </h3>
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#e0e0e0] rounded-full flex items-center justify-center text-[#666] font-medium">
                      {message.name.charAt(0)}
                    </div>
                    <span className="text-[#333] font-medium">{message.name}</span>
                  </div>
                  <span className="text-sm text-[#999]">{message.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "denunciar" && (
          <div>
            <h3 className="text-lg font-semibold text-[#333] mb-4">Denunciar</h3>
            <p className="text-[#666] mb-4 leading-relaxed">
              Se você acha esta campanha inapropriada ou fraudulenta, por favor nos conte os motivos. Se preferir, você também pode deixar seu contato para coletarmos mais detalhes. O anonimato da denúncia é sempre garantido.
            </p>
            
            {!reportOpen ? (
              <button
                onClick={() => setReportOpen(true)}
                className="flex items-center gap-2 text-[#f44336] font-medium hover:bg-[#ffebee] px-4 py-2 rounded-lg transition-colors"
              >
                <Flag className="w-4 h-4" />
                Denunciar esta campanha
              </button>
            ) : (
              <div className="space-y-4">
                <textarea
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  placeholder="Descreva o motivo da denúncia..."
                  className="w-full border border-[#e0e0e0] rounded-lg p-3 text-[#333] min-h-[120px] focus:outline-none focus:border-[#e91e63] resize-none"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleReport}
                    disabled={reportSubmitting || !reportReason.trim()}
                    className="bg-[#f44336] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d32f2f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {reportSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    Enviar Denúncia
                  </button>
                  <button
                    onClick={() => {
                      setReportOpen(false)
                      setReportReason("")
                    }}
                    className="px-6 py-2 rounded-lg font-medium text-[#666] hover:bg-[#f5f5f5] transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
