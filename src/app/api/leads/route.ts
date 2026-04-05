import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Capturar novo Lead (Chamada pelo formulário)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, source } = body;

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email: email || null,
        source: source || "Landing Page Persogelo",
      },
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar lead:", error);
    return NextResponse.json({ success: false, error: "Erro interno no servidor" }, { status: 500 });
  }
}

// Listar Leads para o Painel Admin
export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    return NextResponse.json({ success: false, error: "Erro interno no servidor" }, { status: 500 });
  }
}
