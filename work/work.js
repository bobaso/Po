
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
        category: "product",
        link: "works/work01.html"
    },

    {
        title: "作品02",
        image: "../images/work-test02.png",
        category: "product",
        link: "works/work02.html"
    },

    {
        title: "作品03",
        image: "../images/work-test03.png",
        category: "web",
        link: "works/work03.html"
    },

    {
        title: "作品04",
        image: "../images/work-test04.png",
        category: "web",
        link: "works/work04.html"
    },

    {
        title: "作品05",
        image: "../images/work-test05.png",
        category: "event",
        link: "works/work05.html"
    },

    {
        title: "作品06",
        image: "../images/work-test01.png",
        category: "event",
        link: "works/work06.html"
    },

    {
        title: "作品07",
        image: "../images/work-test02.png",
        category: "illust",
        link: "works/work07.html"
    },

    {
        title: "作品08",
        image: "../images/work-test03.png",
        category: "illust",
        link: "works/work08.html"
    },

    {
        title: "作品09",
        image: "../images/work-test04.png",
        category: "product",
        link: "works/work09.html"
    },

    {
        title: "作品10",
        image: "../images/work-test05.png",
        category: "product",
        link: "works/work10.html"
    },

    {
        title: "作品11",
        image: "../images/work-test01.png",
        category: "web",
        link: "works/work11.html"
    },

    {
        title: "作品12",
        image: "../images/work-test02.png",
        category: "web",
        link: "works/work12.html"
    },

    {
        title: "作品13",
        image: "../images/work-test03.png",
        category: "event",
        link: "works/work13.html"
    },

    {
        title: "作品14",
        image: "../images/work-test04.png",
        category: "illust",
        link: "works/work14.html"
    },

    {
        title: "作品15",
        image: "../images/work-test05.png",
        category: "illust",
        link: "works/work15.html"
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
