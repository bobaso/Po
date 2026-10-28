
/* =========================================
   WORK04 基本設定
========================================= */

const workData = {
    mainVisual: "../images/works-main-visual.png",
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

        <!-- 拡大表示 -->
        <div class="work04-lightbox">
            <img src="" alt="" class="work04-lightbox-image">
        </div>

                <!-- 小見出し -->
        <p class="work-heading-small work04-heading-small">
            DATA.2026/04/28-2026/05/07<br>
    CATEGORY.イラスト<br>
    EQUIPMENT.ibisPaint
    MATERIAL.サンカード
        </p>

        <!-- 大見出し -->
        <p class="work-heading-large work04-heading-large">
            テキスト
        </p>

        <!-- 本文 -->
        <p class="work-body work04-body">
            テキスト
        </p>

        
    `
};

/* =========================================
   WORK04 カルーセル・拡大表示
========================================= */

function initWork04Carousel() {
    const carousel = document.querySelector(".work04-carousel");
    const lightbox = document.querySelector(".work04-lightbox");

    if (!carousel || !lightbox || carousel.dataset.initialized === "true") {
        return;
    }

    carousel.dataset.initialized = "true";

    const images = carousel.querySelectorAll(".work04-carousel-image");
    const dots = carousel.querySelectorAll(".work04-dot");
    const prevButton = carousel.querySelector(".work04-prev");
    const nextButton = carousel.querySelector(".work04-next");

    const lightboxImage = lightbox.querySelector(".work04-lightbox-image");

    let currentIndex = 0;

    /* 画像切り替え */
    function showImage(index) {
        currentIndex = (index + images.length) % images.length;

        images.forEach((image, i) => {
            image.classList.toggle("is-active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("is-active", i === currentIndex);
        });
    }

    /* 拡大表示 */
       function openLightbox(image) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("is-open");
    }

    /* 拡大表示を閉じる */
    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightboxImage.src = "";
    }
    /* 画像クリックで拡大表示 */
    images.forEach((image) => {
        image.addEventListener("click", function (event) {
            event.stopPropagation();
            openLightbox(image);
        });
    });

    /* 前の画像 */
    prevButton.addEventListener("click", function (event) {
        event.stopPropagation();
        showImage(currentIndex - 1);
    });

    /* 次の画像 */
    nextButton.addEventListener("click", function (event) {
        event.stopPropagation();
        showImage(currentIndex + 1);
    });

    /* ドットで画像を選択 */
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function (event) {
            event.stopPropagation();
            showImage(index);
        });
    });

    /* 拡大画像をクリック・タップして閉じる */
    lightbox.addEventListener("click", closeLightbox);

    showImage(0);
}

/* =========================================
   カルーセル初期化
========================================= */

requestAnimationFrame(function () {
    initWork04Carousel();
});
