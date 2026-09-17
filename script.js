/* =========================================
   ローディング処理
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const bootScreen =
        document.getElementById("boot-screen");

    const loadingBar =
        document.getElementById("loading-bar");

    const loadingScreen =
        document.getElementById("loading-screen");


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
       タイピング設定
    ===================================== */

    const typingSpeed = 45;
    const lineDelay = 250;


    /* =====================================
       1行をタイピング
    ===================================== */

    function typeLine(element, text) {

        return new Promise(function (resolve) {

            let index = 0;

            function typeCharacter() {

                if (index < text.length) {

                    element.textContent += text.charAt(index);

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
       起動画面を開始
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
           起動画面終了
        ================================= */

        bootScreen.style.opacity = "0";


        setTimeout(function () {

            bootScreen.style.display = "none";

            /*
             * ロードバー表示
             */

            loadingBar.classList.add("is-visible");

        }, 600);

    }


    /* =====================================
       開始
    ===================================== */

    startBootSequence();

});
