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

const loadingText =
    document.getElementById("loading-text");

const progressFill =
    document.getElementById("progress-fill");

const mainVisual =
    document.querySelector(".main-visual");


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

    const typingSpeed = 30;

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


    /* =============================
       ローディング画面を終了
    ============================= */

    loadingScreen.style.display = "none";


    /* =============================
       メインビジュアルを表示
    ============================= */

    mainVisual.classList.add(
        "is-visible"
    );


    console.log(
        "LOADING COMPLETE"
    );

}

            }, 20);

    }


    /* =====================================
       起動画面
    ===================================== */

    async function startBootSequence() {

        for (
            let i = 0;
            i < bootLines.length;
            i++
        ) {

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
       起動
    ===================================== */

    startBootSequence();

});
