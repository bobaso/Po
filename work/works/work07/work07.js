const workData = {

    // 標準テンプレートを適用
    template: "standard",

    // メインビジュアル
    mainVisual: "../images/works-main-visual.png",

    // 序盤の画像
    image: "../images/work07-01.png",

    // タイトル
    title: "NFCカセット型アクリルキーホルダー",

    // 基本情報
    data: "2026/06/25-2026/07/14",
    category: "プロダクトデザイン",
    equipment: "Github",
    material: "アクリル板3mm",

    // 紹介文
    description: `
スマホでかざすだけで遊べるNFCの新用品を開発デザインしました<br>
NFCを利用してゲームサイトへ誘導しデジタルコンテンツを遊んでもらえる仕組みを作りました
    `,

   
        // 600px以降の独自コンテンツ
    content: `

        <!-- 画像 -->
        <img
            src="../images/work07-02.svg"
            alt=""
            class="work07-image02">

        <!-- 小見出し -->
        <div class="work-heading-small work07-heading-background">
            BACKGROUND
        </div>

        <!-- 本文 -->
        <div class="work-body work07-body01">
            背景
        </div>

        <!-- 本文 -->
        <div class="work-body work07-body02">
            従来のNFC製品はアクリルキーホルダーの見た目（ハード）
            のデザインを凝った物が多く、書き込まれた中身（ソフトウェア）
            については手に取ったユーザーに任意のURLを書き込んでもらうという作りで
            ”相手に使い方を委ねる”という方向性が少し不親切だと感じていました。
            その原因はソフトウェア部分が弱いことが問題であると考え「色々使えて便利ですよ」
            という方向性から、「NFCでこんな使い方もできますよ、これがNFCの技術ですよ」という
            方向性の商品展開をしていきたいと考えました。
        </div>

           <object
            data=""
            data-src="../images/work07-03.svg"
            type="image/svg+xml"
            class="work07-image03">
        </object>

        <!-- NFCとは -->
        <div class="work-heading-small work07-text01">

            NFCとは
        </div>

        <!-- テキスト -->
        <div class="work-body work07-text02">
            NFCタグは情報を読み取る際に使われる直径25mmのタグのこと、
            事前にデータを書き込んでおくことで、
            スマートフォンをかざしてURLを開いたり、アプリの起動などの操作に繋げたりできます。
            NFCタグはスマホから簡単に何度でも情報を書き換えることが可能です。
        </div>

        <!-- 小見出し -->
        <div class="work-heading-small work07-heading-spec">
            仕様とこだわり
        </div>


                <!-- 画像04とボタン -->
        <div class="work07-image04-group work01-process-fade">

            <!-- 親画像 -->
            <img
                src="../images/work07-04.png"
                alt=""
                class="work07-image04">

                        <!-- ボタン05：商品ページ -->
            <a
                href="https://umaki-items.com/products/detail/30"
                target="_blank"
                rel="noopener noreferrer"
                class="work07-button05">

                <img
                    src="../images/work07-05.png"
                    alt="商品ページ">

            </a>

            <!-- ボタン06：Instagram -->
            <a
                href="https://www.instagram.com/p/DcSUYtelHlN/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                class="work07-button06">

                <img
                    src="../images/work07-06.png"
                    alt="Instagram">

            </a>

        </div>

        <!-- 画像05 -->
        <img src="../images/work07-07.png" alt="" class="work07-image07 work01-process-fade">

        <!-- 画像06 -->
        <img src="../images/work07-08.png" alt="" class="work07-image08 work01-process-fade">

    `

};


// =========================================
// WORK07：スクロール量1440pxでSVGアニメーション開始
// =========================================

(() => {

    let animationStarted = false;

    function startWork07Animation() {

        if (animationStarted) return;

        const scrollArea = document.querySelector(".work-scroll-area");

        const svgObject = document.querySelector(".work07-image03");

        if (!scrollArea || !svgObject) return;

        // work-scroll-areaのスクロール量を取得
        if (scrollArea.scrollTop < 1200) return;

        // SVGの読み込み先を取得
        const svgPath = svgObject.getAttribute("data-src");

        if (!svgPath) return;

        // 一度だけSVGを読み込む
        animationStarted = true;

        svgObject.setAttribute("data", svgPath);

    }

    // 実際にスクロールしている要素を監視
    const checkTimer = setInterval(() => {

        const scrollArea = document.querySelector(".work-scroll-area");

        if (!scrollArea) return;

        scrollArea.addEventListener("scroll", startWork07Animation);

        clearInterval(checkTimer);

        // 初期位置も確認
        startWork07Animation();

    }, 100);

})();
