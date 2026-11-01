```
 ██╗      ██╗   ██╗ ███████╗      ██╗  █████╗
 ██║      ╚██╗ ██╔╝ ██╔════╝      ██║ ██╔══██╗
 ██║       ╚████╔╝  ███████╗ ████╗██║ ███████║
 ██║        ╚██╔╝   ╚════██║ ╚═══╝██║ ██╔══██║
 ███████╗    ██║    ███████║      ██║ ██║  ██║
 ╚══════╝    ╚═╝    ╚══════╝      ╚═╝ ╚═╝  ╚═╝
          A S C I I   C O N V E R T E R
```

> *Part of the [LYS-IA](https://github.com/Iyashini) portfolio — AI × ECE Paris majeures.*

---

## What is LYSIA-ASCII ?

LYSIA-ASCII converts any image (and eventually video / webcam feed) into a render made **entirely of characters** — no pixels, no fonts, no images. It is the foundational tool for the visual identity of the LYS-IA portfolio.

Inspired by three references, fused into one:
- **ASCIIFY** — multi-charset support (ASCII, Braille, and more)
- **VGA ASCIICORE** — Figma plugin, image → ASCII
- **EFECTO** — real-time WebGL shaders, dithering, animations

**Goal: the most complete character renderer possible.**

---

## Features (planned)

| Feature | Status |
|---------|--------|
| ASCII charset (` .:-=+*#%@`) | 🔜 Phase 3 |
| Braille charset (`⠀⠁⠂⠃...`) | 🔜 Phase 4 |
| Unicode block charset (`░▒▓█▄▀`) | 🔜 Phase 4 |
| Custom LYS-IA glyphs (hand-built floral chars) | 🔜 Phase 4 |
| Canvas API render | 🔜 Phase 2 |
| WebGL real-time shader render | 🔜 Phase 5 |
| Dithering | 🔜 Phase 5 |
| Webcam / video input | 🔜 Phase 6 |
| Export (txt, HTML, PNG, SVG) | 🔜 Phase 6 |
| Color palette (dark + gold accent `#c8a96e`) | 🔜 Phase 3 |

---

---

## Stack

```
WebGL (fragment shaders)    →  real-time render (GPU)
Canvas API                  →  fallback + PNG export
Vanilla JS                  →  logic / webcam
Python FastAPI (optional)   →  heavy backend processing
```

---

## Learning roadmap

Erick starts from zero in JS (knows Java — logic ✓, syntax to learn).

> ⚠️ All times are **estimates**. Each phase may take more or less depending on pace and prior exposure. The goal is progression, not hitting a number.

| Phase | Content | Est. hours |
|-------|---------|-----------|
| 1 — JS basics | Syntax, DOM, events, async | ~8h |
| 2 — Canvas API | Pixels, ImageData, manipulation | ~8h |
| 3 — Image processing | Brightness, grayscale, resize | ~6h |
| 4 — Charsets & LYS-IA glyphs | ASCII, Braille, block, custom flowers | ~8h |
| 5 — WebGL shaders | GLSL, fragment shader, real-time render | ~15h |
| 6 — Animation & webcam | getUserMedia, dithering, export | ~10h |
| **Total** | | **~55h** |

---

## Project structure

```
lysia-ascii/
├── README.md
├── roadmap.md
├── apprentissage/
│   ├── 01_js_bases/
│   ├── 02_canvas_api/
│   ├── 03_image_processing/
│   ├── 04_charsets/
│   ├── 05_webgl_shaders/
│   └── 06_animation_webcam/
├── src/
│   ├── index.html
│   ├── main.js
│   ├── shaders/
│   └── charsets/
└── exports/
```

---

## Creation ratio

**60–70% Erick / 30–40% AI-assisted** — Claude helps with learning and debugging, Erick writes the code.

---

*LYS-IA — fleur de LYS × Intelligence Artificielle × ECE Paris*
