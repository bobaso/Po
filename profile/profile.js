/* =========================================
   PROFILE
========================================= */

const visualArea =
    document.querySelector(".visual-area");


const canvasWidth = 1440;
const canvasHeight = 675;


function resizeProfileCanvas() {

    const scaleX =
        window.innerWidth / canvasWidth;

    const scaleY =
        window.innerHeight / canvasHeight;

    const scale =
        Math.min(scaleX, scaleY);


    visualArea.style.transform =
        `translate(-50%, -50%) scale(${scale})`;

}


resizeProfileCanvas();


window.addEventListener(
    "resize",
    resizeProfileCanvas
);
