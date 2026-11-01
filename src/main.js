// LYSIA-ASCII — main.js
// Phase 1 : structure de base, pas encore de rendu ASCII
// Le rendu ASCII arrive en Phase 3

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const canvas   = document.getElementById('canvas');
const output   = document.getElementById('output');

// Ouvre le sélecteur de fichier au clic sur la drop zone
dropZone.addEventListener('click', () => fileInput.click());

// Lecture du fichier sélectionné
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) loadImage(file);
});

// Drag & drop
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.opacity = '1';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.opacity = '0.6';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.style.opacity = '0.6';
  const file = e.dataTransfer.files[0];
  if (file) loadImage(file);
});

// Charge une image et la dessine sur le canvas
function loadImage(file) {
  const reader = new FileReader();

  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => renderASCII(img);
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

// Rendu ASCII — sera développé en Phase 3
function renderASCII(img) {
  // Pour l'instant : affiche juste les dimensions de l'image
  output.textContent = `[ image chargée : ${img.width} × ${img.height}px ]\n\nRendu ASCII → Phase 3`;
}
