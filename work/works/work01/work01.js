/* =========================================
   WORK01 レスポンシブ設定

   基準キャンバス：
   1280 × 650px
========================================= */

const visualArea =
    document.querySelector(".visual-area");


const canvasWidth = 1280;
const canvasHeight = 650;


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


resizeWorkDetail();


window.addEventListener(
    "resize",
    resizeWorkDetail
);
