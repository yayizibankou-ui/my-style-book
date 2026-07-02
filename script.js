const pages = [];

const extensions = {
  1: "PNG",
  2: "jpg",
  3: "jpg",
  4: "PNG",
  5: "PNG",
  6: "PNG",
  7: "PNG",
  8: "PNG",
  9: "PNG",
  10: "PNG",
  11: "PNG",
  12: "PNG",
  13: "PNG",
  14: "PNG",
  15: "jpg",
  16: "jpg",
  17: "PNG",
  18: "PNG",
  19: "PNG",
  20: "PNG",
  21: "jpg",
  22: "PNG",
  23: "jpg",
  24: "jpg",
  25: "jpg",
  26: "jpg",
  27: "jpg",
  28: "jpg",
  29: "jpg",
  30: "jpg",
  31: "jpg",
  32: "jpg"
};

for (let i = 1; i <= 32; i++) {
  pages.push(`images/P.${i}.${extensions[i]}`);
}

console.log(pages);
