/* ======================================================
   MY STYLE BOOK
   script.js
   Part 1
====================================================== */
const tocButton = document.getElementById("tocButton");
const closeToc = document.getElementById("closeToc");
const tocPanel = document.getElementById("tocPanel");
const tocList = document.getElementById("tocList");
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
let pageFlip = null;

const pageIndicator = document.getElementById("pageIndicator");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
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
/* ==========================
   Ending Page
========================== */

function createEndingPage() {

    const page = createPage("page");

    page.innerHTML = `
        <div class="ending-page">
            <div>
                <h2>Thank You</h2>

                <p>
                    Every style tells a story.<br>
                    Thank you for reading.
                </p>
            </div>
        </div>
    `;

    return page;

}

/* ==========================
   Back Cover
========================== */

function createBackCover() {

    const page = createPage("page back-cover");

    page.innerHTML = `
        <div class="cover-inner">
            <p>MY STYLE BOOK</p>
        </div>
    `;

    return page;

}

/* ==========================
   Generate Book
========================== */

function buildBook() {

    book.innerHTML = "";

    book.appendChild(createCover());
    book.appendChild(createTitlePage());

    IMAGE_FILES.forEach((file, index) => {
        book.appendChild(createPhotoPage(file, index));
    });

    book.appendChild(createEndingPage());
    book.appendChild(createBackCover());

}

/* ==========================
   Loading
========================== */

window.addEventListener("load", () => {

    buildBook();

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.classList.add("hide");

        initializePageFlip();
   document.addEventListener("keydown", (event) => {

    if (!pageFlip) return;

    switch (event.key) {

        case "ArrowLeft":
            pageFlip.flipPrev();
            break;

        case "ArrowRight":
            pageFlip.flipNext();
            break;

        case "Home":
            pageFlip.flip(0);
            break;

        case "End":
            pageFlip.flip(pageFlip.getPageCount() - 1);
            break;

    }

});
function updateNavigation() {

    if (!pageFlip) return;

    const current = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();

    pageIndicator.textContent = `${current + 1} / ${total}`;

    prevButton.disabled = current === 0;
    nextButton.disabled = current === total - 1;

}
    }, 800);

});

/* ==========================
   PageFlip
========================== */

function initializePageFlip() {

    if (typeof St === "undefined" || !St.PageFlip) {

        console.warn("StPageFlip が読み込まれていません。通常表示で続行します。");
        return;

    }

    pageFlip = new St.PageFlip(book, {

        width: 550,
        height: 780,

        size: "stretch",

        minWidth: 315,
        maxWidth: 900,

        minHeight: 420,
        maxHeight: 1200,

        maxShadowOpacity: 0.35,

        showCover: true,

        mobileScrollSupport: false,

        usePortrait: window.innerWidth < 900

    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
updateNavigation();

pageFlip.on("flip", () => {

});

    updateNavigation();
prevButton.addEventListener("click", () => {

    if (pageFlip) {

        pageFlip.flipPrev();

    }

});

nextButton.addEventListener("click", () => {

    if (pageFlip) {

        pageFlip.flipNext();

    }

});

}

/* ==========================
   Resize
========================== */

window.addEventListener("resize", () => {

    // 必要に応じて今後拡張

});

/* ==========================
   Image Error
========================== */

document.addEventListener("error", (event) => {

    if (event.target.tagName !== "IMG") return;

    event.target.style.objectFit = "contain";
    event.target.style.padding = "40px";
    event.target.alt = "Image not found";

}, true);
