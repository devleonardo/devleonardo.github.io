/* ═══════════════════════════════════════════════════
   config.js — CONFIGURAÇÕES DO SITE
   Edite apenas este arquivo antes de publicar.
   ═══════════════════════════════════════════════════ */

/* YouTube */
const YT_CHANNEL_ID = 'CHANNEL_ID_AQUI';  // ex: UCxxxxxxxxxxxxxxxxxxxxxxxx
const YT_API_KEY    = 'API_KEY_AQUI';      // Google Cloud Console → YouTube Data API v3

/* Caminhos dos índices (gerados pelo gerar_indices.py) */
const LEIS_INDEX_URL  = 'leis/index.json';
const FOTOS_INDEX_URL = 'fotos/index.json';

/* Dados de demonstração — remova em produção */
const MOCK_VIDEO = {
  videoId: 'dQw4w9WgXcQ',
  titulo:  'Sessão Plenária — Aprovação do Projeto de Transporte Escolar | Câmara de Itaboraí',
  data:    '23 de fevereiro de 2026',
  descricao: `✅ APROVADO! O Projeto de Lei que garante transporte escolar gratuito para alunos da rede pública municipal de Itaboraí foi aprovado por unanimidade.

📋 O que muda:
• Transporte gratuito para estudantes que moram a mais de 2km da escola
• Abrange todas as escolas municipais de Itaboraí
• Prioridade para alunos com deficiência

📍 Câmara Municipal de Itaboraí — RJ

Siga nosso trabalho:
📲 @marcosaraujo.itaborai
💬 WhatsApp: (21) 0000-0000

#Itaboraí #CâmaraMunicipal #MarcosAraújo #Vereador`
};

const MOCK_LEIS = [
  { nome: 'PL-042 – Criação do Conselho Municipal de Juventude de Itaboraí.pdf',  data: '2026-02-23T18:54:00' },
  { nome: 'Decreto-039 – Regulamenta transporte escolar gratuito.pdf',             data: '2026-02-07T14:19:00' },
  { nome: 'PL-031 – Institui Semana Municipal do Meio Ambiente.pdf',               data: '2026-01-13T21:53:00' },
  { nome: 'PL-027 – Ampliação da merenda escolar nas escolas municipais.pdf',      data: '2026-01-13T21:49:00' },
  { nome: 'Lei-019 – Iluminação pública LED no bairro Manilha.pdf',                data: '2025-12-27T09:30:00' },
  { nome: 'PL-014 – Criação do Programa Itaboraí Mais Limpa.pdf',                  data: '2025-11-10T10:00:00' },
];

const MOCK_FOTOS = [
  { arquivo: 'Inauguração da UBS Bom Sucesso.jpg',     src: null },
  { arquivo: 'Visita às escolas municipais.jpg',        src: null },
  { arquivo: 'Sessão ordinária fevereiro 2026.jpg',     src: null },
  { arquivo: 'Entrega de cestas básicas Itaboraí.jpg',  src: null },
  { arquivo: 'Reunião com moradores do Manilha.jpg',    src: null },
  { arquivo: 'Fiscalização da Praça Central.jpg',       src: null },
  { arquivo: 'Audiência pública sobre o orçamento.jpg', src: null },
  { arquivo: 'Visita ao CRAS de Itaboraí.jpg',          src: null },
];
