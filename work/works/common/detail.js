
/* =========================================
   共通HTML
========================================= */

const workDetail =
    document.getElementById("work-detail");

workDetail.innerHTML = `

    <div class="visual-area">

        <section class="main-visual">

            <div class="work-canvas">

                <!-- メインビジュアル -->
                <img
                    src="${workData.mainVisual}"
                    alt=""
                    class="works-main-visual">

                <!-- スクロールエリア -->
                <div class="work-scroll-area">

                    <!-- 作品コンテンツ -->
                    <div class="work-content">
                        ${workData.content}
                    </div>

                    <!-- Back to list -->
                    <div class="back-to-list-area">
                        <a
                            href="https://bobaso.github.io/Po/work/work.html"
                            class="back-to-list">
                            Back to list
                        </a>
                    </div>

                </div>

                <!-- WORK -->
                <a
                    href="../../work.html"
                    class="work-bottom-link">
                    <img
                        src="../../../images/work-bottom.png"
                        alt="WORK"
                        class="work-bottom">
                </a>

                <!-- HOME -->
                <a
                    href="../../../HOME/?skipLoading=1"
                    class="home-bottom-link">
                    <img
                        src="../../../images/home-bottom.png"
                        alt="HOME"
                        class="home-bottom">
                </a>

            </div>

        </section>

    </div>

`;


/* =========================================
   基準キャンバス
========================================= */

const visualArea =
    document.querySelector(".visual-area");

const scrollArea =
    document.querySelector(".work-scroll-area");

const workContent =
    document.querySelector(".work-content");

const backToListArea =
    document.querySelector(".back-to-list-area");


/* =========================================
   Back to list の自動配置
========================================= */



function updateBackToListPosition() {

    if (
        !scrollArea ||
        !workContent ||
        !backToListArea
    ) {
        return;
    }

    let maxBottom = 0;

    const elements =
        workContent.querySelectorAll("*");

    elements.forEach(function (element) {

        let top = 0;
        let current = element;

        /*
         * work-content からの位置を計算
         */
        while (
            current &&
            current !== workContent
        ) {
            top += current.offsetTop;
            current = current.offsetParent;
        }

        /*
         * work-content 内にある要素だけを対象にする
         */
        if (current === workContent) {

            const bottom =
                top + element.offsetHeight;

            if (bottom > maxBottom) {
                maxBottom = bottom;
            }

        }

    });

    const gap = 30;

    /*
     * コンテンツ末尾の30px下に配置
     */
    backToListArea.style.position = "absolute";
    backToListArea.style.left = "0";
    backToListArea.style.right = "0";

    backToListArea.style.top =
        (maxBottom + gap) + "px";

    /*
     * リンクの下にも余白を確保
     */
    workContent.style.minHeight =
        (
            maxBottom +
            gap +
            backToListArea.offsetHeight +
            30
        ) + "px";
}

/* =========================================
   初回配置・画像読み込み後の再計算
========================================= */

requestAnimationFrame(function () {
    updateBackToListPosition();
});

workContent.querySelectorAll("img").forEach(function (img) {

    if (!img.complete) {

        img.addEventListener(
            "load",
            updateBackToListPosition
        );

        img.addEventListener(
            "error",
            updateBackToListPosition
        );

    }

});


/* =========================================
   work01専用アニメーションの初期化
========================================= */

if (typeof initWork01ImageAnimation === "function") {
    initWork01ImageAnimation();
}


/* =========================================
   work02専用アニメーションの初期化
========================================= */

if (typeof initWork02OpenAnimation === "function") {
    initWork02OpenAnimation();
}

/* =========================================
   work02専用
   ゲージアニメーションの初期化
========================================= */

if (typeof initWork02GaugeAnimation === "function") {
    initWork02GaugeAnimation();
}

/* =========================================
   共通フェードインアニメーション
   下から上へフェードイン
========================================= */

const fadeUpElements =
    document.querySelectorAll(".fade-up");

if (fadeUpElements.length > 0) {


const fadeUpObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                // 一度表示したら再アニメーションしない
                observer.unobserve(entry.target);

            }

        });

    },
    {
        root: scrollArea,
        threshold: 0.1
    }
);


    fadeUpElements.forEach(function (element) {

        fadeUpObserver.observe(element);

    });

}


/* =========================================
   画面サイズに合わせて縮小
========================================= */

const canvasWidth = 1280;
const canvasHeight = 650;

function resizeWorkDetail() {

    const scaleX =
        window.innerWidth / canvasWidth;

    const scaleY =
        window.innerHeight / canvasHeight;

    const scale =
        Math.min(scaleX, scaleY) * 0.90;

    visualArea.style.transform =
        `translate(-50%, -50%) scale(${scale})`;

    updateBackToListPosition();
}


/* =========================================
   初期表示・画面サイズ変更
========================================= */

resizeWorkDetail();

window.addEventListener(
    "resize",
    resizeWorkDetail
);


/* =========================================
   メインビジュアル表示
========================================= */

const mainVisual =
    document.querySelector(".main-visual");

requestAnimationFrame(function () {

    requestAnimationFrame(function () {

        mainVisual.classList.add("is-visible");

    });

});


/* =========================================
   テキスト タイピングアニメーション
========================================= */

function typingAnimation(element, speed = 15) {

    return new Promise(function (resolve) {

        const originalHTML = element.innerHTML;

        element.innerHTML = "";
        element.style.visibility = "visible";

        let index = 0;

        function typeNext() {

            if (index >= originalHTML.length) {
                updateBackToListPosition();
                resolve();
                return;
            }

            if (
                originalHTML.substring(index, index + 4) === "<br>"
            ) {
                element.innerHTML += "<br>";
                index += 4;
            } else {
                element.innerHTML += originalHTML.charAt(index);
                index++;
            }

            if (index % 10 === 0) {
                updateBackToListPosition();
            }

            setTimeout(typeNext, speed);
        }

        typeNext();
    });
}


/* =========================================
   各文章のタイピングを個別に開始
========================================= */

requestAnimationFrame(function () {

    const typingTexts =
        document.querySelectorAll(".typing-text");

    typingTexts.forEach(function (element, index) {

        setTimeout(function () {
            typingAnimation(element, 15);
        }, index * 300);

    });

});


/* =========================================
   共通：画像クリック・タップ拡大表示
========================================= */

document.addEventListener("click", function (event) {

    const image = event.target.closest(".work-image-zoom");

    if (!image) return;

    /* すでに拡大表示があれば閉じる */
    const existingOverlay = document.querySelector(
        ".work-image-zoom-overlay"
    );

    if (existingOverlay) {
        existingOverlay.remove();
        return;
    }

    /* 拡大表示用の背景を作成 */
    const overlay = document.createElement("div");
    overlay.className = "work-image-zoom-overlay";

    /* 元画像を複製 */
    const zoomedImage = image.cloneNode(true);

    zoomedImage.classList.remove(
        "work-image-zoom",
        "is-open",
        "is-visible",
        "is-active",
        "fade-up"
    );

    zoomedImage.classList.add("work-image-zoomed");

   /* WORK03専用クラス */
if (
    image.classList.contains("work03-image06") ||
    image.classList.contains("work03-image03")
) {
    zoomedImage.classList.add("work03-zoomed");
}

    /* 元画像の配置・アニメーションの影響を解除 */
Object.assign(zoomedImage.style, {
    position: "static",
    left: "auto",
    top: "auto",
    right: "auto",
    bottom: "auto",
    width: "auto",
    height: "auto",
    maxWidth: "95vw",
    maxHeight: "95vh",
    margin: "0 auto",
    opacity: "1",
    transform: "none",
    animation: "none",
    clipPath: "none",
    objectFit: "contain"
});

/* =========================================
   WORK03専用：縦長画像の拡大設定
========================================= */

if (
    image.classList.contains("work03-image03") ||
    image.classList.contains("work03-image06")
) {
    zoomedImage.style.width = "95vw";
    zoomedImage.style.height = "auto";
    zoomedImage.style.maxWidth = "95vw";
    zoomedImage.style.maxHeight = "none";
}

    overlay.appendChild(zoomedImage);
    document.body.appendChild(overlay);

    /* 背景をクリックして閉じる */
    overlay.addEventListener("click", function () {
        overlay.remove();
    });

});

