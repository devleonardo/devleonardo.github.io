"""
gerar_indices.py
----------------
Rode sempre que adicionar novos PDFs ou fotos.
Gera os arquivos JSON que o site lê automaticamente.

Uso:
    python gerar_indices.py

Sem dependências externas — usa apenas biblioteca padrão do Python 3.
"""

import os
import json
from pathlib import Path
from datetime import datetime

BASE = Path(__file__).parent

def gerar_leis():
    d = BASE / "leis"
    d.mkdir(exist_ok=True)
    leis = []
    for f in d.glob("*.pdf"):
        leis.append({
            "nome": f.name,
            "data": datetime.fromtimestamp(f.stat().st_mtime).isoformat()
        })
    leis.sort(key=lambda x: x["data"], reverse=True)
    (d / "index.json").write_text(json.dumps(leis, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"✅ leis/index.json — {len(leis)} arquivo(s)")

def gerar_fotos():
    d = BASE / "fotos"
    d.mkdir(exist_ok=True)
    exts = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
    fotos = []
    for f in d.iterdir():
        if f.suffix.lower() in exts:
            fotos.append({
                "arquivo": f.name,
                "src": f"fotos/{f.name}",
                "data": datetime.fromtimestamp(f.stat().st_mtime).isoformat()
            })
    fotos.sort(key=lambda x: x["data"], reverse=True)
    (d / "index.json").write_text(json.dumps(fotos, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"✅ fotos/index.json — {len(fotos)} imagem(ns)")

if __name__ == "__main__":
    print("🔄 Gerando índices...\n")
    gerar_leis()
    gerar_fotos()
    print("\n✨ Pronto! Faça upload dos arquivos JSON junto com os PDFs/fotos.")
