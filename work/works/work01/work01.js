const workData = {

    mainVisual:
        "../images/works-main-visual.png",

    content: `

        <img
            src="../images/work01-01.png"
            alt=""
            class="work01-image01">

        <div class="work01-heading-large typing-text">
            ペーパーサミット ディスプレイデザイン
        </div>

        <div class="work01-heading-small typing-text">
            DATA.2026/04/02-2026/04/30<br>
            CATEGORY.展示設計デザイン<br>
            EQUIPMENT.大型プリンター<br>
            MATERIAL.プラダン、スチレンボード
        </div>
        
       <div class="work01-body typing-text">
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

    <div class="work01-heading-small work01-heading-small-research typing-text">
    ISSUE/RESEARCH
</div>

<div class="work01-body work01-body-research">
    課題とリサーチ
</div>

<div class="work01-body work01-body-description">
    ペーパーサミットとは、全国の印刷会社が製作した
    <br>オリジナル商品やアートなどを一般の人に触れてもらうことで、
    <br>より印刷の魅力を知ってもらうというコンセプトのイベントです。
</div>

<div class="work01-body work01-body-purpose typing-text">
              本イベントの企業としての目的は、
     <br>NFCを一般の人により多く知ってもらう事でした。
 </div>

<div class="work01-body work01-body-goal typing-text">
              そこで目を引くようなディスプレイを製作して、
 <br>より多くの来場者に人気商品やNFCなどに興味を持ってもらえる<br>ようにすることを目標に製作しました。
</div>

<div class="work01-heading-small work01-heading-small-process typing-text">
    PROCESS
</div>

<div class="work01-body work01-body-process typing-text">
    製作過程
</div>

<div class="work01-process-rectangle">

<img src="../images/work01-06.png" alt="" class="work01-process-number">

<div class="work01-heading-small work01-process-description typing-text">
    空間全体をイメージする為<br>
    Adobe Illustratorで見取り図を書き<br>
    デザインを考える。
</div>


    <img src="../images/work01-05.png" alt="" class="work01-image05">

</div>

<img src="../images/work01-11.png" alt="" class="work01-image11">
    `
        
<!-- 製作過程02の親要素 -->
<div class="work01-process-rectangle02">

    <img src="../images/work01-08.png" alt="" class="work01-process-number02">

</div>
 
    `
};


/* =========================================
   work01専用
   ISSUE/RESEARCH表示時に画像02〜04を展開
========================================= */

function initWork01ImageAnimation() {

    const workScrollArea =
        document.querySelector(".work-scroll-area");

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
