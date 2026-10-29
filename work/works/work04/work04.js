
/* =========================================
   WORK04 基本設定
========================================= */

const workData = {
    mainVisual: "../images/works-main-visual.png",
    content: `
        <div class="work04-carousel">

            <!-- 画像表示領域 -->
            <div class="work04-carousel-images">

                <img
                    src="../images/work04-01.png"
                    alt=""
                    class="work04-carousel-image work-image-zoom is-active">

                <img
                    src="../images/work04-02.png"
                    alt=""
                    class="work04-carousel-image work-image-zoom">

                <img
                    src="../images/work04-03.png"
                    alt=""
                    class="work04-carousel-image work-image-zoom">

            </div>

            <!-- 左右の矢印 -->
            <button
                class="work04-arrow work04-prev"
                type="button"
                aria-label="前の画像">
                ＜
            </button>

            <button
                class="work04-arrow work04-next"
                type="button"
                aria-label="次の画像">
                ＞
            </button>

            <!-- インジケーター -->
            <div class="work04-dots">
                <button class="work04-dot is-active" type="button" aria-label="1枚目"></button>
                <button class="work04-dot" type="button" aria-label="2枚目"></button>
                <button class="work04-dot" type="button" aria-label="3枚目"></button>
            </div>

        </div>

        
        <!-- 文字グループ -->
        <div class="work04-text-group">

            <!-- 小見出し -->
            <p class="work-heading-small work04-heading-small">
                DATA.2026/04/28-2026/05/07<br>
                CATEGORY.イラスト<br>
                EQUIPMENT.ibisPaint<br>
                MATERIAL.サンカード
            </p>

            <!-- 大見出し -->
            <p class="work-heading-large work04-heading-large">
                恐竜キラカード
            </p>

            <!-- 本文 -->
            <p class="work-body work04-body">
                2026年ペーパーサミットの出展にあたり、<br>
                物販のブースの商品企画で子供をターゲットに<br>
                ホロ加工のトレーディング風カードを制作デザインしました。<br>
                両面絵柄の印刷で表面にデフォルメ調<br>裏面のイラストが描かれています
            </p>

        </div>

    `
};


/* =========================================
   WORK04 カルーセル初期化
========================================= */

function initWork04Carousel() {

    const carousel = document.querySelector(".work04-carousel");

    if (
        !carousel ||
        carousel.dataset.initialized === "true"
    ) {
        return;
    }

    carousel.dataset.initialized = "true";

    const images =
        carousel.querySelectorAll(".work04-carousel-image");

    const dots =
        carousel.querySelectorAll(".work04-dot");

    const prevButton =
        carousel.querySelector(".work04-prev");

    const nextButton =
        carousel.querySelector(".work04-next");

    if (
        images.length === 0 ||
        !prevButton ||
        !nextButton ||
        dots.length !== images.length
    ) {
        console.error("WORK04カルーセル：必要な要素が見つかりません。");
        return;
    }

    let currentIndex = 0;

    /* 画像とインジケーターを切り替える */
    function showImage(index) {

        currentIndex =
            (index + images.length) % images.length;

        images.forEach(function (image, i) {
            image.classList.toggle(
                "is-active",
                i === currentIndex
            );
        });

        dots.forEach(function (dot, i) {
            dot.classList.toggle(
                "is-active",
                i === currentIndex
            );
        });
    }

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

    /* インジケーター */
    dots.forEach(function (dot, index) {
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
