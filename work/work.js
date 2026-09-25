/* =========================================
   WORK メインビジュアル
   1280 × 650px キャンバスを
   画面サイズに合わせてレスポンシブ縮小
========================================= */

const visualArea = document.querySelector(".visual-area");


/* =========================================
   キャンバスサイズ
========================================= */

const canvasWidth = 1280;
const canvasHeight = 650;


/* =========================================
   レスポンシブ倍率を計算
========================================= */

function resizeWorkCanvas() {

    const scaleX = window.innerWidth / canvasWidth;
    const scaleY = window.innerHeight / canvasHeight;

    const scale = Math.min(scaleX, scaleY);


    /* =====================================
       1280 × 650 キャンバス全体を縮小
    ===================================== */

    visualArea.style.transform =
        `translate(-50%, -50%) scale(${scale})`;

}


/* =========================================
   初回実行
========================================= */

resizeWorkCanvas();


/* =========================================
   ブラウザサイズ変更時
========================================= */

window.addEventListener(
    "resize",
    resizeWorkCanvas
);

