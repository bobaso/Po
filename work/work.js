
/* =========================================
   WORK レスポンシブ設定

   基準キャンバス：
   1280 × 650px

   1280 × 650 の座標は変更せず、
   キャンバス全体だけを縮小する
========================================= */

const visualArea =
    document.querySelector(".visual-area");


/* =========================================
   基準サイズ
========================================= */

const canvasWidth = 1280;
const canvasHeight = 650;


/* =========================================
   WORK全体をレスポンシブ表示
========================================= */

function resizeWorkCanvas() {

    /* -------------------------------------
       画面に対して何倍で表示できるか計算
    ------------------------------------- */

    const scaleX =
        window.innerWidth / canvasWidth;

    const scaleY =
        window.innerHeight / canvasHeight;


    /* -------------------------------------
       小さい方の倍率を採用

       → 横・縦どちらも画面内に収まる
    ------------------------------------- */

const scale =
    Math.min(scaleX, scaleY) * 0.90;


    /* -------------------------------------
       1280 × 650 の中央を基準に縮小
    ------------------------------------- */

    visualArea.style.transform =
        `translate(-50%, -50%) scale(${scale})`;

    visualArea.style.transformOrigin =
        "center center";

}


/* =========================================
   初回実行
========================================= */

resizeWorkCanvas();


/* =========================================
   ウィンドウサイズ変更時
========================================= */

window.addEventListener(
    "resize",
    resizeWorkCanvas
);

/* =========================================
   作品データ
========================================= */

const works = [

    {
        title: "作品01",
        image: "../images/work-test01.png",
        category: "product"
    },

    {
        title: "作品02",
        image: "../images/work-test02.png",
        category: "product"
    },

    {
        title: "作品03",
        image: "../images/work-test03.png",
        category: "web"
    },

    {
        title: "作品04",
        image: "../images/work-test04.png",
        category: "web"
    },

    {
        title: "作品05",
        image: "../images/work-test05.png",
        category: "event"
    },

    {
        title: "作品06",
        image: "../images/work-test01.png",
        category: "event"
    },

    {
        title: "作品07",
        image: "../images/work-test02.png",
        category: "illust"
    },

    {
        title: "作品08",
        image: "../images/work-test03.png",
        category: "illust"
    },

    {
        title: "作品09",
        image: "../images/work-test04.png",
        category: "product"
    },

    {
        title: "作品10",
        image: "../images/work-test05.png",
        category: "product"
    },

    {
        title: "作品11",
        image: "../images/work-test01.png",
        category: "web"
    },

    {
        title: "作品12",
        image: "../images/work-test02.png",
        category: "web"
    },

    {
        title: "作品13",
        image: "../images/work-test03.png",
        category: "event"
    },

    {
        title: "作品14",
        image: "../images/work-test04.png",
        category: "illust"
    },

    {
        title: "作品15",
        image: "../images/work-test05.png",
        category: "illust"
    }

];
/* =========================================
   作品一覧表示
========================================= */

const worksList =
    document.querySelector(".works-list");


function displayWorks(workData) {

    worksList.innerHTML = "";


    workData.forEach((work) => {

        const workItem =
            document.createElement("div");

        workItem.className =
            "work-item";


        const image =
            document.createElement("img");

        image.src = work.image;
        image.alt = work.title;

        image.className =
            "work-item-image";


        const title =
            document.createElement("div");

        title.textContent =
            work.title;

        title.className =
            "work-item-title";


        workItem.appendChild(image);
        workItem.appendChild(title);

        worksList.appendChild(workItem);

    });

}

displayWorks(works);
