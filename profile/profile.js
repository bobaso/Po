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

        const parameterFill =
            document.querySelector(
                ".profile-page02-parameter-fill"
            );

        if (parameterFill) {

            parameterFill.style.width = "0px";

            setTimeout(() => {

                parameterFill.style.width = "292px";

            }, 50);

        }

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

            // 下方向
            changeProfilePage(1);

        } else if (event.deltaY < 0) {

            // 上方向
            changeProfilePage(-1);

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
