/* =====================================================
   MY STYLE BOOK
   script.js
   Part 1 / 2
===================================================== */

/* =========================
   Image List
========================= */

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

/* =========================
   Elements
========================= */

const loading = document.getElementById("loading");
const wrapper = document.getElementById("book-wrapper");
const bookElement = document.getElementById("book");
const pageIndicator = document.getElementById("current-page");

let pageFlip;

/* =========================
   Image Preload
========================= */

function preloadImages(list){

    return Promise.all(

        list.map(src =>

            new Promise(resolve => {

                const img = new Image();

                img.onload = () => resolve();

                img.onerror = () => {

                    console.warn("Image not found:", src);

                    resolve();

                };

                img.src = src;

            })

        )

    );

}

/* =========================
   Create Image Page
========================= */

function createImagePage(src,index){

    const page = document.createElement("div");

    page.className = "page";

    const img = document.createElement("img");

    img.src = src;

    img.alt = `Page ${index+1}`;

    img.loading = "eager";

    img.draggable = false;

    img.onerror = function(){

        this.style.objectFit = "contain";

        this.style.padding = "80px";

        this.src =
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="800"
                 height="1000">

                <rect
                    width="100%"
                    height="100%"
                    fill="white"/>

                <text
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    fill="#999"
                    font-size="32">

                    Image Not Found

                </text>

            </svg>
            `);

    };

    page.appendChild(img);

    return page;

}

/* =========================
   Back Cover
========================= */

function createBackCover(){

    const page = document.createElement("div");

    page.className = "page back-cover";

    page.innerHTML = `

        <div style="text-align:center">

            <h2>MY STYLE BOOK</h2>

            <p>Thank you for reading.</p>

        </div>

    `;

    return page;

}

/* =========================
   Generate Pages
========================= */

function buildBook(){

    images.forEach((src,index)=>{

        bookElement.appendChild(

            createImagePage(src,index)

        );

    });

    bookElement.appendChild(

        createBackCover()

    );

}
