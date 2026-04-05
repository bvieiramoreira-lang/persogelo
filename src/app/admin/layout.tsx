import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM Lite - Persogelo',
  description: 'Painel Administrativo da Persogelo',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-primary text-white py-4 px-6 shadow-md flex justify-between items-center">
         <div className="font-black text-xl tracking-tight">Persogelo <span className="font-light opacity-80">Admin</span></div>
         <a href="/" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">Voltar ao Site</a>
      </header>
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  )
}
