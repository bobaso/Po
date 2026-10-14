/* =========================================
   共通HTML
========================================= */

const workDetail =
    document.getElementById("work-detail");

workDetail.innerHTML = `
/* =========================================
   Back to list
   作品本文の最下部に自動配置
========================================= */

function updateBackToListPosition() {

    const workContent =
        document.querySelector(".work-content");

    const workScrollArea =
        document.querySelector(".work-scroll-area");

    const backToListArea =
        document.querySelector(".back-to-list-area");

    if (
        !workContent ||
        !workScrollArea ||
        !backToListArea
    ) {
        return;
    }

    const contentRect =
        workContent.getBoundingClientRect();

    let maxBottom = 0;

    const elements =
        workContent.querySelectorAll("*");

    elements.forEach(function (element) {

        // Back to list 自体は計算対象外
        if (
            element === backToListArea ||
            backToListArea.contains(element)
        ) {
            return;
        }

        const rect =
            element.getBoundingClientRect();

        // 画面上の位置をスクロール前の座標に変換
        const bottom =
            rect.bottom -
            contentRect.top +
            workScrollArea.scrollTop;

        maxBottom = Math.max(
            maxBottom,
            bottom
        );

    });

    // 最後の作品要素から30px空ける
    const gap = 30;

    const backTop =
        maxBottom + gap;

    backToListArea.style.top =
        backTop + "px";

    // Back to list までスクロールできる高さを確保
    const requiredHeight =
        backTop +
        backToListArea.offsetHeight +
        30;

    workContent.style.minHeight =
        requiredHeight + "px";
}


/* =========================================
   初期表示・画像読み込み後・画面サイズ変更時
========================================= */

// 初期表示
requestAnimationFrame(function () {
    updateBackToListPosition();
});

// 画像読み込み完了後
document.querySelectorAll(".work-content img")
    .forEach(function (img) {

        if (!img.complete) {

            img.addEventListener(
                "load",
                updateBackToListPosition,
                { once: true }
            );

            img.addEventListener(
                "error",
                updateBackToListPosition,
                { once: true }
            );

        }

    });

// 画面サイズ変更時
window.addEventListener(
    "resize",
    updateBackToListPosition
);
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

<div class="work-content">

    ${workData.content}

    <!-- Back to list -->
    <div class="back-to-list-area">
        <a
            href="https://bobaso.github.io/Po/work/work.html"
            class="back-to-list">
            Back to list
        </a>
    </div>

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
/* =========================================
   work01専用アニメーションの初期化
========================================= */

if (
    typeof initWork01ImageAnimation === "function"
) {
    initWork01ImageAnimation();
}


const canvasWidth = 1280;
const canvasHeight = 650;


/* =========================================
   画面サイズに合わせて縮小
========================================= */

function resizeWorkDetail() {

    const scaleX =
        window.innerWidth / canvasWidth;

    const scaleY =
        window.innerHeight / canvasHeight;

    const scale =
        Math.min(scaleX, scaleY) * 0.90;

    visualArea.style.transform =
        `translate(-50%, -50%) scale(${scale})`;
}


/* =========================================
   初期表示
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

        mainVisual.classList.add(
            "is-visible"
        );

    });

});
/* =========================================
   テキスト タイピングアニメーション
   上から順番に表示
========================================= */

function typingAnimation(element, speed = 50) {

    return new Promise(function (resolve) {

        const originalHTML =
            element.innerHTML;

        /* 文字を空にする */

        element.innerHTML = "";

        /* タイピング開始 */

        element.style.visibility =
            "visible";

        let index = 0;

        function typeNext() {

            if (index >= originalHTML.length) {

                resolve();

                return;
            }

            if (
                originalHTML.substring(
                    index,
                    index + 4
                ) === "<br>"
            ) {

                element.innerHTML += "<br>";

                index += 4;

            } else {

                element.innerHTML +=
                    originalHTML.charAt(index);

                index++;

            }

            setTimeout(
                typeNext,
                speed
            );
        }

        typeNext();

    });
}


/* =========================================
   テキスト タイピングアニメーション
   各文章ごとに独立して表示
========================================= */

function typingAnimation(element, speed = 15) {

    return new Promise(function (resolve) {

        const originalHTML = element.innerHTML;

        element.innerHTML = "";
        element.style.visibility = "visible";

        let index = 0;

        function typeNext() {

            if (index >= originalHTML.length) {
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

            setTimeout(typeNext, speed);
        }

        typeNext();
    });
}


/* =========================================
   各文章のタイピングを個別に開始
========================================= */

requestAnimationFrame(function () {

    const typingTexts = document.querySelectorAll(".typing-text");

    typingTexts.forEach(function (element, index) {

        /* 文章ごとに開始時間をずらす */
        setTimeout(function () {
            typingAnimation(element, 15);
        }, index * 300);

    });

});
