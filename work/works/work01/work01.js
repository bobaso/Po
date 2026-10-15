const workData = {

    mainVisual:
        "../images/works-main-visual.png",

    content: `

        <img
            src="../images/work01-01.png"
            alt=""
            class="work01-image01">

        <div class="work-heading-large work01-heading-large typing-text">
            ペーパーサミット ディスプレイデザイン
        </div>

        <div class="work-heading-small work01-heading-small typing-text">
            DATA.2026/04/02-2026/04/30<br>
            CATEGORY.展示設計デザイン<br>
            EQUIPMENT.大型プリンター<br>
            MATERIAL.プラダン、スチレンボード
        </div>
        
       <div class="work-body work01-body typing-text">
           ペーパーサミット2026に出展し、展示用什器の設計製作および<br>
           展示物等の総合デザインを担当しました。
      </div>

    <!-- 画像02 -->
    <img
        src="../images/work01-02.png"
        alt=""
        class="work01-image02">

    <!-- 画像03-->
    <img
        src="../images/work01-03.png"
        alt=""
        class="work01-image03">

    <!-- 画像04 -->
    <img
        src="../images/work01-04.png"
        alt=""
        class="work01-image04">

    <div class="work-heading-small work01-heading-small-research typing-text">
    ISSUE/RESEARCH
</div>

<div class="work-body work01-body-research">
    課題とリサーチ
</div>

<div class="work-body work01-body-description">
    ペーパーサミットとは、全国の印刷会社が製作した
    <br>オリジナル商品やアートなどを一般の人に触れてもらうことで、
    <br>より印刷の魅力を知ってもらうというコンセプトのイベントです。
</div>

<div class="work-body work01-body-purpose typing-text">
    本イベントの企業としての目的は、<br>
    また一般的には認知度が低く使い道などが知られていない<br>
    NFCという製品をより多くの人に知ってもらう事でした。
 </div>

<div class="work-body work01-body-goal typing-text">
              そこで目を引くようなディスプレイを製作して、
 <br>より多くの来場者に人気ノベルティ商品やNFCの技術などに興味を
 <br>持ってもらえるようにすることを目標に製作しました。
</div>

<div class="work-body work01-body-nfc-awareness typing-text">
    NFCの知名度の低さ
</div>

<div class="work-body work01-body-text typing-text">
    オサイフケータイやSuicaクレジットカードのタッチ決済など、
    <br>日常的に使用する事の多いNFC技術ですが、
    <br>一般的な認知度は低くKDDIのアンケート調査では
    <br>88%の人がNFCを知らないと回答しました。
    <br>NFC製品でノベルティー製作をしている私たちにとって
    <br>より多くの顧客を獲得する為、NFCに興味を持ってもらい
    <br>知名度を高めていくことが重要だと考えました。
</div>


<!-- 画像1：最背面 -->
<img
    src="../images/work01-13.png"
    alt=""
    class="work01-image13">

<!-- 画像2：中間 -->
<img
    src="../images/work01-14.png"
    alt=""
    class="work01-image14">

<!-- 画像3：最前面 -->
<img
    src="../images/work01-12.png"
    alt=""
    class="work01-image12">

<div class="work-heading-small work01-heading-small-process typing-text">
    PROCESS
</div>

<div class="work-body work01-body-process typing-text">
    製作過程
</div>

<div class="work01-process-rectangle">

<img src="../images/work01-06.png" alt="" class="work01-process-number">

<div class="work-heading-small work01-process-description typing-text">
    空間全体をイメージする為<br>
    Adobe Illustratorで見取り図を書き<br>
    デザインを考える。
</div>


    <img src="../images/work01-05.png" alt="" class="work01-image05">

</div>

<img src="../images/work01-11.png" alt="" class="work01-image11">
   
        

<!-- 製作過程02の親要素 -->
<div class="work01-process-rectangle02">

    <!-- 番号画像 -->
    <img
        src="../images/work01-08.png"
        alt=""
        class="work01-process-number02">

    <!-- 説明文 -->
    <div class="work-heading-small work01-process-description02 typing-text">
        見取り図を元に購入した<br>プラダンに合わせて割図を考える
    </div>

    <!-- 製作画像 -->
    <img
        src="../images/work01-07.png"
        alt=""
        class="work01-image07">

</div>

<!-- 親要素の外側に配置する画像 -->
<img
    src="../images/work01-11.png"
    alt=""
    class="work01-image11-bottom">



<!-- 製作過程03の親要素 -->
<div class="work01-process-rectangle03">

    <!-- 画像 work01-10.png -->
    <img
        src="../images/work01-10.png"
        alt=""
        class="work01-image10">

<!-- 画像 work01-09.png -->
<img
    src="../images/work01-09.png"
    alt=""
    class="work01-image09">

<!-- 製作過程03の説明文 -->
<div class="work-heading-small work01-process-description03 typing-text">
    割図の寸法通りに<br>プラダンを切って製作組み立てます。
</div>

</div>

    `
};


/* =========================================
   work01専用
   ISSUE/RESEARCH表示時に画像02〜04を展開
========================================= */

function initWork01ImageAnimation() {

  initWork01ProcessAnimation();
    
    const workScrollArea =
        document.querySelector(".work-scroll-area");

    /* =========================================
       円グラフ：見え始めたら時計回りに表示
    ========================================= */

    const chartImage =
        document.querySelector(".work01-image13");

    if (workScrollArea && chartImage) {

        const chartObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        
chartImage.classList.add(
    "is-chart-animating"
);


                        // 一度開始したら再実行しない
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                root: workScrollArea,
                threshold: 0
            }
        );

        chartObserver.observe(chartImage);
    }

    const researchHeading =
        document.querySelector(".work01-heading-small-research");

    if (!workScrollArea || !researchHeading) {
        return;
    }

    let animationStarted = false;

    function checkResearchHeading() {

        if (animationStarted) return;

        const headingRect =
            researchHeading.getBoundingClientRect();

        const scrollRect =
            workScrollArea.getBoundingClientRect();

        if (
            headingRect.bottom > scrollRect.top &&
            headingRect.top < scrollRect.top + 100
        ) {

            animationStarted = true;

            document.querySelector(".work01-image02")
                ?.classList.add("is-open");

            document.querySelector(".work01-image03")
                ?.classList.add("is-open");

            document.querySelector(".work01-image04")
                ?.classList.add("is-open");

            workScrollArea.removeEventListener(
                "scroll",
                checkResearchHeading
            );
        }
    }

    workScrollArea.addEventListener(
        "scroll",
        checkResearchHeading
    );

    requestAnimationFrame(checkResearchHeading);
}

/* =========================================
   work01専用
   製作過程01〜03のフェードイン
========================================= */

function initWork01ProcessAnimation() {

    const workScrollArea =
        document.querySelector(".work-scroll-area");

    if (!workScrollArea) return;

    const processRectangles = document.querySelectorAll(
        ".work01-process-rectangle, " +
        ".work01-process-rectangle02, " +
        ".work01-process-rectangle03"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    // 一度表示したら再アニメーションしない
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            root: workScrollArea,
            threshold: 0.15
        }
    );

    processRectangles.forEach((rectangle) => {
        observer.observe(rectangle);
    });
}
