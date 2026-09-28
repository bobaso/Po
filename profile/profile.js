/* =========================================
   PROFILE 画面
   レスポンシブ処理
========================================= */

const profilePages =
    document.querySelectorAll(".profile-page");

const canvasWidth = 1440;
const canvasHeight = 675;


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


    profilePages.forEach((page) => {

        page.style.transform =
            `scale(${scale})`;

        page.style.transformOrigin =
            "top center";

    });

}


resizeProfilePages();


window.addEventListener(
    "resize",
    resizeProfilePages
);
/* =========================================
   スクロールによる画面切り替え
========================================= */

let currentPage = 0;

let isScrolling = false;


/* =========================================
   マウスホイール
========================================= */

window.addEventListener(
    "wheel",
    (event) => {

        if (isScrolling) {
            return;
        }


        if (event.deltaY > 0) {

            // 下へ
            if (currentPage < profilePages.length - 1) {

                currentPage++;

            } else {

                return;

            }

        } else {

            // 上へ
            if (currentPage > 0) {

                currentPage--;

            } else {

                return;

            }

        }


        isScrolling = true;


        const page =
            profilePages[currentPage];


        const scaleX =
            window.innerWidth / canvasWidth;

        const scaleY =
            window.innerHeight / canvasHeight;

        const scale =
            Math.min(scaleX, scaleY);


        const moveY =
            currentPage *
            canvasHeight *
            scale;


        window.scrollTo(
            0,
            moveY
        );


        setTimeout(() => {

            isScrolling = false;

        }, 500);

    },
    { passive: true }
);
