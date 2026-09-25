/* =========================================
   ローディング処理
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript START");


    /* =====================================
       HTML要素取得
    ===================================== */

const bootScreen =
    document.getElementById("boot-screen");

const loadingBar =
    document.getElementById("loading-bar");

const loadingScreen =
    document.getElementById("loading-screen");
const loadingSkipButton =
    document.getElementById("loadingSkipButton");
const loadingText =
    document.getElementById("loading-text");

const progressFill =
    document.getElementById("progress-fill");

const mainVisual =
    document.querySelector(".main-visual");

const object03 =
    document.querySelector(".object03");

const object03Terminal =
    document.querySelector(".object03-terminal");

const terminalText =
    document.getElementById("terminal-text");

    console.log("bootScreen:", bootScreen);
    console.log("loadingBar:", loadingBar);
    console.log("loadingScreen:", loadingScreen);


    /* =====================================
       起動画面の文字
    ===================================== */

    const bootLines = [
        "SYSTEM BOOTING...",
        "CHECKING MEMORY...",
        "LOADING SYSTEM FILES...",
        "WELCOME TO UMAKI SYSTEM..."
    ];


    /* =====================================
       タイピング速度
    ===================================== */

    const typingSpeed = 20;

    const lineDelay = 300;


    /* =====================================
       1行タイピング
    ===================================== */

    function typeLine(element, text) {

        return new Promise(function (resolve) {

            let index = 0;


            function typeCharacter() {

                if (index < text.length) {

                    element.textContent +=
                        text.charAt(index);

                    index++;

                    setTimeout(
                        typeCharacter,
                        typingSpeed
                    );

                } else {

                    setTimeout(
                        resolve,
                        lineDelay
                    );

                }

            }


            typeCharacter();

        });

    }

/* =========================================
   object03 MS-DOS風ターミナル
========================================= */

const terminalLines = [
    "C:\\SYSTEM OS> SYSTEM CHECK",
    "C:\\SYSTEM OS> MEMORY CHECK..... OK",
    "C:\\SYSTEM OS> DEVICE CHECK..... OK",
    "C:\\SYSTEM OS> NETWORK.......... OK",
    "C:\\SYSTEM OS> NFC SYSTEM.... READY",
    "C:\\SYSTEM OS> LOADING DATA...",
    "C:\\SYSTEM OS> 001010101101001",
    "C:\\SYSTEM OS> 101101001011010",
    "C:\\SYSTEM OS> 110010110010101",
    "C:\\SYSTEM OS> ACCESS GRANTED",
    "C:\\SYSTEM OS> STARTING SYSTEM..."
];


function startTerminalAnimation() {

    if (!terminalText) {
        return;
    }

    let lineIndex = 0;

    function showNextLine() {

        if (lineIndex >= terminalLines.length) {

            setTimeout(function () {

                terminalText.textContent = "";
                lineIndex = 0;

                showNextLine();

            }, 1000);

            return;
        }

        const line =
            terminalLines[lineIndex];

        let charIndex = 0;

        function typeCharacter() {

            if (charIndex < line.length) {

                terminalText.textContent +=
                    line.charAt(charIndex);

                charIndex++;

                setTimeout(
                    typeCharacter,
                    20
                );

            } else {

                terminalText.textContent += "\n";

                lineIndex++;

                setTimeout(
                    showNextLine,
                    180
                );
            }
        }

        typeCharacter();
    }

    showNextLine();
}
   /* =====================================
   ローディング完了処理
===================================== */

function finishLoading() {

    /* =============================
       ローディング画面を終了
    ============================= */

    loadingScreen.style.display =
        "none";


    /* =============================
       メインビジュアルを表示
    ============================= */

    mainVisual.classList.add(
        "is-visible"
    );

    object03.classList.add(
        "is-visible"
    );

    object03Terminal.classList.add(
        "is-visible"
    );

    startTerminalAnimation();


    /* =============================
       object03を開く
    ============================= */

    setTimeout(function () {

        object03.classList.add(
            "is-open"
        );

    }, 200);


    console.log(
        "LOADING COMPLETE"
    );
}
    /* =====================================
       プログレスバー
    ===================================== */

function startLoadingProgress() {

    let progress = 0;

    const progressInterval =
        setInterval(function () {

            progress += 1;


            /* -----------------------------
               数値表示
            ----------------------------- */

            loadingText.textContent =
                "Loading... " + progress + "%";


            /* -----------------------------
               バーの進行
            ----------------------------- */

            progressFill.style.width =
                progress + "%";


            /* -----------------------------
               100%到達
            ----------------------------- */

            if (progress >= 100) {

                clearInterval(
                    progressInterval
                );

                finishLoading();

            }

        }, 20);

}


    /* =====================================
       起動画面
    ===================================== */

async function startBootSequence() {

    if (isSkipped) {
        return;
    }

    for (
        let i = 0;
        i < bootLines.length;
        i++
    ) {

        if (isSkipped) {
            return;
        }

        const line =
            document.getElementById(
                "line" + (i + 1)
            );

        await typeLine(
            line,
            bootLines[i]
        );

    }


    /* =================================
       起動画面を消す
    ================================= */

    bootScreen.classList.add(
        "is-hidden"
    );


    /* =================================
       背景を表示
    ================================= */

    loadingScreen.classList.add(
        "is-background"
    );


    /* =================================
       ロードバーを表示
    ================================= */

    loadingBar.style.display =
        "block";


    /* =================================
       ロード開始
    ================================= */

    startLoadingProgress();


    console.log(
        "BOOT COMPLETE"
    );

}

/* =====================================
   SKIPボタン
===================================== */

let isSkipped = false;

loadingSkipButton.addEventListener(
    "click",
    function () {

        if (isSkipped) {
            return;
        }

        isSkipped = true;


        /* =============================
           起動画面を即終了
        ============================= */

        bootScreen.classList.add(
            "is-hidden"
        );


        /* =============================
           ロードバーを表示
        ============================= */

        loadingScreen.classList.add(
            "is-background"
        );

        loadingBar.style.display =
            "block";


        /* =============================
           100%へ一気に進める
        ============================= */

        loadingText.textContent =
            "Loading... 100%";

        progressFill.style.width =
            "100%";


        /* =============================
           完了処理
        ============================= */

        finishLoading();

    }
);
    /* =====================================
       起動
    ===================================== */

    startBootSequence();

});
