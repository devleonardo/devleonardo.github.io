"""
gerar_indices.py
----------------
Rode este script sempre que adicionar novos arquivos às pastas /leis/ ou /fotos/.
Ele gera os arquivos JSON que o site lê automaticamente.

Uso:
    python gerar_indices.py

Dependências: nenhuma (biblioteca padrão do Python)
"""

import os
import json
from pathlib import Path
from datetime import datetime

BASE_DIR = Path(__file__).parent

# ── LEIS E DECRETOS ────────────────────────────────────────────────────────────
def gerar_index_leis():
    leis_dir = BASE_DIR / "leis"
    leis_dir.mkdir(exist_ok=True)

    leis = []
    for arquivo in leis_dir.glob("*.pdf"):
        stat = arquivo.stat()
        data_modificacao = datetime.fromtimestamp(stat.st_mtime).isoformat()
        leis.append({
            "nome": arquivo.name,
            "data": data_modificacao
        })

    # Ordena por data decrescente (mais recente primeiro)
    leis.sort(key=lambda x: x["data"], reverse=True)

    index_path = leis_dir / "index.json"
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(leis, f, ensure_ascii=False, indent=2)

    print(f"✅ leis/index.json gerado com {len(leis)} arquivo(s).")


# ── GALERIA DE FOTOS ───────────────────────────────────────────────────────────
EXTENSOES_IMAGEM = {".jpg", ".jpeg", ".png", ".webp", ".gif"}

def gerar_index_fotos():
    fotos_dir = BASE_DIR / "fotos"
    fotos_dir.mkdir(exist_ok=True)

    fotos = []
    for arquivo in sorted(fotos_dir.iterdir()):
        if arquivo.suffix.lower() in EXTENSOES_IMAGEM:
            stat = arquivo.stat()
            data_modificacao = datetime.fromtimestamp(stat.st_mtime).isoformat()
            fotos.append({
                "arquivo": arquivo.name,
                "src": f"fotos/{arquivo.name}",
                "data": data_modificacao
            })

    # Ordena por data decrescente (mais recente primeiro)
    fotos.sort(key=lambda x: x["data"], reverse=True)

    index_path = fotos_dir / "index.json"
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(fotos, f, ensure_ascii=False, indent=2)

    print(f"✅ fotos/index.json gerado com {len(fotos)} imagem(ns).")


if __name__ == "__main__":
    print("🔄 Gerando índices do site...\n")
    gerar_index_leis()
    gerar_index_fotos()
    print("\n✨ Pronto! Faça o upload dos arquivos JSON junto com os PDFs/fotos.")
