
/* =========================================
   WORK04 基本設定
========================================= */

const workData = {
    // 共通メインビジュアル
    mainVisual: "../images/works-main-visual.png",

    // 作品固有の内容
    content: `
        <!-- WORK04 画像カルーセル -->
        <div class="work04-carousel">

            <img
                src="../images/work04-01.png"
                alt=""
                class="work04-carousel-image is-active">

            <img
                src="../images/work04-02.png"
                alt=""
                class="work04-carousel-image">

            <img
                src="../images/work04-03.png"
                alt=""
                class="work04-carousel-image">

        </div>
    `
};

/* =========================================
   WORK04 カルーセル
========================================= */

function initWork04Carousel() {

    const carousel =
        document.querySelector(".work04-carousel");

    if (!carousel) return;

    const images =
        carousel.querySelectorAll(".work04-carousel-image");

    let currentIndex = 0;

    function showImage(index) {
        images.forEach(function (image, i) {
            image.classList.toggle(
                "is-active",
                i === index
            );
        });
    }

    // クリックで次の画像へ切り替え
    carousel.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
}

window.initWork04Carousel = initWork04Carousel;

/* =========================================
   カルーセル初期化
========================================= */

requestAnimationFrame(function () {
    initWork04Carousel();
});
