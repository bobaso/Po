
const workData = {

    // 共通メインビジュアル
    mainVisual:
        "../images/works-main-visual.png",

    // work02のコンテンツ
content: `
  <img
    src="../images/work02-01.png"
    alt=""
    class="work02-image01 work-image-zoom">

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

    <img
    src="../images/work02-10.png"
    alt=""
    class="work02-image10">
    
<!-- =========================================
     BACKGROUND
========================================= -->

<div class="work-heading-small work02-heading-small-research typing-text">
    BACKGROUND
</div>

<div class="work-body work02-body-research">
    背景
</div>


<!-- =========================================
     説明文テキストボックス
     この文章の高さを基準に後続要素を移動
========================================= -->

<div class="work-text-flow">

    <div class="work-body work-textbox work02-body-description">
        ペーパーサミット2026の出展に向けて<br>
        自社でシールパズルを制作する目標で開発しました。
        <br>
        <br>シールパズルとは？<br><br>
        台紙に書かれた番号の順に指定されたシールを貼っていき、１つの
        絵を完成させる知育玩具です。指先を使うことで脳が刺激を受ける
        為、知育にも良いと学研にも認められ動物やのりもの、キャラクタ
        ーものなど子供向けの商品から有名な名画や美しい風景など大人も
        楽しめる複雑なパズルもあり、学研が100万部を売り上げたことか
        ら老若男女と幅広い世代に人気の高いシール商品だと言えます。
    </div>

    <!-- =========================================
         ここから後続要素
         テキストボックスが伸びた分だけ移動
    ========================================= -->

    <div class="work-text-flow-content">

        <div class="work-heading-small work01-heading-small-process typing-text">
            PROCESS
        </div>

        <!-- 制作過程の本文 -->
        <div class="work-body work02-body-process-description">
            制作過程
        </div>

        <!-- CONCEPT / EVIDENCE -->
        <div class="work-heading-small work02-heading-small-concept typing-text">
            CONCEPT/EVIDENCE
        </div>

        <div class="work-body work02-body-concept">
            コンセプト/エビデンス
        </div>

        <!-- コンセプト説明 -->
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
            2024年頃から確実にブームの追い風が吹きつつある<br>
            旬のジャンルであることが明らかです。
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

        <!-- 画像07 -->
        <img
            src="../images/work02-07.png"
            alt=""
            class="work02-image07 work-image-zoom">

        <!-- 画像08 -->
        <img
            src="../images/work02-08.png"
            alt=""
            class="work02-image08 work-image-zoom">

        <!-- 画像09 -->
        <img
            src="../images/work02-09.png"
            alt=""
            class="work02-image09 work-image-zoom">

    </div>

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


/* =========================================
   work02専用
   画像07・08・09の展開アニメーション
========================================= */

function initWork02OpenAnimation() {

    const workScrollArea =
        document.querySelector(".work-scroll-area");

    const image07 =
        document.querySelector(".work02-image07");

    const image08 =
        document.querySelector(".work02-image08");

    const image09 =
        document.querySelector(".work02-image09");

    if (!workScrollArea || !image07 || !image08 || !image09) {
        return;
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    // 画像07・08を同時に展開
                    image07.classList.add("is-open");
                    image08.classList.add("is-open");

                    // 画像07・08より0.3秒遅れて画像09を展開
                    setTimeout(function () {
                        image09.classList.add("is-open");
                    }, 300);

                    // 一度開始したら再実行しない
                    observer.unobserve(image07);
                }

            });

        },
        {
            root: workScrollArea,
            threshold: 0
        }
    );

    observer.observe(image07);
}

/* =========================================
   work02専用
   画像03：ゲージアニメーション
========================================= */

function initWork02GaugeAnimation() {

    const workScrollArea =
        document.querySelector(".work-scroll-area");

    const gaugeImage =
        document.querySelector(".work02-image03");

    if (!workScrollArea || !gaugeImage) {
        return;
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    gaugeImage.classList.add("is-gauge-visible");

                    // 一度アニメーションしたら再実行しない
                    observer.unobserve(gaugeImage);
                }

            });

        },
        {
            root: workScrollArea,
            threshold: 0.1
        }
    );

    observer.observe(gaugeImage);
}




