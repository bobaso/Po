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


    console.log("bootScreen:", bootScreen);
    console.log("loadingBar:", loadingBar);


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

    const typingSpeed = 45;

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
       起動画面
    ===================================== */

    async function startBootSequence() {

        for (let i = 0; i < bootLines.length; i++) {

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

loadingScreen.classList.add(
    "is-background"
);

        /* =================================
           ロードバーを表示
        ================================= */

        loadingBar.style.display = "block";


        console.log("BOOT COMPLETE");

    }


    /* =====================================
       起動
    ===================================== */

    startBootSequence();

});
