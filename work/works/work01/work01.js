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

    `

};


// ISSUE/RESEARCHの文字が表示領域に入ったら画像を展開
const workScrollArea = document.querySelector(".work-scroll-area");
const researchHeading = document.querySelector(".work01-heading-small-research");

let researchAnimationStarted = false;

function checkResearchHeading() {
    if (researchAnimationStarted || !workScrollArea || !researchHeading) {
        return;
    }

    const headingRect = researchHeading.getBoundingClientRect();
    const scrollRect = workScrollArea.getBoundingClientRect();

    // スクロール領域内にISSUE/RESEARCHが見え始めたか確認
    if (
        headingRect.bottom > scrollRect.top &&
        headingRect.top < scrollRect.bottom
    ) {
        researchAnimationStarted = true;

        document.querySelector(".work01-image02")?.classList.add("is-open");
        document.querySelector(".work01-image03")?.classList.add("is-open");
        document.querySelector(".work01-image04")?.classList.add("is-open");

        workScrollArea.removeEventListener("scroll", checkResearchHeading);
        window.removeEventListener("resize", checkResearchHeading);
    }
}

if (workScrollArea && researchHeading) {
    workScrollArea.addEventListener("scroll", checkResearchHeading);
    window.addEventListener("resize", checkResearchHeading);

    // 初期表示時にも確認
    requestAnimationFrame(checkResearchHeading);
}
