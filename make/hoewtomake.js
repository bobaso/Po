
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
    const makeImage = document.querySelector(".make-image01");

    if (!makeImage) return;

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

    // スクロールで画像を切り替える
    window.addEventListener("wheel", (event) => {
        event.preventDefault();

        // 連続したホイールイベントによる高速切り替えを防止
        if (!isScrolling) {
            isScrolling = true;

            if (event.deltaY > 0) {
                // 下スクロール：次の画像
                currentIndex = (currentIndex + 1) % images.length;
            } else if (event.deltaY < 0) {
                // 上スクロール：前の画像
                currentIndex =
                    (currentIndex - 1 + images.length) % images.length;
            }

            // メイン画像を切り替え
makeImage.src = images[currentIndex];

// make02のときだけ吹き出しを表示
if (currentIndex === 1) {
    showMake02Images();
} else {
    hideMake02Images();
}
        }

        // スクロール操作が止まってから次の切り替えを許可
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            isScrolling = false;
        }, 450);

    }, { passive: false });
})();

/* =========================================
   make02-03.png 吹き出しフェードイン
========================================= */


let make02AnimationTimer = null;

function showMake02Images() {
    const speechBubble = document.querySelector(".make02-image03");
    const image02 = document.querySelector(".make02-image02");

    if (!speechBubble || !image02) return;

    clearTimeout(make02AnimationTimer);

    // 以前のアニメーションをリセット
    speechBubble.classList.remove("is-visible");
    image02.classList.remove("animate-fadeInLeft");

    speechBubble.style.display = "block";
    image02.style.display = "none";
    image02.style.opacity = "0";

    // 吹き出しをフェードイン
    void speechBubble.offsetWidth;

    requestAnimationFrame(() => {
        speechBubble.classList.add("is-visible");
    });

    // 吹き出しのフェードイン終了後に画像02を表示
    make02AnimationTimer = setTimeout(() => {
        image02.style.display = "block";

        void image02.offsetWidth;

        image02.classList.add("animate-fadeInLeft");
    }, 1000);
}

function hideMake02Images() {
    const speechBubble = document.querySelector(".make02-image03");
    const image02 = document.querySelector(".make02-image02");

    clearTimeout(make02AnimationTimer);

    if (speechBubble) {
        speechBubble.classList.remove("is-visible");

        setTimeout(() => {
            if (!speechBubble.classList.contains("is-visible")) {
                speechBubble.style.display = "none";
            }
        }, 1000);
    }

    if (image02) {
        image02.classList.remove("animate-fadeInLeft");
        image02.style.display = "none";
        image02.style.opacity = "0";
    }
}

