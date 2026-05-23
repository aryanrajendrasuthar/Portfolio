import { NextRequest, NextResponse } from "next/server";
import { assistantKnowledge } from "@/data/assistant-knowledge";

function getAssistantReply(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("who are you") ||
    text.includes("tell me about aryan") ||
    text.includes("intro")
  ) {
    return assistantKnowledge.intro;
  }

  if (
    text.includes("skill") ||
    text.includes("tech stack") ||
    text.includes("technology") ||
    text.includes("technologies")
  ) {
    return `Aryan works with ${assistantKnowledge.skills.join(", ")}.`;
  }

  if (text.includes("avnet")) {
    return assistantKnowledge.experience.avnet;
  }

  if (
    text.includes("orion")
  ) {
    return assistantKnowledge.experience.orion;
  }

  if (
    text.includes("kafka") ||
    text.includes("distributed") ||
    text.includes("microservices")
  ) {
    return `${assistantKnowledge.experience.avnet} He also has deeper distributed systems work in the AI Simulation Platform: ${assistantKnowledge.projects.distributedAISimulation}`;
  }

  if (text.includes("simulation") || text.includes("selfjustice") || text.includes("courtroom")) {
    return assistantKnowledge.projects.distributedAISimulation;
  }

  if (text.includes("gym") || text.includes("trainer") || text.includes("fitness")) {
    return assistantKnowledge.projects.myGymTrainer;
  }

  if (text.includes("physio")) {
    return assistantKnowledge.projects.physio;
  }

  if (
    text.includes("smart quote") ||
    text.includes("quotation") ||
    text.includes("quote estimator")
  ) {
    return assistantKnowledge.projects.smartquote;
  }

  if (text.includes("emergency") || text.includes("sos")) {
    return assistantKnowledge.projects.emergencySOS;
  }

  if (
    text.includes("emotion") ||
    text.includes("emofusion") ||
    text.includes("hubert") ||
    text.includes("multimodal")
  ) {
    return assistantKnowledge.projects.emofusion;
  }

  if (
    text.includes("rag") ||
    text.includes("knowledge assistant") ||
    text.includes("retrieval")
  ) {
    return assistantKnowledge.projects.aiKnowledgeAssistant;
  }

  if (text.includes("certificate") || text.includes("certification")) {
    return assistantKnowledge.certifications;
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("linkedin") ||
    text.includes("github")
  ) {
    return assistantKnowledge.contact;
  }

  return "I can help with Aryan's experience, projects, tech stack, certifications, and contact details. Try asking about Avnet, distributed systems, PhysioApp, EmoFusion, the AI Simulation Platform, or his backend skills.";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body?.message ?? "";

    const reply = getAssistantReply(message);

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "Something went wrong while answering that question." },
      { status: 500 }
    );
  }
}
