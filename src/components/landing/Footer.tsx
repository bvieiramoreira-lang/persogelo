import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f6f8] text-[#333] border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-16">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-8 mb-8 gap-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-sm md:text-base">Siga conectado nas nossas redes</h4>
            <div className="flex items-center gap-4 text-gray-700">
              <a href="https://www.instagram.com/persogelo/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/@PersogeloBrindes" target="_blank" rel="noreferrer" className="hover:text-[#FF0000] transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <img 
              src="/logo-rodape.png" 
              alt="Persogelo" 
              className="h-14 w-auto object-contain mb-4"
            />
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* Column 1: Badges */}
          <div className="flex flex-col gap-6">
             <div className="text-gray-900">
                 <h3 className="text-lg md:text-xl xl:text-2xl mb-1 text-[#333]">
                   <span className="font-black">Gelo gel</span> <span className="font-medium">Personalizado</span>
                 </h3>
                 <div className="flex items-center mb-2 text-xs md:text-sm text-gray-800 font-medium whitespace-nowrap">
                   Produção própria | Palhoça - SC 
                   <img src="/bandeira-brasil.png" alt="Bandeira Brasil" className="w-5 h-auto ml-1.5" />
                 </div>
                 <p className="text-[10px] md:text-xs text-gray-600 font-semibold tracking-wide uppercase">
                   uma empresa do grupo <a href="https://personalizapp.com.br/" target="_blank" rel="noreferrer" className="font-black hover:text-primary transition-colors text-gray-900">PERSONALIZA</a>
                 </p>
             </div>

             <div className="flex gap-4">
               {/* SSL Badge similar to screenshot */}
               <div className="flex items-center gap-2 bg-[#8bc34a]/10 border border-[#8bc34a]/30 text-[#689f38] rounded-lg px-4 py-2 w-max shadow-sm">
                 <ShieldCheck size={28} className="fill-[#8bc34a] text-white" />
                 <div className="flex flex-col">
                   <span className="font-black tracking-tight text-[11px] uppercase leading-none text-gray-800">Site Seguro</span>
                   <span className="font-bold text-[10px] uppercase leading-none mt-0.5">SSL Certificado</span>
                 </div>
               </div>
             </div>
          </div>

          {/* Column 2: Addresses */}
          <div className="flex flex-col">
            <div className="mb-4 inline-block">
               <h4 className="font-bold text-gray-800 tracking-wide uppercase mb-1">Endereços</h4>
               <div className="h-0.5 w-full bg-blue-600"></div>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
              • R. Açucena, 106 - Jardim Eldorado,<br /> Palhoça - SC, 88133-700
            </p>
          </div>

          {/* Column 3: CNPJ + Hours */}
          <div className="flex flex-col">
            <div className="mb-8">
               <h4 className="font-bold text-gray-800 tracking-wide uppercase mb-1">CNPJ: 61.005.731/0001-14</h4>
               <div className="h-0.5 w-full max-w-[200px] bg-blue-600"></div>
            </div>

            <div className="inline-block mb-3">
               <h4 className="font-bold text-gray-800 tracking-wide uppercase mb-1">Horários de Atendimento</h4>
               <div className="h-0.5 w-full bg-blue-600"></div>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              Segunda a sexta-feira 08h às 18h<br/>
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium mt-4">
              <strong>Email:</strong> contato@persogelo.com.br
            </p>
          </div>

        </div>

        {/* Global Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Persogelo. Todos os direitos reservados.</p>
          <span className="hidden md:inline text-gray-300">|</span>
          <p>
            Desenvolvimento: <a href="https://personalizapp.com.br/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-semibold">Persys - Grupo Personaliza</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
