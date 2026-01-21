export function CampaignFooter() {
  return (
    <footer className="bg-[#2c3e50] text-white py-12 px-4 md:px-6 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Campanha do Bem</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              A plataforma de crowdfunding para causas que fazem a diferença.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Como Funciona</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Criar Campanha</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Política de Cookies</a></li>
            </ul>
          </div>

          {/* DIVULGUE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DIVULGUE</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Compartilhe sua campanha nas redes sociais!
            </p>
          </div>
        </div>

        {/* Aviso de Fraude */}
        <div className="border-t border-gray-700 pt-8 mb-6">
          <p className="text-sm text-gray-300 text-center">
            A Campanha do Bem é uma empresa engajada no combate às fraudes na internet.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Campanha do Bem. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
