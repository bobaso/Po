```javascript
/* =========================================
   WORK レスポンシブ設定

   基準キャンバス：
   1280 × 650px

   子要素の座標は変更せず、
   キャンバス全体だけを縮小する
========================================= */

const visualArea =
    document.querySelector(".visual-area");

const workCanvas =
    document.querySelector(".work-canvas");


/* =========================================
   基準サイズ
========================================= */

const canvasWidth = 1280;
const canvasHeight = 650;


/* =========================================
   レスポンシブ縮小
========================================= */

function resizeWorkCanvas() {

    const scaleX =
        window.innerWidth / canvasWidth;

    const scaleY =
        window.innerHeight / canvasHeight;

    /*
       横・縦のうち、
       小さい倍率を採用することで
       1280×650全体を画面内に収める
    */

    const scale =
        Math.min(scaleX, scaleY);


    /* =====================================
       1280 × 650キャンバスを中央配置
       ＋ 全体を縮小
    ===================================== */

    workCanvas.style.transform =
        `scale(${scale})`;

    workCanvas.style.transformOrigin =
        "center center";


    /* =====================================
       visual-areaを画面中央に配置
    ===================================== */

    visualArea.style.left = "50%";
    visualArea.style.top = "50%";

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
```
