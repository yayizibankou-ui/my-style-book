const images = [
  "images/P.1.PNG",
  "images/P.2.jpg",
  "images/P.3.jpg",
  "images/P.4.PNG",
  "images/P.5.PNG",
  "images/P.6.PNG",
  "images/P.7.PNG",
  "images/P.8.PNG",
  "images/P.9.PNG",
  "images/P.10.PNG",
  "images/P.11.PNG",
  "images/P.12.PNG",
  "images/P.13.PNG",
  "images/P.14.PNG",
  "images/P.15.jpg",
  "images/P.16.jpg",
  "images/P.17.PNG",
  "images/P.18.PNG",
  "images/P.19.PNG",
  "images/P.20.PNG",
  "images/P.21.jpg",
  "images/P.22.PNG",
  "images/P.23.jpg",
  "images/P.24.jpg",
  "images/P.25.jpg",
  "images/P.26.jpg",
  "images/P.27.jpg",
  "images/P.28.jpg",
  "images/P.29.jpg",
  "images/P.30.jpg",
  "images/P.31.jpg",
  "images/P.32.jpg"
];

let currentPage = 0;

const pageImage = document.getElementById("pageImage");
const pageNumber = document.getElementById("pageNumber");
const pageTotal = document.getElementById("pageTotal");

pageTotal.textContent = images.length;

function showPage(index) {
  pageImage.src = images[index];
  pageNumber.textContent = index + 1;
}

document.getElementById("next").addEventListener("click", () => {
  if (currentPage < images.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// 最初のページを表示
showPage(currentPage);
