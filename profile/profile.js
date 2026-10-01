/* =========================================
   PROFILE 画面
   レスポンシブ処理
========================================= */

const profilePages =
    document.querySelectorAll(".profile-page");

const canvasWidth = 1440;
const canvasHeight = 675;

let currentPage = 0;

let isScrolling = false;


/* =========================================
   画面サイズに合わせて縮尺変更
========================================= */

function resizeProfilePages() {

    const scaleX =
        window.innerWidth / canvasWidth;

    const scaleY =
        window.innerHeight / canvasHeight;

    const scale =
        Math.min(scaleX, scaleY);


    profilePages.forEach((page, index) => {

const moveY =
    (index - currentPage) *
    window.innerHeight;

page.style.transform =
    `translateY(${moveY}px) scale(${scale})`;

page.style.transformOrigin =
    "center center";

    });

}


/* =========================================
   初期表示
========================================= */

resizeProfilePages();

/* =========================================
   メインビジュアル カットイン
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
   画面切り替え
========================================= */

function changeProfilePage(direction) {

    if (isScrolling) {
        return;
    }

    const nextPage =
        currentPage + direction;

    if (
        nextPage < 0 ||
        nextPage >= profilePages.length
    ) {
        return;
    }

    isScrolling = true;

    currentPage = nextPage;

    resizeProfilePages();


/* =========================================
   PROFILE 画面2
   パラメータバー開始
========================================= */

if (currentPage === 1) {

    const parameterFills =
        document.querySelectorAll(
            ".profile-page02-parameter-fill"
        );

    const parameterWidths = [
        "292px",
        "223px",
        "81px",
        "171px"
    ];


    parameterFills.forEach(
        (parameterFill, index) => {

            /* アニメーションを一旦停止 */

            parameterFill.style.transition =
                "none";


            /* 0pxへリセット */

            parameterFill.style.width =
                "0px";


            /* リセットを反映 */

            parameterFill.offsetWidth;


            /* アニメーションを再設定 */

            parameterFill.style.transition =
                "width 1.5s ease";


            /* 指定位置まで伸ばす */

            parameterFill.style.width =
                parameterWidths[index];

        }
    );

}


    setTimeout(() => {
        isScrolling = false;
    }, 500);
}

/* =========================================
   マウスホイール
========================================= */

window.addEventListener(
    "wheel",
    (event) => {

        if (event.deltaY > 0) {

            /* 下方向 */

            if (currentPage === 0) {

                /* 画面1 → 画面2 */

                changeProfilePage(1);

            } else if (currentPage === 1) {

                /* 画面2 → 画面1 */

                changeProfilePage(-1);

            }

        }

    },
    {
        passive: true
    }
);


/* =========================================
   ウィンドウサイズ変更
========================================= */

window.addEventListener(
    "resize",
    resizeProfilePages
);
