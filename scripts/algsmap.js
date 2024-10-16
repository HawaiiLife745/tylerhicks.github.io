﻿var scramblesMap = {
  1: [
   "solved"
  ],
  2: [
    "B R B' U' B R' B R B U B' R' B",
  ],
  3: [
    "B' R B U' B' R' B' R B' U B R' B'",
  ],
  4: [
    "B' R B R U' L R L' R' U B' R B",
  ],
  5: [
    "B L' B' L' U R' L' R L U' B L' B'",
  ],
  6: [
    "L R' L' R' U' B' R' B' R B' U B R' B'",
  ],
  7: [
    "R L R' U' R L' R L R U L B L B'",
  ],
  8: [
    "B R L B R B' R' L' R' B'",
    ],
  9: [
    "B R L R B R' B' L' R' B'",
  ],
  10: [
    "R B L' B' L R' U R L R L' R",
  ],
  11: [
    "R B' R B R U B R L R' L' B'",
  ],
  12: [
    "R' B R B' U B L R' L B' L R",
  ],
  13: [
    "L B' R' B R' U L R' L' R U' R' B L' B'",
  ],
  14: [
    "B R L B' U' R' U B' U' R U B' L' R' B'",
  ],
  15: [
    "B L' R B' U L' U' B' U L U' B' R' L B'",
  ],
  16: [
    "R' L R L U L' U' B' U L U' B' L B'",
  ],
  17: [
    "L R' L' R' U' R U B U' R' U B R' B",
  ],
  18: [
    "B' R' B L R L' R' U' L R' L' R U R",
  ],
  19: [
    "R B' R' B' L U' B U L' U' B' U L' B' L",
  ],
  20: [
    "L' B L B R' U B' U' R U B U' R B R'",
  ],
  21: [
    "B L B' R' L' R L U R' L R L' U' L'",
  ],
  22: [
    "L B' R B R' L' B' U L' U' B U L",
  ],
  23: [
    "B' U' R' B' U' B' R B R' U B R U B",
  ],
  24: [
    "B U L B U B L' B' L U' B' L' U' B'",
  ],
  25: [
    "R' U2 R' U2' R2' U2 R2' U' R2 U' R' U' R2' U2 R U2' R",
    "R' U2 R' U2' R2 U R U R2' U R2 U2' R2 U2 R U2' R",
    "R' U2 R' U2' R2 U R U R2' U2 R2 U2 R2 U2' R U2 R",
    "R U2 R U2' R2 U2 R2 U2 R2' U R U R2 U2' R' U2 R'",
  ],
  26: [
    "R U R2' U' R2 U2' R2' U2 R U' R' U2 R2 U2 R'",
    "R U R2 U2 R U2' R2 U' R2' U2' R U' R2' U2' R2",
    "R U2' R2 U2 R2' U2' R2 U2 R2' U2' R' U' R2' U2' R2",
    "R U2' R2' U' R2 U2' R U2 R2 U R U' R2 U2' R2'",
  ],
  27: [
    "R' U' R2 U R2' U2 R2 U2' R' U R U2' R2' U2' R",
    "R U2 R2 U2' R2' U2 R2 U2' R2' U2 R' U R2' U2 R2",
    "R U2 R2' U R2 U2 R U2' R2 U' R U R2 U2 R2'",
    "R U' R2 U2' R U2 R2 U R2' U2 R U R2' U2 R2",
  ],
  28: [
    "R U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R'",
    "R2 U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R2'",
    "R2' U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R2",
    "R' U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R",
  ],
  29: [
    "R U R U2 R' U R' U' R2 U2' R' U2 R' U R U R'",
    "R2 U R U2 R' U R' U' R2 U2' R' U2 R' U R U R2'",
    "R2' U R U2 R' U R' U' R2 U2' R' U2 R' U R U R2",
    "R' U R U2 R' U R' U' R2 U2' R' U2 R' U R U R",
  ],
  30: [
    "R U R U R' U2 R' U2' R2 U' R' U R' U2 R U R'",
    "R2 U R U R' U2 R' U2' R2 U' R' U R' U2 R U R2'",
    "R2' U R U R' U2 R' U2' R2 U' R' U R' U2 R U R2",
    "R' U R U R' U2 R' U2' R2 U' R' U R' U2 R U R",
  ],
  31: [
    "R U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R'",
    "R2 U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R2'",
    "R2' U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R2",
    "R' U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R",
  ],
  32: [
    "R U2' R2 U2' R2' U' R2 U2' R2 U2' R U2' R' U' R U2' R'",
    "R U2' R2 U2' R2' U' R2 U2' R2 U' R U2 R' U R U2 R'",
    "R U2' R2' U2' R2 U' R2' U2' R U2' R U2' R' U' R U2' R'",
    "R U2' R2' U2' R2 U' R2' U2' R U' R U2 R' U R U2 R'",
  ],
  33: [
    "R' U2 R2 U2 R2' U R2 U2 R' U R' U2' R U' R' U2' R",
    "R' U2 R2 U2 R2' U R2 U2 R' U2 R' U2 R U R' U2 R",
    "R' U2 R2' U2 R2 U R2' U2 R2' U R' U2' R U' R' U2' R",
    "R' U2 R2' U2 R2 U R2' U2 R2' U2 R' U2 R U R' U2 R",
  ],
  34: [
    "R U2' R' U' R U2' R' U R2' U2 R2' U R2 U2 R2' U2 R'",
    "R U2' R' U' R U2' R' U R' U2 R2 U R2' U2 R2 U2 R'",
    "R U2 R' U R U2 R' U2 R2' U2 R2' U R2 U2 R2' U2 R'",
    "R U2 R' U R U2 R' U2 R' U2 R2 U R2' U2 R2 U2 R'",
  ],
  35: [
    "R' U2' R U' R' U2' R U2' R U2' R2' U' R2 U2' R2' U2' R",
    "R' U2' R U' R' U2' R U2' R2 U2' R2 U' R2' U2' R2 U2' R",
    "R' U2 R U R' U2 R U' R U2' R2' U' R2 U2' R2' U2' R",
    "R' U2 R U R' U2 R U' R2 U2' R2 U' R2' U2' R2 U2' R",
  ],
  36: [
    "R2' U2 R2' U2' R2 U' R U2' R' U' R U2' R2 U2 R2 U2' R2",
    "R2' U2 R2' U2' R2' U2 R' U R U2 R' U R2' U2 R2 U2' R2",
    "R' U2 R2 U2' R2' U' R U2' R' U' R U2' R U2 R2' U2' R",
    "R' U2 R2 U2' R' U2 R' U R U2 R' U R2 U2 R2' U2' R",
  ],
  37: [
    "R U2' R2' U2 R U2' R U' R' U2' R U' R2' U2' R2 U2 R'",
    "R U2' R2' U2 R2 U R' U2 R U R' U2 R' U2' R2 U2 R'",
    "R2 U2' R2 U2 R2 U2' R U' R' U2' R U' R2 U2' R2' U2 R2'",
    "R2 U2' R2 U2 R2' U R' U2 R U R' U2 R2' U2' R2' U2 R2'",
  ],
  38: [
    "R U2' R' U2' R2' U R' U' R2' U R' U2' R2 U R U R' U' R2",
    "R U2' R' U' R U' R2 U R U' R2 U' R2 U R U R' U' R2",
    "R U2 R U R2 U' R' U2' R U2' R U' R' U2' R2' U R' U R",
    "R2 U R' U R' U R' U' R' U' R2' U' R' U2 R U R2' U' R2'",
  ],
  39: [
    "R' U2 R U R' U R2' U' R' U R2' U R2' U' R' U' R U R2'",
    "R' U2 R U2 R2 U' R U R2 U' R U2 R2' U' R' U' R U R2'",
    "R2' U' R U' R U' R U R U R2 U R U2' R' U' R2 U R2",
    "R' U2' R' U' R2' U R U2 R' U2 R' U R U2 R2 U' R U' R'",
  ],
  40: [
    "R U2 R2 U2 R U' R U R U' R U R2 U2' R2' U2' R' U' R2 U' R2'",
    "R2' U' R2 U' R' U2' R2' U2' R2 U R U' R U R U' R U2 R2 U2 R",
    "R U R2' U2 R2 U2 R2' U R U R U2' R' U' R U R' U2' R U' R'",
    "R U2' R U2' R2' U2 R2 U2 R2' U2 R2 U2' R2' U' R U R' U2' R U' R'",
  ],
  41: [
    "R2 U R2' U R U2 R2 U2 R2' U' R' U R' U' R' U R' U2' R2' U2' R'",
    "R' U2' R2' U2' R' U R' U' R' U R' U' R2' U2 R2 U2 R U R2' U R2",
    "R U R2' U2 R U' R' U R' U2 R' U2 R U2' R U2' R2' U' R2' U' R",
    "R U2 R' U2 R U' R' U' R U2 R2 U R2 U R U' R2 U' R2' U R'",
  ],
  42: [
    "R2 U2 R U2' R2' U2 R2' U2' R U2' R' U' R2 U R2 U' R' U R2'",
    "R2' U R' U' R2 U R2 U' R' U2' R U2' R2' U2 R2' U2' R U2 R2",
    "R2' U R' U2 R2' U2 R2' U' R2 U2 R2 U' R2' U2 R2' U2 R' U R2'",
    "R U' R U R U2' R2' U' R' U R2' U2 R' U' R2' U2' R U2' R'",
  ],
  43: [
    "R2 U' R U R2' U' R2' U R U2 R' U2 R2 U2' R2 U2 R' U2' R2'",
    "R2' U2' R' U2 R2 U2' R2 U2 R' U2 R U R2' U' R2' U R U' R2",
    "R U2 R' U2 R2 U R U2' R2 U' R U R2 U2 R' U' R' U R'",
    "R' U R' U' R' U2 R2 U R U' R2 U2' R U R2 U2 R' U2 R",
  ],
  44: [
    "R' U2 R' U2 R' U2 R2 U2 R2 U2' R U R2' U R U R2 U R",
    "R U2 R2 U R U' R2' U2' R2 U2 R2 U R U2' R2' U' R2' U2' R'",
    "R U R2' U R2' U R U2' R U2 R U2' R2' U R2 U' R2 U' R'",
    "R U R' U' R2 U R2 U' R2' U2' R2 U2' R2' U2 R2' U2 R U2' R'",
  ],
  45: [
    "R U2' R U2' R U2' R2' U2' R2' U2 R' U' R2 U' R' U' R2' U' R'",
    "R' U2' R2' U' R' U R2 U2 R2' U2' R2' U' R' U2 R2 U R2 U2 R",
    "R U R2' U R' U' R2' U R2' U R2 U' R2 U R2' U2 R2' U2 R",
    "R2 U2 R2' U R2 U' R2 U2' R2 U2 R U R' U2 R2' U2' R2' U2 R2'",
  ],
  46: [
    "R' U' R2' U' R' U' R2 U' R' U2 R2' U2' R2' U2' R U2' R U2' R",
    "R U2 R2 U R2 U2 R' U' R2' U2' R2' U2 R2 U R' U' R2' U2' R'",
    "R U R2' U2 R2 U2 R U R2' U R' U' R2' U' R2' U' R' U2 R",
    "R U R' U R2 U2' R2' U2 R2 U' R2' U2 R U' R' U2 R2 U2 R2'",
  ],
  47: [
    "R U R2 U R U R2' U R U2' R2 U2 R2 U2 R' U2 R' U2 R'",
    "R' U2' R2' U' R2' U2' R U R2 U2 R2 U2' R2' U' R U R2 U2 R",
    "R2 U2' R' U' R2 U2' R2' U' R2' U R2 U' R2 U' R U R U2' R2",
    "R2 U' R2' U2' R2 U' R2' U' R2 U' R2' U2' R2 U R2' U2 R2 U' R2'",
  ],
  48: [
    "R U R' U2 R U' R' U2' R' U2 R U2 R U2' R2' U2' R",
    "R' U2 R2 U2 R' U2' R' U2' R U2 R U R' U2' R U' R'",
    "R' U R2 U R U R' U R U2' R' U' R2' U2 R U R' U R",
    "R' U' R U' R' U2' R2 U R U2 R' U' R U' R' U' R2' U' R",
  ],
  49: [
    "R U2' R2' U2' R U2 R U2 R' U2' R' U' R U2 R' U R",
    "R' U' R U2' R' U R U2 R U2' R' U2' R' U2 R2 U2 R'",
    "R U R' U R U2 R2' U' R' U2' R U R' U R U R2 U R'",
    "R U' R2' U' R' U' R U' R' U2 R U R2 U2' R' U' R U' R'",
  ],
  50: [
    "R U2 R' U' R2 U R' U R U2' R' U R' U R U2 R'",
    "R U2 R2 U R U' R' U R2' U' R2 U' R U R' U' R2' U' R'",
    "R' U R2 U2' R' U2' R2 U R U R2' U' R' U' R' U' R2' U' R",
    "R U2' R' U R U' R U R2' U R2 U R2' U2' R2 U' R' U2' R'",
  ],
  51: [
    "R' U2' R U R2' U' R U' R' U2 R U' R U' R' U2' R",
    "R U' R2' U2 R U2 R2' U' R' U' R2 U R U R U R2 U R'",
    "R' U2' R2' U' R' U R U' R2 U R2' U R' U' R U R2 U R",
    "R U2 R2 U2' R U R U' R2' U2 R2' U R' U R' U' R2 U2 R'",
  ],
  52: [
    "R U2' R' U' R U' R U2 R' U' R U' R2' U R U2' R'",
    "R U R2 U R U' R' U R2' U R2 U' R U R' U' R2' U2' R'",
    "R' U R2 U R U R U R2 U' R' U' R2' U2 R U2 R2' U' R",
    "R2 U R2' U R2 U R2' U' R2 U R2' U2 R2 U2' R2' U R2 U' R2'",
    ],
  53: [
    "R' U2 R U R' U R' U2' R U R' U R2 U' R' U2 R",
    "R U' R2' U' R' U' R' U' R2' U R U R2 U2' R' U2' R2 U R'",
    "R' U' R2' U' R' U R U' R2 U' R2' U R' U' R U R2 U2 R",
    "R' U2 R2 U2 R' U' R' U2 R2 U' R' U R U2' R' U R U2' R'",
  ],
  54: [
    "R U' R' U2 R U2 R' U2' R' U2' R2 U R U2' R2 U2' R2' U' R2'",
    "R U R' U R2 U2' R2' U' R2 U2' R2 U2' R2 U' R' U R' U2 R",
    "R U R' U R2' U2' R2 U' R2' U2' R U2' R2 U' R' U R' U2 R",
    "R2' U2 R' U' R2 U2' R2 U2 R' U2' R' U2 R U' R2' U R U R2'",
  ],
  55: [
    "R' U R U2' R' U2' R U2 R U2 R2' U' R' U2 R2' U2 R2 U R2",
    "R U2' R2 U2' R U R2' U R2' U' R2 U' R2 U' R' U' R2' U2' R2",
    "R2 U2' R U R2' U2 R2' U2' R U2 R U2' R' U R2 U' R' U' R2",
    "R' U' R U' R2 U2 R2' U R2 U2 R' U2 R2' U R U' R U2' R'",
  ],
  56: [
    "R U2' R U2 R' U2' R' U R U2 R U2' R' U2 R'",
    "R U2' R U2 R' U2' R' U2' R U2' R U2 R' U2' R'",
    "R U2' R U2 R' U2' R' U R U2' R U2 R' U2' R'",
    "R U2' R U2 R' U2' R' U' R U2 R U2' R' U2 R'",
  ],
  57: [
    "R' U2 R' U2' R U2 R U2 R' U2 R' U2' R U2 R",
    "R' U2 R' U2' R U2 R U' R' U2' R' U2 R U2' R",
    "R U R' U2' R' U2 R U2' R U R' U2' R' U2 R",
    "R U2' R U R' U2 R' U2' R U2 R U2 R' U2 R'",
  ],
  58: [
    "R2 U R2' U2 R2 U2 R2' U2' R2 U R2' U2 R2 U2 R2'",
    "R2 U R2' U' R2 U2' R2' U2 R2 U' R2' U2 R2 U2 R2'",
    "R2' U R2 U2 R2' U2 R2 U2' R2' U R2 U2 R2' U2 R2",
    "R2' U R2 U' R2' U2' R2 U2 R2' U' R2 U2 R2' U2 R2",
  ],
  59: [
    "R2 U' R2' U R2 U2 R2' U2' R2 U R2' U2' R2 U2' R2'",
    "R2 U' R2' U2' R2 U2' R2' U2 R2 U' R2' U2' R2 U2' R2'",
    "R2' U' R2 U R2' U2 R2 U2' R2' U R2 U2' R2' U2' R2",
    "R2' U' R2 U2' R2' U2' R2 U2 R2' U' R2 U2' R2' U2' R2",
  ],
  60: [
    "R2 U2' R2' U2' R2 U R2' U2' R2 U2 R2' U R2 U' R2'",
    "R2 U2' R2' U2' R2 U' R2' U2 R2 U2' R2' U2' R2 U' R2'",
    "R2' U2' R2 U2' R2' U R2 U2' R2' U2 R2 U R2' U' R2",
    "R2' U2' R2 U2' R2' U' R2 U2 R2' U2' R2 U2' R2' U' R2",
  ],
  61: [
    "R2 U2 R2' U2 R2 U R2' U2' R2 U2 R2' U2 R2 U R2'",
    "R2 U2 R2' U2 R2 U' R2' U2 R2 U2' R2' U' R2 U R2'",
    "R2' U2 R2 U2 R2' U R2 U2' R2' U2 R2 U2 R2' U R2",
    "R2' U2 R2 U2 R2' U' R2 U2 R2' U2' R2 U' R2' U R2",
  ],
  62: [
    "R2 U2' R2' U' R2 U R2' U' R2 U2' R U2' R2 U' R2' U2' R2",
    "R2 U2' R2' U' R2 U2' R U2' R2 U' R2' U R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U R2 U' R2' U2' R' U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R' U2' R2' U' R2 U R2' U' R2 U2' R2'",
  ],
  63: [
    "R2 U2 R2' U R2 U2 R U2 R2 U R2' U' R2 U R2' U2 R2",
    "R2 U2 R2' U R2 U' R2' U R2 U2 R U2 R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R' U2 R2' U R2 U' R2' U R2 U2 R2'",
    "R2' U2 R2 U R2' U' R2 U R2' U2 R' U2 R2' U R2 U2 R2'",
  ],
  64: [
    "R U2' R2 U' R' U R2 U2' R U R2' U' R U' R2' U2' R' U2 R2",
    "R U2' R2 U' R' U R2 U2' R U R2' U' R' U2 R' U2' R2' U' R'",
    "R2 U R2' U R2 U2 R2' U' R2 U2 R2' U2 R2 U R2' U2' R2 U R2'",
    "R2' U R2 U R2 U' R U2' R U2 R2 U2' R2 U2 R U R U2' R2",
  ],
  65: [
    "R U R' U2 R U2 R2 U' R U R U2 R' U2 R U2 R2' U R2",
    "R U R' U2' R U R' U2' R U' R' U2' R U2 R' U' R U2 R'",
    "R U R' U2' R U2 R' U2 R U R' U2 R U2' R' U' R U2 R'",
    "R2 U' R2' U' R2 U2' R2' U R2 U2' R2' U2' R2 U' R2' U2 R2 U' R2'",
  ],
  66: [
    "R2 U2' R2' U' R2 U R2' U2' R2 U R2' U2' R2 U2 R2' U R2 U' R2'",
    "R2 U2' R2' U' R2 U R2' U2' R2 U' R2' U2 R2 U2' R2' U2' R2 U' R2'",
    "R2' U2' R2 U' R2' U R2 U2' R2' U R2 U2' R2' U2 R2 U R2' U' R2",
    "R2' U2' R2 U' R2' U R2 U2' R2' U' R2 U2 R2' U2' R2 U2' R2' U' R2",
  ],
  67: [
    "R U' R2' U' R' U' R2 U2' R2 U2 R2 U2' R U2' R U R2 U R'",
    "R2 U2 R2' U R2 U2' R2' U R2 U2' R2' U' R2 U2' R2' U2' R2 U' R2'",
    "R2 U2 R2' U R2 U2' R2' U R2' U2' R2 U' R2' U2' R2 U2' R2 U' R2'",
    "R2' U2 R2 U R2' U2' R2 U R2 U2' R2' U' R2 U2' R2' U2' R2' U' R2",
  ],
  68: [
    "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U R2' U2' R2 U' R2' U R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U R2 U2' R2' U' R2 U R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U R2' U2' R2 U' R2' U R2 U' R2' U2' R2",
  ],
  69: [
    "R2' U R' U' R' U2' R2' U2 R U R U' R U2' R U2' R2' U' R2",
    "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U' R2' U R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2 R2 U R2' U' R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R2 U' R2 U2 R2' U R2 U' R2' U R2 U2 R2'",
  ],
  70: [
    "R U2' R2 U' R' U2' R2 U R2 U R' U' R2 U2 R2' U2' R2' U' R",
    "R U2' R' U R U2 R U2 R' U R' U' R U' R U' R' U' R'",
    "R2 U R U2 R U2' R' U' R2' U2' R2' U' R' U2' R U2 R U R2",
    "R' U2' R U' R' U2' R2 U2' R' U' R2' U2' R2' U' R2 U2' R2' U2 R'",
  ],
  71: [
    "R' U2 R U' R' U2' R' U2' R U' R U R' U R' U R U R",
    "R' U2 R2' U R U2 R2' U' R2' U' R U R2' U2' R2 U2 R2 U R'",
    "R2 U' R2 U' R2 U2' R2 U2 R2 U2' R U R U R' U R2' U R2'",
    "R2' U2 R2' U2 R2' U' R2' U2 R2' U2' R2' U2 R' U' R2 U2' R2 U2' R2",
  ],
  72: [
    "R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R",
    "R2' U R U R' U' R2 U R2 U2' R2' U' R U2 R' U2' R U2' R2'",
    "R2' U R2' U R U2' R2 U2' R U2 R2 U2' R U' R' U' R2 U' R2",
    "R2' U R2' U R U' R2 U2 R U2' R2 U2 R U' R' U' R2 U' R2",
  ],
  73: [
    "R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R'",
    "R2 U' R2 U' R' U R2' U2' R' U2 R2' U2' R' U R U R2' U R2'",
    "R2 U' R2 U' R' U2 R2' U2 R' U2' R2' U2 R' U R U R2' U R2'",
    "R2 U' R' U' R U R2' U' R2' U2 R2 U R' U2' R U2 R' U2 R2",
  ],
  74: [
    "R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R'",
    "R2 U2 R2' U R2 U2 R2 U' R U2' R U2 R2' U R U' R U2' R'",
    "R2 U2 R' U2 R U2' R' U R2 U2 R2' U' R2' U R U' R' U' R2",
    "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U2 R2 U2 R2' U2 R2 U2' R2'",
  ],
  75: [
    "R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R",
    "R2 U2' R2' U2 R2 U2 R2 U2' R2' U' R2 U2' R2' U R2' U2 R2 U2' R2'",
    "R2 U2' R2' U2 R2 U2 R2 U2' R2' U' R2 U2' R2' U2' R2' U2' R2 U2 R2'",
    "R2 U2' R2' U2 R2 U2 R2' U2' R2 U' R2' U2' R2 U R2' U2 R2 U2' R2'",
  ],
  76: [
    "R2 U R2 U' R2 U' R2' U2 R U R U2' R U' R2'",
    "R U2' R U R U2 R2' U' R2 U' R2 U R2 U2' R2'",
    "R2' U2' R2 U R2 U' R2 U' R2' U2 R U R U2' R",
    "R2' U' R U2' R U R U2 R2' U' R2 U' R2 U R2",
  ],
  77: [
    "R U2 R U2' R' U2 R' U2 R U2' R U2 R' U2' R'",
    "R U2 R U2' R' U' R2' U R2' U2 R' U2' R2' U' R",
    "R U2' R U2 R' U R2' U' R2' U2' R' U2 R2' U R",
    "R U2' R U2 R' U2' R' U2' R U2 R U2' R' U2 R'",
  ],
  78: [
    "R U R2' U2 R' U2' R2' U' R2' U R' U2 R U2' R",
    "R U' R2' U2' R' U2 R2' U R2' U' R' U2' R U2 R",
    "R2 U' R2' U R2 U2' R2' U2 R2 U2 R2' U2' R2 U2' R2'",
    "R2 U' R2' U R2 U2' R2' U' R2 U2' R2' U2 R2 U R2'",
  ],
  79: [
    "R2' U2 R U2' R2 U2' R2' U2 R' U2' R U R2 U' R2' U' R",
    "R' U R2 U R2' U' R' U2 R U2' R2 U2 R2' U2 R' U2' R2",
    "R' U2' R2 U R2' U2 R U2' R U2 R' U2' R U' R2' U2 R",
    "R' U2' R2 U R' U2 R U2' R' U2 R' U2' R2 U' R2' U2 R",
  ],
  80: [
    "R U' R2' U' R2 U R U2' R' U2 R2' U2' R2 U2' R U2 R2'",
    "R2 U2' R' U2 R2' U2 R2 U2' R U2 R' U' R2' U R2 U R'",
    "R' U2 R U2 R2' U' R2 U R2' U R2 U2' R2' U2 R U2' R",
    "R' U2 R U2' R2' U' R2 U' R2' U R2 U' R2' U2 R U2' R",
    "R U2 R2' U' R2 U2' R' U2 R' U2' R U2 R' U R2 U2' R'",
  ],
  81: [
    "solved",
  ],
  82: [
    "R' U2' R U' R' U2 R U2' R' U2' R2 U R' U2 R U2 R'",
    "R U R' U R U R' U2 R' U2 R U2 R' U R U2' R U' R'",
    "R2' U2 R2' U R2 U R2' U2' R' U2' R U2' R' U' R2' U R2' U2 R'",
    "R U2' R' U2 R2' U' R U2' R2' U R U' R2 U2 R' U R2' U2 R'",
  ],
  83: [
    "R U2 R' U R U2' R' U2 R U2 R2' U' R U2' R' U2' R",
    "R' U' R U' R' U' R U2' R U2' R' U2' R U' R' U2 R' U R",
    "R' U2 R U2' R2 U R' U2 R2 U' R' U R2' U2' R U' R2 U2' R",
    "R2 U2' R2 U' R2' U' R2 U2 R U2 R' U2 R U R2 U' R2 U2' R",
  ],
  84: [
    "R U2' R' U2' R U' R2' U2 R U2 R' U2' R U R' U2 R",
    "R U R' U2 R' U' R U2' R' U2' R U2' R U' R' U' R U' R'",
    "R U2' R2 U' R U2' R2' U R' U' R2 U2 R' U R2 U2' R U2 R'",
    "R U2' R2 U' R2 U R U2 R' U2 R U2 R2 U' R2' U' R2 U2' R2",
  ],
  85: [
    "R' U2 R U2 R' U R2 U2' R' U2' R U2 R' U' R U2' R'",
    "R' U' R U2' R U R' U2 R U2 R' U2 R' U R U R' U R",
    "R' U2 R2' U R2' U' R' U2' R U2' R' U2' R2' U R2 U R2' U2 R2'",
    "R' U2 R2' U R' U2 R2 U' R U R2' U2' R U' R2' U2 R' U2' R",
  ],
  86: [
    "R' U2' R' U' R2 U2' R2' U R U' R U2 R' U2' R' U2' R2",
    "R U2' R' U2 R U R2' U' R2 U' R2' U2 R U2 R U2' R' U R",
    "R2' U2' R2 U R2' U R U2' R U R U2 R2' U' R2 U' R'",
    "R U R' U2 R U2 R' U2' R U2' R2' U2 R2 U2 R2' U R2 U' R'",
  ],
  87: [
    "R U2 R U R2' U2 R2 U' R' U R' U2' R U2 R U2 R2'",
    "R2 U2 R2' U' R2 U' R' U2 R' U' R' U2' R2 U R2' U R",
    "R' U2 R U2' R' U' R2 U R2' U R2 U2' R' U2' R' U2 R",
    "R2 U' R' U' R U' R U R2' U R U' R U' R2 U R2 U2 R2'",
  ],
  88: [
    "R2' U2 R U2 R U2' R' U R' U' R2 U2 R2' U R U2 R",
    "R U2 R' U2' R' U2' R2 U R2' U R2 U' R' U2' R U2 R'",
    "R U R2' U R2 U2' R' U' R' U2 R' U' R2 U' R2' U2 R2",
    "R U R2' U' R2 U2' R2' U2' R2 U2 R' U2 R U2' R' U2' R U' R'",
  ],
  89: [
    "R2 U2' R' U2' R' U2 R U' R U R2' U2' R2 U' R' U2' R'",
    "R' U2' R U2 R U2 R2' U' R2 U' R2' U R U2 R' U2' R",
    "R' U' R2 U' R2' U2 R U R U2' R U R2' U R2 U2' R2'",
    "R U R' U R2' U2 R U R U R' U' R' U2 R2' U' R2' U2' R",
  ],
  90: [
    "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U R2' U2' R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U R2 U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U R2' U2' R2 U' R2' U2' R2",
  ],
  91: [
    "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2 R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R2 U' R2 U2 R2' U R2 U2 R2'",
    "R2' U2 R2 U R2' U2 R2 U' R2' U2 R2 U R2' U2 R2",
  ],
  92: [
    "R U2 R' U R U2 R' U' R' U2' R U' R' U2' R",
    "R U2' R' U' R U2' R' U2' R' U2' R U' R' U2' R",
    "R U2' R' U' R U2' R' U' R' U2 R U R' U2 R",
    "R U2' R' U' R U' R2 U2' R2' U' R' U R2' U2 R2' U' R'",
  ],
  93: [
    "R' U2' R U' R' U2' R U R U2 R' U R U2 R'",
    "R' U2 R U R' U2 R U R U2' R' U' R U2' R'",
    "R' U2 R U R' U2 R U2 R U2 R' U R U2 R'",
    "R' U2 R U R' U R2' U2 R2 U R U' R2 U2' R2 U R",
  ],
  94: [
    "R2 U R2' U R2 U R2' U2 R2 U2 R2' U R2 U' R2'",
    "R2' U R2 U R2' U R2 U2 R2' U2 R2 U R2' U' R2",
    "R' U R' U2 R U R U' R2' U2' R2 U R' U2' R",
    "R U R' U' R2' U2 R2 U R U' R' U R2' U2 R2",
  ],
  95: [
    "R' U' R U R2 U2' R2' U' R' U R U' R2 U2' R2'",
    "R U' R U2' R' U' R' U R2 U2 R2' U' R U2 R'",
    "R2 U' R2' U' R2 U' R2' U2' R2 U2' R2' U' R2 U R2'",
    "R2' U' R2 U' R2' U' R2 U2' R2' U2' R2 U' R2' U R2",
  ],
  96: [
    "R2 U R2' U' R2 U2' R2' U2' R2 U' R2' U' R2 U' R2'",
    "R2' U R2 U' R2' U2' R2 U2' R2' U' R2 U' R2' U' R2",
    "R2' U2' R2 U' R U R' U' R2' U2' R2 U R U' R'",
    "R' U2 R U' R2' U2 R2 U R' U' R' U2' R U' R",
  ],
  97: [
    "R U2' R' U R2 U2' R2' U' R U R U2 R' U R'",
    "R2 U2 R2' U R' U' R U R2 U2 R2' U' R' U R",
    "R2 U' R2' U R2 U2 R2' U2 R2 U R2' U R2 U R2'",
    "R2' U' R2 U R2' U2 R2 U2 R2' U R2 U R2' U R2",
  ],
  98: [
    "R2 U2 R2' U R2 U' R2 U2' R2' U' R2 U2' R2' U2 R2'",
    "R2 U2 R2' U R2 U' R2' U2' R2 U' R2' U2' R2 U2 R2'",
    "R2' U2 R2 U R2' U' R2 U2' R2' U' R2 U2' R2' U2 R2",
    "R2' U2 R2 U R2' U' R2' U2' R2 U' R2' U2' R2 U2 R2",
  ],
  99: [
    "R2 U2' R2' U' R2 U R2 U2 R2' U R2 U2 R2' U2' R2'",
    "R2 U2' R2' U' R2 U R2' U2 R2 U R2' U2 R2 U2' R2'",
    "R2' U2' R2 U' R2' U R2 U2 R2' U R2 U2 R2' U2' R2",
    "R2' U2' R2 U' R2' U R2' U2 R2 U R2' U2 R2 U2' R2",
  ],
  100: [
    "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U' R2 U2' R2'",
    "R2 U2' R2' U2 R2 U R2' U2 R2 U R2' U' R2 U2' R2'",
    "R2' U2' R2 U2 R2' U R2 U2 R2' U R2 U' R2' U2' R2",
    "R2' U2' R2' U2 R2 U R2' U2 R2 U R2 U' R2' U2' R2",
  ],
  101: [
    "R2 U2 R2 U2' R2' U' R2 U2' R2' U' R2' U R2 U2 R2'",
    "R2 U2 R2' U2' R2 U' R2' U2' R2 U' R2' U R2 U2 R2'",
    "R2' U2 R2 U2' R2' U' R2 U2' R2' U' R2 U R2' U2 R2",
    "R2' U2 R2' U2' R2 U' R2' U2' R2 U' R2 U R2' U2 R2",
  ],
  102: [
    "R U R' U2 R U2 R' U' R' U' R U' R' U2 R",
    "R2 U R2' U R2 U' R2' U R2 U R2' U2' R2 U' R2'",
    "R2 U R2' U2 R2 U' R2' U' R2 U R2' U' R2 U' R2'",
    "R2' U R2 U R2' U' R2 U R2' U R2 U2' R2' U' R2",
  ],
  103: [
    "R2 U' R2' U R2 U R2' U2' R2 U' R2' U2 R2 U R2'",
    "R2' U' R2 U R2' U R2 U2' R2' U' R2 U2 R2' U R2",
    "R U2 R' U' R U' R' U' R' U2 R U2 R' U R",
    "R2 U' R2' U2' R2 U R2' U R2 U' R2' U R2 U R2'",
  ],
  104: [
    "R2 U2' R2' U2' R2' U R' U' R2' U R2 U R U' R' U2' R2'",
    "R2' U2' R2 U' R U R' U' R2' U' R2 U R U' R2 U' R2",
    "R' U' R2 U' R2' U2 R U R U2' R U R2' U2 R2 U2 R2'",
    "R U2' R U R U2 R2' U' R2 U' R2 U' R2 U2' R2' U2' R2 U2 R2'",
  ],
  105: [
    "R2 U2 R2' U R' U' R U R2 U R2' U' R' U R2' U R2'",
    "R2' U2 R2 U2 R2 U' R U R2 U' R2' U' R' U R U2 R2",
    "R U R2' U R2 U2' R' U' R' U2 R' U' R2 U2' R2' U2' R2",
    "R2 U2 R2' U R2 U2 R2' U2 R' U2 R' U2' R U' R' U2' R U2 R",
  ],
  106: [
    "R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R",
    "R2 U2 R U R' U' R2' U' R2 U R U' R2 U2 R2 U2 R2'",
    "R2' U R2' U R' U' R2' U R2 U R U' R' U R2' U2 R2",
    "R U2' R' U2' R2 U2' R' U2' R' U2 R2 U2 R2 U2' R2 U R2' U R",
  ],
  107: [
    "R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R'",
    "R2 U' R2 U' R U R2 U' R2' U' R' U R U' R2 U2' R2'",
    "R2' U2' R' U' R U R2 U R2' U' R' U R2' U2' R2' U2' R2",
    "R2' U2 R2 U2' R2 U' R2 U' R2' U2 R U R U2' R U R2' U' R2",
  ],
  108: [
    "R2 U2' R2' U' R2 U2' R2' U' R2 U2 R2' U R2 U2 R2'",
    "R2 U2' R2' U' R2 U2' R2' U' R2' U2 R2 U R2' U2 R2",
    "R2' U2' R2 U' R2' U2' R2 U' R2 U2 R2' U R2 U2 R2'",
    "R2' U2' R2 U' R2' U2' R2 U' R2' U2 R2 U R2' U2 R2",
  ],
  109: [
    "R2 U2 R2' U R2 U2 R2' U R2 U2' R2' U' R2 U2' R2'",
    "R2 U2 R2' U R2 U2 R2' U R2' U2' R2 U' R2' U2' R2",
    "R2' U2 R2 U R2' U2 R2 U R2 U2' R2' U' R2 U2' R2'",
    "R2' U2 R2 U R2' U2 R2 U R2' U2' R2 U' R2' U2' R2",
  ],
  110: [
    "R2' U2 R U R' U2 R U2 R U' R' U R U2 R' U2 R",
    "R2 U R2 U2 R U' R' U' R2' U' R2 U R U2 R' U2 R",
    "R2' U R' U2 R2' U' R2 U' R U' R' U R2' U2 R2 U2 R2'",
    "R U2 R2 U' R2 U2 R' U2' R2' U2 R2' U2' R U R2' U2' R'",
  ],
  111: [
    "R' U R U2' R2' U' R U2' R' U R U R' U R U R",
    "R U2' R2' U2' R' U2 R2' U2 R' U' R' U' R' U2' R U2 R",
    "R U' R2' U2 R' U2' R2' U R' U' R' U' R' U2' R U2 R",
    "R' U' R U' R2 U R2 U' R2 U' R2' U2' R2 U2' R U' R2'",
  ],
  112: [
    "R U' R' U2 R2 U R' U2 R U' R' U' R U' R' U' R'",
    "R U R' U R2' U' R2' U R2' U R2 U2 R2' U2 R' U R2",
    "R' U R2 U2' R U2 R2 U' R U R U R U2 R' U2' R'",
    "R' U2 R2 U2 R U2' R2 U2' R U R U R U2 R' U2' R'",
  ],
  113: [
    "R2 U2' R' U' R U2' R' U2' R' U R U' R' U2' R U2' R'",
    "R2 U' R U2' R2 U R2' U R' U R U' R2 U2' R2' U2' R2",
    "R2' U' R2' U2' R' U R U R2 U R2' U' R' U2' R U2' R'",
    "R' U2' R U2' R' U2' R' U2' R U' R U R2' U2 R U R",
  ],
  114: [
    "R2' U R U R U2 R' U2' R' U2 R U2 R' U' R2",
    "R2' U R U2' R' U2' R U2 R U2' R' U' R' U' R2",
    "R2 U' R' U2 R U2 R' U2' R' U2 R U R U R2'",
    "R2 U' R' U' R' U2' R U2 R U2' R' U2' R U R2'",
  ],
  115: [
    "R U' R U R' U' R' U R U2' R U2 R' U2 R' U' R U2 R'",
    "R' U2 R U2' R2' U2' R2' U2 R2 U' R2' U' R2 U R2 U' R' U R",
    "R' U R U2' R U2 R' U2 R' U2 R U2' R U2 R' U2 R U2 R'",
    "R' U R U2' R U2 R' U' R U2' R' U2 R' U2' R U' R U2 R'",
  ],
  116: [
    "R' U R' U' R U R U' R' U2 R' U2' R U2' R U R' U2' R",
    "R U R2' U' R2 U' R2' U2 R2 U2' R' U2' R U2 R' U' R U' R'",
    "R U R' U R2 U R' U' R' U2 R U2 R U2' R2' U2 R U' R'",
    "R U2 R U2' R' U' R' U' R' U' R2 U2' R2' U2' R2' U2 R' U2' R'",
  ],
  117: [
    "R2 U R2' U2' R2 U R2' U' R2 U R2' U2' R2 U R2'",
    "R2 U2' R2' U2 R' U2 R2' U R2 U2 R U2 R2 U2' R2'",
    "R2 U2' R2' U2' R2 U R2' U R2 U' R2' U' R2 U' R2'",
    "R2 U' R2' U' R2 U' R2' U R2 U R2' U2' R2 U2' R2'",
  ],
  118: [
    "R2 U R2' U R2 U R2' U' R2 U' R2' U2 R2 U2 R2'",
    "R2 U2 R2' U2 R2 U' R2' U' R2 U R2' U R2 U R2'",
    "R2 U2 R2' U2' R' U2' R2' U' R2 U2' R U2' R2 U2 R2'",
    "R2 U' R2' U2 R2 U' R2' U R2 U' R2' U2 R2 U' R2'",
  ],
  119: [
    "R U R' U R2 U2' R2' U' R2 U2' R2' U2' R U' R'",
    "R U R' U R2' U2' R2 U' R2' U2' R2 U2' R U' R'",
    "R2 U R2' U R2 U2' R2' U' R2 U2' R2' U2' R2 U' R2'",
    "R2 U R2' U R2' U2' R2 U' R2' U2' R2 U2' R2 U' R2'",
  ],
  120: [
    "R2 U' R2' U' R2 U2 R2' U R2 U2 R2' U2 R2 U R2'",
    "R2 U' R2' U' R2' U2 R2 U R2' U2 R2 U2 R2 U R2'",
    "R2' U' R2 U' R2 U2 R2' U R2 U2 R2' U2 R2' U R2",
    "R2' U' R2 U' R2' U2 R2 U R2' U2 R2 U2 R2' U R2",
  ],
  121: [
    "R U R U R2' U R U' R U' R' U2 R' U' R U2' R'",
    "R' U R U' R' U2 R' U' R U' R U R2' U R U2' R",
    "R' U2' R U2' R U R' U R' U' R2 U' R' U R' U2' R",
    "R U R' U R2' U R U2' R2 U' R' U R' U2 R' U' R2",
  ],
  122: [
    "R U2 R' U2 R' U' R U' R U R2' U R U' R U2 R'",
    "R U' R' U R U2' R U R' U R' U' R2 U' R' U2 R'",
    "R' U' R' U' R2 U' R' U R' U R U2' R U R' U2 R",
    "R2' U R U2' R U' R U R2' U2 R' U' R2 U' R U' R'",
  ],
  123: [
    "R U2 R U R2' U R U' R U' R' U2 R' U' R U2 R'",
    "R U2 R' U R' U' R2 U' R' U R' U R U2' R U' R'",
    "R' U2 R U' R' U2 R' U' R U' R U R2' U R U2 R",
    "R' U' R U2' R U R' U R' U' R2 U' R' U R' U2 R",
  ],
  124: [
    "R U R' U2 R' U' R U' R U R2' U R U' R U2' R'",
    "R U2' R' U R U2' R U R' U R' U' R2 U' R' U2' R'",
    "R' U2' R U' R U R2' U R U' R U' R' U2 R' U R",
    "R' U2' R' U' R2 U' R' U R' U R U2' R U R' U2' R",
  ],
  125: [
    "R' U2' R U' R U R' U2 R U2 R' U2 R' U2' R",
    "R U2' R U R U2 R2' U' R2 U' R2 U2 R2 U2 R2'",
    "R' U' R U2 R U R' U2 R' U2' R2 U' R' U R' U2' R",
    "R2' U R2' U2 R U2 R' U2 R U R U' R2 U2' R U R'",
  ],
  126: [
    "R U2 R' U R' U' R U2' R' U2' R U2' R U2 R'",
    "R' U2 R' U' R' U2' R2 U R2' U R2' U2' R2' U2' R2",
    "R U R' U2' R' U' R U2' R U2 R2' U R U' R U2 R'",
    "R2 U' R2 U2' R' U2' R U2' R' U' R' U R2' U2 R' U' R",
  ],
  127: [
    "R2 U2' R2' U2' R2' U R2' U R2 U2' R' U' R' U2 R'",
    "R' U2 R U2' R U2' R' U2' R U' R' U R' U2 R",
    "R' U2 R U' R U R2' U2 R U2' R U' R' U2' R' U R",
    "R U' R' U2 R2' U R' U' R' U2' R U2' R' U2' R2 U' R2",
  ],
  128: [
    "R2' U2 R2 U2 R2 U' R2 U' R2' U2 R U R U2' R",
    "R U2' R' U2 R' U2 R U2 R' U R U' R U2' R'",
    "R U2' R' U R' U' R2 U2' R' U2 R' U R U2 R U' R'",
    "R' U R U2' R2 U' R U R U2 R' U2 R U2 R2' U R2'",
  ],
  129: [
    "R' U' R' U' R U' R2 U R2 U R U R U2' R U' R'",
    "R2' U2 R2 U' R U2' R2' U2 R' U R U2 R2 U2' R2 U2' R2",
    "R2 U R U' R2 U' R2 U2 R2' U' R2 U' R U R' U' R2'",
    "R U R2' U2 R2 U2 R2' U R U2 R U2' R' U2' R U' R'",
  ],
  130: [
    "R U R U R' U R2' U' R2' U' R' U' R' U2 R' U R",
    "R' U' R2 U2' R2' U2' R2 U' R' U2' R' U2 R U2 R' U R",
    "R2' U' R' U R2' U R2' U2' R2 U R2' U R' U' R U R2",
    "R2 U2' R2' U R' U2 R2 U2' R U' R' U2' R2' U2 R2' U2 R2'",
  ],
  131: [
    "R U R' U2 R' U' R' U' R2' U' R2' U R' U R U R",
    "R U R' U2 R U2 R' U2' R' U' R2 U2' R2' U2' R2 U' R'",
    "R2 U R U' R' U R2' U R2 U2' R2' U R2' U R' U' R2'",
    "R2' U2 R2' U2 R2' U2' R' U' R U2' R2 U2 R' U R2' U2' R2",
  ],
  132: [
    "R' U' R U2' R U R U R2 U R2 U' R U' R' U' R'",
    "R2 U2' R2 U2' R2 U2 R U R' U2 R2' U2' R U' R2 U2 R2'",
    "R2' U' R' U R U' R2 U' R2' U2 R2 U' R2 U' R U R2",
    "R' U' R U2' R' U2' R U2 R U R2' U2 R2 U2 R2' U R",
  ],
  133: [
    "R2 U2' R2' U' R2 U R2' U2 R2 U2 R2' U2 R2 U2' R2'",
    "R2' U2' R2 U' R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2",
    "R2 U2' R2' U2 R2 U R2' U2' R2 U' R2' U R2 U2 R2'",
    "R2' U2' R2 U2 R2' U R2 U2' R2' U' R2 U R2' U2 R2",
  ],
  134: [
    "R U R U R2' U R U' R U' R2 U' R2 U' R2' U2 R U' R U' R'",
    "R U R' U R' U2' R2 U R2' U R2' U R' U R' U' R2 U' R' U' R'",
    "R' U' R U' R U2 R2' U' R2 U' R2 U' R U' R U R2' U R U R",
    "R' U' R' U' R2 U' R' U R' U R2' U R2' U R2 U2' R' U R' U R",
  ],
  135: [
    "R2' U R2' U' R2' U' R U' R U R U R2 U R U2' R U' R2",
    "R2 U' R2 U R2 U R' U R' U' R' U' R2' U' R' U2 R' U R2'",
    "R' U2 R2 U2 R' U' R U' R2' U2' R2 U R2' U2 R2 U2 R2' U R",
    "R U2' R2' U2' R U R' U R2 U2 R2' U' R2 U2' R2' U2' R2 U' R'",
  ],
  136: [
    "R2 U2 R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2 U R2' U2' R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U2 R2' U2 R2 U2' R2' U R2 U2' R2' U2 R2",
    "R2 U2 R2' U R2 U2 R2' U' R2 U2' R2' U2 R2 U' R2' U2' R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2' R2 U2 R2' U' R2 U2' R2' U2 R2",
  ],
  137: [
    "R' U2' R U R' U R U' R' U2' R U' R' U2 R U' R' U2 R",
    "R' U2' R U R' U2' R U R' U2 R U R' U' R U' R' U2 R",
    "R' U' R2 U' R' U R U' R2' U' R2 U R' U' R U R2' U2 R",
    "R U2' R2 U2' R2' U' R2 U2' R2 U R U2' R2' U' R2 U2' R2' U2' R",
  ],
  138: [
    "R U2' R2 U2 R2' U2 R U2' R U R U R2 U' R' U2 R2' U2 R'",
    "R2 U2 R' U R U2 R2' U R U2 R' U2 R U R' U2' R U2' R'",
    "R' U' R2' U' R U R2' U2' R' U2 R2' U2' R' U R' U R2 U R",
    "R' U' R2' U' R U2 R2' U2 R' U2' R2' U2 R' U R' U R2 U R",
  ],
  139: [
    "R' U2 R2' U2' R2 U2' R' U2 R' U' R' U' R2' U R U2' R2 U2' R",
    "R U R2 U R' U2' R2 U2' R U2 R2 U2' R U' R U' R2' U' R'",
    "R U R2 U R' U' R2 U2 R U2' R2 U2 R U' R U' R2' U' R'",
    "R2' U2' R U' R' U2' R2 U' R' U2' R U2' R' U' R U2 R' U2 R",
  ],
  140: [
    "R' U' R U2' R' U R U' R' U2' R U' R' U2 R U2 R' U R",
    "R' U' R U2' R' U2' R U R' U2 R U R' U' R U2 R' U R",
    "R2 U R2' U' R2 U R2' U2' R2 U' R2' U R2 U2' R2' U R2 U2' R2'",
    "R2' U R2 U' R2' U R2 U2' R2' U' R2 U R2' U2' R2 U R2' U2' R2",
  ],
  141: [
    "R U R' U2 R U2 R' U' R U2' R' U' R U R' U2' R U' R'",
    "R U R' U2 R U' R' U R U2 R' U R U2' R' U2' R U' R'",
    "R2 U2' R2' U R2 U2' R2' U R2 U R2' U' R2 U R2' U' R2 U2 R2'",
    "R2 U2' R2' U R2 U2' R2' U R2 U' R2' U2' R2 U R2' U' R2 U R2'",
  ],
  142: [
    "R U R' U R2' U2' R2 U' R2' U2 R2 U' R U' R' U2 R2' U R2",
    "R2' U' R2 U2' R U R' U R2' U2' R2 U R2' U2 R2 U' R U' R'",
    "R U2' R2' U2 R2 U R2 U' R U2' R2 U2 R2 U' R2 U R2' U R2",
    "R2' U' R2 U' R2' U R2' U2' R2' U2 R' U R2' U' R2' U2' R2 U2 R'",
  ],
  143: [
    "R2 U R2' U2 R' U' R U' R2 U2 R2' U' R2 U2' R2' U R' U R",
    "R' U' R U' R2 U2 R2' U R2 U2' R2' U R' U R U2' R2 U' R2'",
    "R' U2 R2' U R2 U R U' R2 U2 R2' U' R2 U2' R2' U R' U R",
    "R' U' R U' R2 U2 R2' U R2 U2' R2' U R' U' R2' U' R2 U2' R",
  ],
  144: [
    "R2' U2' R2' U2 R' U R U2 R2 U2' R' U2' R2' U R2 U R2'",
    "R U2 R2' U2' R' U' R U2' R2 U2 R2 U' R2 U R2' U R2",
    "R2 U2' R2' U' R2 U R2 U' R U R2 U2 R2' U' R' U R",
    "R2 U2 R U R' U2 R2' U' R2 U' R U' R2 U R2 U R2'",
  ],
  145: [
    "R2 U2 R2 U2' R U' R' U2' R2' U2 R U2 R2 U' R2' U' R2",
    "R U R U2 R' U2' R' U2 R U2 R U R2' U2' R2 U' R2'",
    "R U2' R' U2' R U2 R U2' R' U' R U R2' U2' R2 U' R2'",
    "R2' U' R2 U2' R2' U R U2 R U2 R' U2' R' U2 R U R",
  ],
  146: [
    "R2 U2' R2' U' R2 U2' R2' U2 R2 U2' R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U2 R2' U2' R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U2 R2 U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U2 R2' U2' R2 U' R2' U2' R2",
  ],
  147: [
    "R U2' R2 U2 R2' U2' R2 U2' R2' U2 R' U R2' U2 R2",
    "R' U2' R U R U R2' U' R2 U2 R2' U2' R2 U2 R'",
    "R' U2' R2' U2 R2 U2' R2' U2' R2 U2 R U R2 U2 R2'",
    "R U2 R2' U2' R2 U2 R2' U R2 U' R' U' R' U2 R",
  ],
  148: [
    "R U R' U R2 U2' R2' U2' R U R U2' R' U2 R'",
    "R2 U R2' U R2 U2' R2' U2 R2 U R2' U R2 U2' R2'",
    "R2 U R2' U' R2 U2 R2' U2' R2 U2' R2' U R2 U2' R2'",
    "R2 U2 R2' U' R2 U2 R2' U2 R2 U2' R2' U R2 U' R2'",
  ],
  149: [
    "R2 U2' R2' U R2 U R2' U2 R2 U2' R2' U R2 U R2'",
    "R2 U2' R2' U R2 U2' R2' U2' R2 U2 R2' U' R2 U R2'",
    "R2 U' R2' U R2 U2' R2' U2 R2 U2 R2' U' R2 U2 R2'",
    "R2 U' R2' U' R2 U2 R2' U2' R2 U' R2' U' R2 U2 R2'",
  ],
  150: [
    "R U2 R' U R U R' U2' R U2' R' U2' R U2' R' U R U R'",
    "R2 U2 R U R' U' R' U2' R U R U' R2' U2 R' U2 R2 U R2'",
    "R2 U2 R2' U R2 U2 R' U2 R2' U' R U R U2' R' U' R' U R",
    "R2' U2 R U R' U' R' U2' R U R U' R2' U2 R2' U2 R2' U R2",
  ],
  151: [
    "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U R2 U2' R2' U2 R2 U2 R2'",
    "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U' R2 U2 R2' U2' R2 U' R2'",
    "R2' U R2 U2 R2' U2 R2 U2 R2' U2 R2 U R2' U2' R2 U2 R2' U2 R2",
    "R2' U R2 U2 R2' U2 R2 U2 R2' U2 R2 U' R2' U2 R2 U2' R2' U' R2",
  ],
  152: [
    "R U' R U R U' R' U' R U R U2 R U' R U' R2' U' R2'",
    "R U' R U' R U2 R U R U' R' U' R U R U' R' U' R2",
    "R2 U R2 U R' U R' U2' R' U' R' U R U R' U' R' U R'",
    "R2 U2' R U2 R U R' U' R2' U' R2 U R2' U' R2' U2 R U2 R2",
  ],
   153: [
     ],
   154: [
     ],
   155: [
     ],
   156: [
     ],
   157: [
     ],
   158: [
     ],
   159: [
     ],
   160: [
     ],
   161: [
     ],
   162: [
     ],
   163: [
     ],
   164: [
     ],
   165: [
     ],
   166: [
     ],
   167: [
     ],
   168: [
     ],
   169: [
     ],
   170: [
     ],
   171: [
     ],
   172: [
     ],
   173: [
     ],
   174: [
     ],
   175: [
     ],
   176: [
     ],
   177: [
     ],
   178: [
     ],
   179: [
     ],
   180: [
     ]
   
};
