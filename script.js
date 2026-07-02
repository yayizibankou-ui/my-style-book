/* ======================================================
   MY STYLE BOOK
   script.js
   Part 1
====================================================== */

const IMAGE_FILES = [
    "P.1.PNG",
    "P.2.jpg",
    "P.3.jpg",
    "P.4.PNG",
    "P.5.PNG",
    "P.6.PNG",
    "P.7.PNG",
    "P.8.PNG",
    "P.9.PNG",
    "P.10.PNG",
    "P.11.PNG",
    "P.12.PNG",
    "P.13.PNG",
    "P.14.PNG",
    "P.15.jpg",
    "P.16.jpg",
    "P.17.PNG",
    "P.18.PNG",
    "P.19.PNG",
    "P.20.PNG",
    "P.21.jpg",
    "P.22.PNG",
    "P.23.jpg",
    "P.24.jpg",
    "P.25.jpg",
    "P.26.jpg",
    "P.27.jpg",
    "P.28.jpg",
    "P.29.jpg",
    "P.30.jpg",
    "P.31.jpg",
    "P.32.jpg"
];

const book = document.getElementById("book");

function createPage(className = "page") {
    const page = document.createElement("div");
    page.className = className;
    return page;
}

/* ==========================
   Cover
========================== */

function createCover() {

    const page = createPage("page cover");

    page.innerHTML = `
        <div class="cover-inner">
            <h1>MY STYLE BOOK</h1>
            <h2>Timeless Elegance</h2>

            <div class="author">
                Shiki
            </div>

            <div class="year">
                2026
            </div>
        </div>
    `;

    return page;
}

/* ==========================
   Title Page
========================== */

function createTitlePage(){

    const page = createPage("page");

    page.innerHTML = `
        <div class="title-page">

            <div class="title-page-inner">

                <h1>MY STYLE BOOK</h1>

                <h2>Timeless Elegance</h2>

                <div class="title-divider"></div>

                <div class="title-author">
                    Editorial Edition
                </div>

            </div>

        </div>
    `;

    return page;

}

/* ==========================
   Photo Page
========================== */

function createPhotoPage(fileName,index){

    const page=createPage("page");

    page.innerHTML=`

        <div class="photo-page fade-in">

            <div class="photo-frame">

                <img
                    src="images/${fileName}"
                    alt="Page ${index+1}"
                    loading="lazy">

            </div>

            <div class="page-number">

                ${String(index+1).padStart(2,"0")}

            </div>

        </div>

    `;

    return page;

}
