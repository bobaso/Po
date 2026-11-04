/* =========================================
   WORK05 基本設定
========================================= */

const workData = {

    /* 使用テンプレート */
    template: "short-text",

    /* メインビジュアル */
    mainVisual: "../images/works-main-visual.png",

    /* short-textテンプレート用設定 */
    image: "../images/work05-01.png",

    title: "NFCステッカー展示用デザイン",

    data: "2026/04/4-2026/04/07",

    category: "イラスト",

    equipment: "Adobe Illustrator",

    material: "アートタック",

    description: `
        <br><br>ペーパーサミット2026の展示用製品で<br>
        NFCステッカーのデザインを担当しました。<br>
        NFCステッカーとはNFCという小型の無線通信技術で、<br>
        NFCが入ったタグをステッカーに内蔵し、ウェブサイトなどの<br>
        リンクにアクセスしてもらう、ノベルティ制作業務の<br>
        一環で展示用製品を作成しました。<br>
        <br>
        また、飲食店事業者向けにGoogleサイトで制作した<br>
        ホームページ風デモンストレーションサイトを作成して<br>
        任意のサイトURLへの誘導方法やNFCの使い方など<br>
        具体的な活用方法をイメージしてもらいやすいように<br>
        展示しました。
    `,

    /* 外部サイトへのリンクボタン */
    content: `

        <!-- 外部サイトへのリンクボタン -->
        <a
            href="https://sites.google.com/view/umaki-test001/%E3%83%9B%E3%83%BC%E3%83%A0"
            target="_blank"
            rel="noopener noreferrer"
            class="work05-button-link">

            <!-- 下で動く画像 -->
            <span class="work05-button-window">
                <img
                    src="../images/work05-03.png"
                    alt=""
                    class="work05-button-animation">
            </span>

            <!-- 上に重ねるボタン画像 -->
            <img
                src="../images/work05-02.png"
                alt=""
                class="work05-button">

        </a>

    `
};
