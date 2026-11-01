// LYSIA-ASCII — charsets/index.js
// Sera développé en Phase 4

export const CHARSETS = {
  ascii:   ' .:-=+*#%@',
  braille: ' ⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿',
  block:   ' ░▒▓█',
  // LYS-IA custom glyphs — à construire en Phase 4
  // Règle : construits à la main, PAS piochés dans l'Unicode existant
  lysia:   ' .·∘○◦❀',
};

export const DEFAULT_CHARSET = 'ascii';
