"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Clock, CheckCircle2, Trash2 } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  status: string;
  source: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Autenticação ultra simples no Client-side. Para algo rápido pro lançamento.
  const checkAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "persogelo2026") {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert("Senha incorreta");
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (error) {
      console.error("Erro ao carregar leads", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
      }
    } catch (error) {
      console.error("Erro ao atualizar status", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Novo": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Atendido": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Fechado": return "bg-green-100 text-green-800 border-green-200";
      case "Perdido": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Acesso Restrito</h2>
          <form onSubmit={checkAuth} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-600">Senha Master</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary"
                autoFocus
              />
            </div>
            <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg mt-2">
              Entrar no Painel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Orçamentos Recebidos</h1>
          <p className="text-gray-500 mt-1">Gerencie e atenda os leads gerados pela Landing Page</p>
        </div>
        <button onClick={fetchLeads} className="text-primary font-bold hover:underline">
          Atualizar Tabela
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm">
                <th className="px-6 py-4 font-semibold">Data e Hora</th>
                <th className="px-6 py-4 font-semibold">Nome / Empresa</th>
                <th className="px-6 py-4 font-semibold">Contato</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Gatilho</th>
                <th className="px-6 py-4 font-semibold text-right">Ação Rápida</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    Carregando contatos...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    Nenhum orçamento recebido ainda.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                     <td className="px-6 py-4 text-sm text-gray-600">
                      <div>{new Date(lead.createdAt).toLocaleDateString('pt-BR')}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{new Date(lead.createdAt).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-800">{lead.name}</div>
                      {lead.email && <div className="text-sm text-gray-500">{lead.email}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-700">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 outline-none cursor-pointer appearance-none ${getStatusColor(lead.status)}`}
                      >
                        <option value="Novo">Novo</option>
                        <option value="Atendido">Sendo Atendido</option>
                        <option value="Fechado">Fechado</option>
                        <option value="Perdido">Perdido</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500 font-medium whitespace-nowrap">
                      {lead.source}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a 
                        href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}?text=Olá ${lead.name}, recebemos seu pedido de orçamento para a Persogelo!`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-md shadow-[#25D366]/20"
                      >
                        <MessageCircle size={16} />
                        Chamar
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
