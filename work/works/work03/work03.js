
const workData = {
    // 共通メインビジュアル
    mainVisual: "../images/works-main-visual.png",

    // WORK03の掲載内容
    content: `

       <img
            src="../images/work03-01.png"
            alt=""
            class="work03-image01">

       <div class="work-heading-large work03-heading-large typing-text">
    ECサイトリニューアル
       </div>

       <div class="work-heading-small work03-heading-small typing-text">
    DATA.2026/04/03-2026/04/25<br>
    CATEGORY.Webデザイン<br>
    EQUIPMENT.EC-CUBE4
    MATERIAL.
    </div>

<div class="work-body work03-body typing-text">
BtoB、BtoC向けにノベルティー制作事業を進めていく為<br>
ECサイト内のリデザイン、リニューアルを行いました。
</div>

<div class="work-heading-small work03-heading-small-research typing-text">
    BACKGROUND
</div>

<div class="work-body work03-body-research">
    背景
</div>

<div class="work-body work03-body-description">
    前任者が制作したECサイトを引き継ぎましたが、<br>
    情報が古くなっていた為、ECサイトのリニューアルを行いました。
    その際に同業他社が制作したECサイトを比較し、サイトに不足している情報や<br>
    不親切な設計のUIを見直し、現在の問題を洗い出すことにしました。
    <br>
    <br>課題<br><br>
    旧サイトで特に気になった点は<br>
    ・ECサイトにも関わらずヘッダーに商品カテゴリー一覧がない<br>
    ・文字情報が多く理解しづらい<br>
    ・ホームページを一目見て何を取り扱ってるか分からない<br>
    など、多くの課題を発見しました。<br>
    
</div>

<!-- 画像02：フレーム画像 -->
<img
    src="../images/work03-02.png"
    alt=""
    class="work03-image02">

<!-- 画像03：スクロール表示範囲 -->
<div class="work03-scroll-window">
    <img
        src="../images/work03-03.png"
        alt=""
        class="work03-image03">
</div>

<!-- 画像04 -->
<img
    src="../images/work03-04.png"
    alt=""
    class="work03-image04">

<!-- 画像05 -->
<img
    src="../images/work03-05.png"
    alt=""
    class="work03-image05">


    
<!-- 画像06：画像05の内側でスクロール -->
<div class="work03-scroll-window02">
    <img
        src="../images/work03-06.png"
        alt="拡大表示する画像"
        class="work03-image06"
        onclick="openWork03Image()">
</div>
<!-- 画像06の拡大表示 -->
<div
    id="work03-image-overlay"
    onclick="closeWork03Image()">

    <img
        src="../images/work03-06.png"
        alt="拡大画像"
        class="work03-image-expanded">

</div>
        
<!-- 小見出し：RENEWAL -->
<div class="work-heading-small work03-heading-small-renewal typing-text">
    RENEWAL
</div>

<!-- 本文：リニューアル -->
<div class="work-body work03-body-renewal typing-text">
    リニューアル
</div>

<!-- 本文：テキスト -->
<div class="work-body work03-body-text typing-text">
    サイト全体の文字数を減らし、<br>
    変わりに絵や図などを使って説明することで<br>
    利用者が理解しやすいように配慮しました。<br>
    また、ページのヘッダーにカテゴリー欄を追加したことで、<br>
    UIの改善にも取り組みました。<br>
    そうすることで１ページあたりの情報量を減らして、<br>
    さらに情報が欲しい人向けにトピック欄を作成し<br>
    別ページのリンク先で詳細を語る構造にしました。
</div>

</div>

    `
};

// =========================================
// WORK03 画像06の拡大表示
// =========================================

function openWork03Image() {
    const overlay = document.getElementById("work03-image-overlay");
    if (overlay) {
        overlay.classList.add("is-visible");
    }
}

function closeWork03Image() {
    const overlay = document.getElementById("work03-image-overlay");
    if (overlay) {
        overlay.classList.remove("is-visible");
    }
}

