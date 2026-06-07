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

          {/* Column 3: WhatsApp + CNPJ + Hours */}
          <div className="flex flex-col">
            <div className="mb-6">
               <h4 className="font-bold text-gray-800 tracking-wide uppercase mb-1">Contato</h4>
               <div className="h-0.5 w-full bg-blue-600 mb-3"></div>
               <a
                 href="https://wa.me/5548999552658"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-700 hover:text-[#25D366] transition-colors font-bold text-base group"
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="20"
                   height="20"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   className="text-[#25D366] group-hover:scale-105 transition-transform"
                 >
                   <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 1.97 14.162.94 11.53.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.847l-.993 3.629 3.734-.972zm11.23-6.223c-.302-.15-1.78-.875-2.056-.975-.275-.1-.476-.15-.675.15-.199.3-.77.975-.945 1.175-.175.2-.35.225-.65.075-.302-.15-1.272-.469-2.423-1.494-.895-.797-1.498-1.782-1.674-2.081-.175-.3-.018-.462.13-.61.135-.133.303-.35.454-.525.152-.175.202-.3.303-.5.101-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.199 0-.523.074-.797.374-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.116 4.525.715.31 1.273.495 1.71.635.717.228 1.37.195 1.885.118.574-.086 1.78-.725 2.03-1.425.25-.7.25-1.299.175-1.425-.075-.125-.275-.2-.575-.35z" />
                 </svg>
                 <span>(48) 99955-2658</span>
               </a>
            </div>

            <div className="mb-6">
               <h4 className="font-bold text-gray-800 tracking-wide uppercase mb-1">CNPJ: 61.005.731/0001-14</h4>
               <div className="h-0.5 w-full bg-blue-600"></div>
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
