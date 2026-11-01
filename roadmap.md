# LYSIA-ASCII — Roadmap

## Phase 1 — JS basics (8h)
**Objectif :** maîtriser la syntaxe JS et la manipulation du DOM avant de toucher aux pixels.

### Ce qu'on apprend
- Variables, types, fonctions, boucles, conditions
- DOM : `querySelector`, `addEventListener`, manipulation d'éléments
- Async : `setTimeout`, `fetch`, Promises
- ES6+ : arrow functions, destructuring, template literals, modules

### Exercices prévus
- [ ] Calculatrice DOM
- [ ] Formulaire avec validation live
- [ ] Fetch API : charger une image distante

### Ressources
- https://javascript.info (référence principale)
- MDN Web Docs

---

## Phase 2 — Canvas API (8h)
**Objectif :** accéder aux pixels d'une image et les manipuler.

### Ce qu'on apprend
- `<canvas>`, `getContext('2d')`
- `drawImage()`, `getImageData()`, `putImageData()`
- Structure d'un pixel : `[R, G, B, A]`
- Resize d'image sur canvas

### Exercices prévus
- [ ] Afficher une image sur canvas
- [ ] Lire et afficher les valeurs RGBA d'un pixel au clic
- [ ] Inverser les couleurs d'une image

---

## Phase 3 — Image processing (6h)
**Objectif :** convertir une image en données utilisables pour le rendu ASCII.

### Ce qu'on apprend
- Calcul de luminosité : `L = 0.299R + 0.587G + 0.114B`
- Conversion en niveaux de gris
- Resize proportionnel
- Mapping luminosité → index dans un charset

### Exercices prévus
- [ ] Convertir une image en niveaux de gris sur canvas
- [ ] Afficher la luminosité moyenne d'une zone
- [ ] Premier rendu ASCII basique dans un `<pre>`

---

## Phase 4 — Charsets & LYS-IA glyphs (8h)
**Objectif :** implémenter tous les charsets et créer les glyphes custom LYS-IA.

### Charsets à implémenter
- ASCII classique : ` .:-=+*#%@`
- Braille : `⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏...`
- Block Unicode : `░▒▓█▄▀■`
- **LYS-IA custom** : glyphes floraux construits à la main

### Règle LYS-IA glyphs
> Les fleurs LYS-IA sont construites en combinant des caractères bruts.
> On ne pioche PAS dans des caractères floraux Unicode existants — on les crée.

### Exercices prévus
- [ ] Switcher entre charsets au runtime
- [ ] Construire 3 glyphes floraux LYS-IA custom
- [ ] Rendu coloré avec palette LYS-IA (`#c8a96e`, `#0d0d0d`)

---

## Phase 5 — WebGL shaders (15h)
**Objectif :** passer au rendu GPU temps réel via fragment shaders.

### Ce qu'on apprend
- GLSL : types, varyings, uniforms, textures
- Fragment shader : comment remplacer un pixel par un glyphe
- `WebGLRenderingContext` : shaders, buffers, textures
- Dithering : algorithme Floyd-Steinberg

### Exercices prévus
- [ ] Premier triangle WebGL
- [ ] Shader qui applique un filtre de couleur
- [ ] Fragment shader ASCII temps réel sur image fixe
- [ ] Dithering en option

---

## Phase 6 — Animation & webcam (10h)
**Objectif :** rendu live sur flux vidéo + exports.

### Ce qu'on apprend
- `getUserMedia()` : accès webcam
- Boucle d'animation : `requestAnimationFrame`
- Exports : texte brut, HTML coloré, PNG (canvas `toDataURL`), SVG

### Exercices prévus
- [ ] Webcam → canvas en temps réel
- [ ] Webcam → rendu ASCII live
- [ ] Bouton export PNG
- [ ] Bouton export texte brut

---

## Statut global

| Phase | Statut |
|-------|--------|
| 1 — JS basics | 🔜 À démarrer |
| 2 — Canvas API | ⏳ En attente |
| 3 — Image processing | ⏳ En attente |
| 4 — Charsets & glyphs | ⏳ En attente |
| 5 — WebGL shaders | ⏳ En attente |
| 6 — Animation & webcam | ⏳ En attente |
