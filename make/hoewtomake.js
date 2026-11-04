
/* =========================================
   HOW TO MAKE
   レスポンシブ処理
========================================= */

const makeVisualArea =
    document.querySelector(".visual-area");

const makeMainVisual =
    document.querySelector(".main-visual");

const canvasWidth = 1440;
const canvasHeight = 675;


/* =========================================
   画面サイズに合わせて縮尺変更
========================================= */

function resizeMakePage() {

    const scaleX =
        window.innerWidth / canvasWidth;

    const scaleY =
        window.innerHeight / canvasHeight;

    const scale =
        Math.min(scaleX, scaleY);

    makeVisualArea.style.transform =
        `translate(-50%, -50%) scale(${scale})`;
}


/* =========================================
   初期表示
========================================= */

resizeMakePage();


/* =========================================
   ウィンドウサイズ変更時
========================================= */

window.addEventListener(
    "resize",
    resizeMakePage
);


/* =========================================
   メインビジュアル
   左からフェードイン
========================================= */

requestAnimationFrame(function () {

    requestAnimationFrame(function () {

        makeMainVisual.classList.add(
            "is-visible"
        );

    });

});


/* =========================================
   HOW TO MAKE 画像スクロール切り替え
========================================= */

(() => {

    const makeImage =
        document.querySelector(".make-image01");

    const visualArea =
        document.querySelector(".visual-area");

    if (!makeImage || !visualArea) return;


    // 表示する画像
    const images = [
        "../images/make01.png",
        "../images/make02.png",
        "../images/make03.png",
        "../images/make04.png"
    ];

    let currentIndex = 0;
    let scrollTimer = null;
    let isScrolling = false;


    /* =========================================
       画像切り替え共通処理
    ========================================= */

    function changeMakeImage(direction) {

        // 連続操作による高速切り替えを防止
        if (isScrolling) return;

        isScrolling = true;

        if (direction > 0) {
            // 次の画像
            currentIndex =
                (currentIndex + 1) % images.length;

        } else if (direction < 0) {
            // 前の画像
            currentIndex =
                (currentIndex - 1 + images.length) % images.length;
        }

        // メイン画像を切り替え
        makeImage.src = images[currentIndex];


        // 画像ごとのアニメーションを切り替え
        if (currentIndex === 1) {

            showMake02Images();
            hideMake03Images();

        } else if (currentIndex === 2) {

            hideMake02Images();
            showMake03Images();

        } else {

            hideMake02Images();
            hideMake03Images();

        }


        // 450ms後に次の切り替えを許可
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            isScrolling = false;
        }, 450);

    }


    /* =========================================
       PC：マウスホイール操作
    ========================================= */

    window.addEventListener("wheel", (event) => {

        event.preventDefault();

        if (event.deltaY > 0) {

            changeMakeImage(1);

        } else if (event.deltaY < 0) {

            changeMakeImage(-1);

        }

    }, { passive: false });


    /* =========================================
       スマホ：スワイプ操作
    ========================================= */

    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;

    const swipeThreshold = 40;


    // タッチ開始位置を記録
    visualArea.addEventListener("touchstart", (event) => {

        if (event.touches.length !== 1) return;

        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;

        touchMoved = false;

    }, { passive: true });


    // 縦方向のスワイプ時にブラウザの動作を抑制
    visualArea.addEventListener("touchmove", (event) => {

        if (event.touches.length !== 1) return;

        const moveX =
            event.touches[0].clientX - touchStartX;

        const moveY =
            event.touches[0].clientY - touchStartY;

        if (Math.abs(moveY) > Math.abs(moveX)) {

            event.preventDefault();

            if (Math.abs(moveY) > 10) {
                touchMoved = true;
            }

        }

    }, { passive: false });


    // タッチ終了時に画像を切り替え
    visualArea.addEventListener("touchend", (event) => {

        if (!touchMoved) return;

        const touchEndY =
            event.changedTouches[0].clientY;

        const differenceY =
            touchEndY - touchStartY;


        // 一定距離以上のスワイプだけ反応
        if (differenceY > swipeThreshold) {

            // 指を下へ動かす：次の画像
            changeMakeImage(1);

        } else if (differenceY < -swipeThreshold) {

            // 指を上へ動かす：前の画像
            changeMakeImage(-1);

        }

        // スワイプ直後のリンク誤作動を防止
        if (Math.abs(differenceY) > swipeThreshold) {

            const preventClick = (clickEvent) => {
                clickEvent.preventDefault();
                clickEvent.stopPropagation();
                clickEvent.stopImmediatePropagation();
            };

            visualArea.addEventListener(
                "click",
                preventClick,
                { capture: true, once: true }
            );

            setTimeout(() => {
                visualArea.removeEventListener(
                    "click",
                    preventClick,
                    true
                );
            }, 500);

        }

        touchMoved = false;

    }, { passive: true });


    // タッチ操作が途中でキャンセルされた場合
    visualArea.addEventListener("touchcancel", () => {

        touchMoved = false;

    });

})();


/* =========================================
   make02用アニメーション
========================================= */

let make02AnimationTimer = null;
let make02AnimationTimer2 = null;

function showMake02Images() {
    const speechBubble03 = document.querySelector(".make02-image03");
    const image02 = document.querySelector(".make02-image02");
    const speechBubble01 = document.querySelector(".make02-image01");

    if (!speechBubble03 || !image02 || !speechBubble01) return;

    clearTimeout(make02AnimationTimer);
    clearTimeout(make02AnimationTimer2);

    // すべてのアニメーションをリセット
    speechBubble03.classList.remove("is-visible");
    image02.classList.remove("animate-fadeInLeft");
    speechBubble01.classList.remove("is-visible");

    speechBubble03.style.display = "block";
    image02.style.display = "none";
    image02.style.opacity = "0";
    speechBubble01.style.display = "none";

    // ① make02-03.png：吹き出しフェードイン
    void speechBubble03.offsetWidth;

    requestAnimationFrame(() => {
        speechBubble03.classList.add("is-visible");
    });

    // ② make02-02.png：左からフェードイン
    make02AnimationTimer = setTimeout(() => {
        image02.style.display = "block";

        void image02.offsetWidth;

        image02.classList.add("animate-fadeInLeft");

        // ③ make02-01.png：②の終了後に吹き出しフェードイン
        make02AnimationTimer2 = setTimeout(() => {
            speechBubble01.style.display = "block";

            void speechBubble01.offsetWidth;

            requestAnimationFrame(() => {
                speechBubble01.classList.add("is-visible");
            });
        }, 1000);

    }, 1000);
}

function hideMake02Images() {
    const speechBubble03 = document.querySelector(".make02-image03");
    const image02 = document.querySelector(".make02-image02");
    const speechBubble01 = document.querySelector(".make02-image01");

    clearTimeout(make02AnimationTimer);
    clearTimeout(make02AnimationTimer2);

    if (speechBubble03) {
        speechBubble03.classList.remove("is-visible");

        setTimeout(() => {
            if (!speechBubble03.classList.contains("is-visible")) {
                speechBubble03.style.display = "none";
            }
        }, 1000);
    }

    if (image02) {
        image02.classList.remove("animate-fadeInLeft");
        image02.style.display = "none";
        image02.style.opacity = "0";
    }

    if (speechBubble01) {
        speechBubble01.classList.remove("is-visible");
        speechBubble01.style.display = "none";
    }
}

/* =========================================
   make03用アニメーション
========================================= */

let make03AnimationTimer = null;

function showMake03Images() {
    const speechBubble = document.querySelector(".make03-image03");
    const image01 = document.querySelector(".make03-image01");
    const image02 = document.querySelector(".make03-image02");

    if (!speechBubble || !image01 || !image02) {
        console.error("make03用画像が見つかりません");
        return;
    }

    clearTimeout(make03AnimationTimer);

    // 前回のアニメーションをリセット
    speechBubble.classList.remove("is-visible");
    image01.classList.remove("animate-fadeInLeft");
    image02.classList.remove("is-visible");

    speechBubble.style.display = "block";

    image01.style.display = "none";
    image01.style.opacity = "0";

    image02.style.display = "none";
    image02.style.opacity = "0";

    // ① make03-03.png：吹き出しをフェードイン
    void speechBubble.offsetWidth;

    requestAnimationFrame(() => {
        speechBubble.classList.add("is-visible");
    });

    // ② 吹き出しの表示開始から1秒後にmake03-01.pngを表示
    make03AnimationTimer = setTimeout(() => {
        image01.style.display = "block";

        void image01.offsetWidth;

        image01.classList.add("animate-fadeInLeft");

        // ③ make03-01.pngのアニメーション終了後にmake03-02.pngを表示

image01.addEventListener("animationend", function onAnimationEnd(event) {
    if (event.animationName !== "fadeInLeft") return;

    image01.removeEventListener("animationend", onAnimationEnd);

    image02.style.display = "block";

    // JavaScriptで直接指定している透明度0を解除
    image02.style.opacity = "";

    void image02.offsetWidth;

    requestAnimationFrame(() => {
        image02.classList.add("is-visible");
    });
});

    }, 1000);
}

function hideMake03Images() {
    const speechBubble = document.querySelector(".make03-image03");
    const image01 = document.querySelector(".make03-image01");
    const image02 = document.querySelector(".make03-image02");

    clearTimeout(make03AnimationTimer);

    if (speechBubble) {
        speechBubble.classList.remove("is-visible");

        setTimeout(() => {
            if (!speechBubble.classList.contains("is-visible")) {
                speechBubble.style.display = "none";
            }
        }, 1000);
    }

    if (image01) {
        image01.classList.remove("animate-fadeInLeft");
        image01.style.display = "none";
        image01.style.opacity = "0";
    }

    if (image02) {
        image02.classList.remove("is-visible");
        image02.style.display = "none";
        image02.style.opacity = "0";
    }
}
