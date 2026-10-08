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

             <div class="work-content">

            ${workData.content}

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

        /* 最初から文字を非表示 */

        element.style.visibility =
            "hidden";

        /* 一度だけ中身を保存して空にする */

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
    });

});
