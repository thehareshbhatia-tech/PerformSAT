#!/usr/bin/env python3
"""Render every page of the four source-book PDFs to JPGs for direct reading.

Run from anywhere. Output: knowledge/books/pages/<book>/pNNNN.jpg  (pNNNN = PDF page number, 1-based,
matching the JPG numbering used by knowledge/MANIFEST.md's chapter tables).
150 DPI / JPEG q80 — the same settings the original extraction used.
Idempotent: skips pages already rendered. Re-run after adding a book.

Requires PyMuPDF (`pip install pymupdf`). Takes a few minutes for ~1030 pages.
"""
import os
import fitz  # PyMuPDF

HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "knowledge", "books")
BOOKS = ["reading", "grammar", "math-orange", "math-panda"]

for book in BOOKS:
    pdf = os.path.join(HERE, f"{book}.pdf")
    outdir = os.path.join(HERE, "pages", book)
    os.makedirs(outdir, exist_ok=True)
    doc = fitz.open(pdf)
    rendered = 0
    for i in range(doc.page_count):
        out = os.path.join(outdir, f"p{i + 1:04d}.jpg")
        if os.path.exists(out):
            continue
        pix = doc[i].get_pixmap(dpi=150)
        pix.save(out, jpg_quality=80)
        rendered += 1
    print(f"{book}: {doc.page_count} pages ({rendered} newly rendered)")
    doc.close()
