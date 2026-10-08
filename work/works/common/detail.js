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
========================================= */

function typingAnimation(element, speed = 50) {

    const originalHTML = element.innerHTML;

    element.innerHTML = "";

    let index = 0;

    function typeNext() {

        if (index >= originalHTML.length) {
            element.innerHTML = originalHTML;
            return;
        }

        if (originalHTML.substring(index, index + 4) === "<br>") {

            element.innerHTML += "<br>";

            index += 4;

        } else {

            element.innerHTML +=
                originalHTML.charAt(index);

            index++;

        }

        setTimeout(typeNext, speed);
    }

    typeNext();
}


/* =========================================
   3種類のテキストを順番に開始
========================================= */

requestAnimationFrame(function () {

    requestAnimationFrame(function () {

        const headingLarge =
            document.querySelector(
                ".work01-heading-large"
            );

        const headingSmall =
            document.querySelector(
                ".work01-heading-small"
            );

        const body =
            document.querySelector(
                ".work01-body"
            );


        if (headingLarge) {
            typingAnimation(
                headingLarge,
                50
            );
        }

        if (headingSmall) {
            typingAnimation(
                headingSmall,
                50
            );
        }

        if (body) {
            typingAnimation(
                body,
                50
            );
        }

    });

});
