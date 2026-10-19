
/* =========================================
   HOW TO MAKE
   レスポンシブ処理
========================================= */

const makeVisualArea =
    document.querySelector(".make-visual-area");

const makeMainVisual =
    document.querySelector(".make-main-visual");

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

       
/* =========================================
   MAKEページ内オブジェクト・ボタン
========================================= */

const makeVisualAreaElement =
    document.querySelector(".make-visual-area");


makeVisualAreaElement.insertAdjacentHTML(
    "beforeend",
    `
    <!-- HOME -->
    <a href="../HOME/?skipLoading=1"
       class="make-home-link">
        <img
            src="../images/home-bottom.png"
            alt="HOME"
            class="make-home-bottom">
    </a>

    <!-- PROFILE -->
    <a href="../profile/profile.html"
       class="make-profile-link">
        <img
            src="../images/profile-bottom.png"
            alt="PROFILE"
            class="make-profile-bottom">
    </a>

    <!-- オブジェクト01 -->
    <img
        src="../images/images-object01.png"
        alt=""
        class="make-object01">

    <!-- WORKボタン -->
    <a href="../work/work.html"
       class="make-button01-link">
        <img
            src="../images/images-button01.png"
            alt="WORK"
            class="make-button01">
    </a>

    <!-- PROFILEボタン -->
    <a href="../profile/profile.html"
       class="make-button02-link">
        <img
            src="../images/images-button02.png"
            alt="PROFILE"
            class="make-button02">
    </a>

    <!-- オブジェクト04 -->
    <img
        src="../images/images-object04.png"
        alt=""
        class="make-object04">
    `
);

    });

});

