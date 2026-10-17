
const workData = {

    // 共通メインビジュアル
    mainVisual:
        "../images/works-main-visual.png",

    // work02のコンテンツ
content: `
  <img
            src="../images/work02-01.png"
            alt=""
            class="work02-image01">

       <div class="work-heading-large work02-heading-large typing-text">
    恐竜知育パズル
       </div>

       <div class="work-heading-small work02-heading-small typing-text">
    DATA.2026/04/03-2026/04/25<br>
    CATEGORY.プロダクトデザイン<br>
    EQUIPMENT.カッティングプロッター<br>オンデマンドプリンター<br>
    MATERIAL.サンカード18.5<br>アートリピール、マットPP
    </div>
        
 <div class="work-body work02-body typing-text">
ペーパーサミット2026に出展し、物販用の商品開発<br>
およびパッケージデザインを行いました。
</div>

    <!-- 画像02・画像06 切り替え表示 -->
<img
    src="../images/work02-02.png"
    alt=""
    class="work02-image02 work02-switch-image work02-switch-image01">

<img
    src="../images/work02-06.png"
    alt=""
    class="work02-switch-image work02-switch-image02">

<!-- 画像03 -->
<img
    src="../images/work02-03.png"
    alt=""
    class="work02-image03">
    
<div class="work-heading-small work02-heading-small-research typing-text">
    BACKGROUND
</div>

<div class="work-body work02-body-research">
    背景
</div>

<div class="work-body work02-body-description">
    ペーパーサミット2026の出展に向けて<br>
    シールパズルを製作したいという指示を受けて開発しました。
    <br>
    <br>シールパズルとは？<br><br>
    台紙に書かれた番号の順に指定されたシールを貼っていき、<br>
    １つの絵を完成させる知育玩具です。<br>
    指先を使うことで脳が刺激を受ける為、知育にも良いと学研にも認められ<br>
    動物やのりもの、キャラクターものなど子供向けの商品から<br>
    有名な名画や美しい風景など大人も楽しめる複雑なパズルもあり<br>
    老若男女に幅広く人気の高い商品だと言えます。
</div>

        <div class="work-heading-small work01-heading-small-process typing-text">
    PROCESS
</div>

<!-- 制作過程の本文 -->
<div class="work-body work02-body-process-description">
    制作過程
</div>

<div class="work-heading-small work02-heading-small-concept typing-text">
    CONCEPT/EVIDENCE
</div>
<!-- コンセプト/エビデンス -->
<div class="work-body work02-body-concept">
    コンセプト/エビデンス
</div>
<!-- 説明テキスト -->
<div class="work-body work02-body-concept-text">
    ペーパーサミットにはファミリー層が多く<br>
    来場されると聞いたので、来場する子供をターゲットに<br>
    物販用の商品展開には、近年特に人気が高まりつつある<br>
    恐竜をモチーフに加えることにしました。<br>
    <br>
    「恐竜」は昔から人気が衰えることの<br>
    ないジャンルだと思われがちですが<br>
    近年の福井県立恐竜博物館のリニューアル、<br>
    それに伴い北陸新幹線の福井県内開業、<br>
    「ジュラシック・ワールド復活の大地」は<br>
    公開3日間で興行収入約11.33億円を記録するなど<br>
    2024年頃から確実にブームの追い風が吹きつつあるジャンルと言えます。
</div>

<!-- 画像04 -->
<img
    src="../images/work02-04.png"
    alt=""
    class="work02-image04 fade-up">

<!-- 画像05 -->
<img
    src="../images/work02-05.png"
    alt=""
    class="work02-image05 fade-up">

<!-- SPECIFICATION -->
<div class="work-heading-small work02-heading-small-specification typing-text">
    SPECIFICATION
</div>

<!-- 仕様 / こだわり -->
<div class="work-body work02-body-specification">
    仕様/こだわり
</div>

    `

};

/* =========================================
   work02専用
   製作過程の長方形をフェードイン
========================================= */

function initWork02ProcessAnimation() {

    const workScrollArea =
        document.querySelector(".work-scroll-area");

    if (!workScrollArea) return;

    const processRectangles = document.querySelectorAll(
        ".work02-process-rectangle, " +
        ".work02-process-rectangle02"
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
