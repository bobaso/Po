
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
    title: [
        "ペーパーサミット",
        "ディスプレイデザイン"
    ],
    image: "../images/work-test01.png",
    category: "event",
    link: "works/work01/index.html"
    },

    {
        title: "作品02",
        image: "../images/work-test02.png",
        category: "product",
        link: "works/work02/index.html"
    },

    {
        title: "作品03",
        image: "../images/work-test03.png",
        category: "web",
        llink: "works/work03/index.html"
    },

    {
        title: "作品04",
        image: "../images/work-test04.png",
        category: "web",
        link: "works/work04/index.html"
    },

    {
        title: "作品05",
        image: "../images/work-test05.png",
        category: "event",
        link: "works/work05/index.html"
    },

    {
        title: "作品06",
        image: "../images/work-test06.png",
        category: "event",
        link: "works/work06/index.html"
    },

    {
        title: "作品07",
        image: "../images/work-test07.png",
        category: "illust",
        link: "works/work07/index.html"
    },

    {
        title: "作品08",
        image: "../images/work-test08.png",
        category: "illust",
        link: "works/work08/index.html"
    },

    {
        title: "作品09",
        image: "../images/work-test09.png",
        category: "product",
        link: "works/work09/index.html"
    },

    {
        title: "作品10",
        image: "../images/work-test10.png",
        category: "product",
        link: "works/work10/index.html"
    },

    {
        title: "作品11",
        image: "../images/work-test11.png",
        category: "web",
        link: "works/work11/index.html"
    },

    {
        title: "作品12",
        image: "../images/work-test12.png",
        category: "web",
        link: "works/work12/index.html"
    },

    {
        title: "作品13",
        image: "../images/work-test13.png",
        category: "event",
        link: "works/work13/index.html"
    },

    {
        title: "作品14",
        image: "../images/work-test14.png",
        category: "illust",
        link: "works/work14/index.html"
    },

    {
        title: "作品15",
        image: "../images/work-test15.png",
        category: "illust",
        link: "works/work15/index.html"
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

title.className =
    "work-item-title";


/* =========================================
   タイトルを配列ごとに改行して表示
========================================= */

work.title.forEach((line, index) => {

    title.appendChild(
        document.createTextNode(line)
    );


    /* 最後の行以外に改行を入れる */

    if (index < work.title.length - 1) {

        title.appendChild(
            document.createElement("br")
        );

    }

});


const link =
    document.createElement("a");

link.href = work.link;

link.className =
    "work-item-link";


link.appendChild(image);


workItem.appendChild(link);
workItem.appendChild(title);

worksList.appendChild(workItem);

    });

}

displayWorks(works);
/* =========================================
   カテゴリーボタン
========================================= */

const allButton =
    document.querySelector(".all-bottom");

const productButton =
    document.querySelector(".product-bottom");

const webButton =
    document.querySelector(".web-bottom");

const eventButton =
    document.querySelector(".event-bottom");

const illustButton =
    document.querySelector(".illust-bottom");


/* =========================================
   カテゴリー表示
========================================= */

function filterWorks(category) {

    let filteredWorks;


    if (category === "all") {

        filteredWorks = works;

    } else {

        filteredWorks =
            works.filter(
                (work) => work.category === category
            );

    }


    displayWorks(filteredWorks);


    /* スクロール位置を先頭に戻す */

    const worksArea =
        document.querySelector(".works-area");

    worksArea.scrollTop = 0;

}


/* =========================================
   All
========================================= */

allButton.addEventListener(
    "click",
    () => {

        filterWorks("all");

    }
);


/* =========================================
   Product
========================================= */

productButton.addEventListener(
    "click",
    () => {

        filterWorks("product");

    }
);


/* =========================================
   Web
========================================= */

webButton.addEventListener(
    "click",
    () => {

        filterWorks("web");

    }
);


/* =========================================
   Event
========================================= */

eventButton.addEventListener(
    "click",
    () => {

        filterWorks("event");

    }
);


/* =========================================
   Illust
========================================= */

illustButton.addEventListener(
    "click",
    () => {

        filterWorks("illust");

    }
);


const mainVisual =
    document.querySelector(".main-visual");


/* =========================================
   メインビジュアル カットイン
========================================= */

requestAnimationFrame(function () {

    requestAnimationFrame(function () {

        mainVisual.classList.add(
            "is-visible"
        );

    });

});
