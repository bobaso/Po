
/* =========================================
   WORK04 基本設定
========================================= */

const workData = {
    mainVisual: "../common/images/works-main-visual.png",
    content: `
        <div class="work04-carousel">

            <button class="work04-arrow work04-prev" type="button" aria-label="前の画像">
                ＜
            </button>

            <div class="work04-carousel-images">
                <img src="../images/work04-01.png"
                     alt=""
                     class="work04-carousel-image is-active">

                <img src="../images/work04-02.png"
                     alt=""
                     class="work04-carousel-image">

                <img src="../images/work04-03.png"
                     alt=""
                     class="work04-carousel-image">
            </div>

            <button class="work04-arrow work04-next" type="button" aria-label="次の画像">
                ＞
            </button>

            <div class="work04-dots">
                <button class="work04-dot is-active" type="button" aria-label="1枚目"></button>
                <button class="work04-dot" type="button" aria-label="2枚目"></button>
                <button class="work04-dot" type="button" aria-label="3枚目"></button>
            </div>

        </div>
    `
};

/* =========================================
   WORK04 カルーセル
========================================= */

function initWork04Carousel() {
    const carousel = document.querySelector(".work04-carousel");
    if (!carousel || carousel.dataset.initialized === "true") return;

    carousel.dataset.initialized = "true";

    const images = carousel.querySelectorAll(".work04-carousel-image");
    const dots = carousel.querySelectorAll(".work04-dot");
    const prevButton = carousel.querySelector(".work04-prev");
    const nextButton = carousel.querySelector(".work04-next");

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;

        images.forEach((image, i) => {
            image.classList.toggle("is-active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("is-active", i === currentIndex);
        });
    }

    prevButton.addEventListener("click", function (event) {
        event.stopPropagation();
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function (event) {
        event.stopPropagation();
        showImage(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function (event) {
            event.stopPropagation();
            showImage(index);
        });
    });

    showImage(0);
}

/* =========================================
   カルーセル初期化
========================================= */

requestAnimationFrame(function () {
    initWork04Carousel();
});
