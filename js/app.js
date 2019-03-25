
(function (window, document, drawModule) {

    // Listen after Easy Mode
    btnEasy.addEventListener("click", function () {
        hardMode = false;

        btnEasy.style.transition = "transform .8s";
        btnEasy.style.transform = "rotate(+360deg)";
        btnEasy.style.boxShadow = "0 12px 15px rgba(0, 0, 0, 0.1)";
        btnEasy.style.border = "2px solid #607D8B";
        btnHard.style.boxShadow = "none";
        btnHard.style.border = "none";

        btnHard.style.transform = "rotate(0)";
        btnClassic.style.transform = "rotate(0)";
        btnDjungel.style.transform = "rotate(0)";
        btnOken.style.transform = "rotate(0)";
        btnAkvarie.style.transform = "rotate(0)";

        btnHard.style.transition = "transform 0s";
        btnClassic.style.transition = "transform 0s";
        btnDjungel.style.transition = "transform 0s";
        btnOken.style.transition = "transform 0s";
        btnAkvarie.style.transition = "transform 0s";

        btnClassic.disabled = false;
        btnDjungel.disabled = false;
        btnOken.disabled = false;
        btnAkvarie.disabled = false;

        btnClassic.style.opacity = '1';
        btnDjungel.style.opacity = '1';
        btnOken.style.opacity = '1';
        btnAkvarie.style.opacity = '1';

        console.log("Hard mode: " + hardMode);
    });

    //Listen for Hard Mode
    btnHard.addEventListener("click", function () {
        btnClassic.disabled = false;
        btnDjungel.disabled = false;
        btnOken.disabled = false;
        btnAkvarie.disabled = false;

        btnClassic.style.opacity = '1';
        btnDjungel.style.opacity = '1';
        btnOken.style.opacity = '1';
        btnAkvarie.style.opacity = '1';
        hardMode = true;
        btnHard.style.transition = "transform .8s";
        btnHard.style.transform = "rotate(+360deg)";
        btnEasy.style.transform = "rotate(0)";
        btnEasy.style.transition = "transform 0s";

        btnClassic.style.transform = "rotate(0)";
        btnDjungel.style.transform = "rotate(0)";
        btnOken.style.transform = "rotate(0)";
        btnAkvarie.style.transform = "rotate(0)";

        btnClassic.style.transition = "transform 0s";
        btnDjungel.style.transition = "transform 0s";
        btnOken.style.transition = "transform 0s";
        btnAkvarie.style.transition = "transform 0s";

        btnHard.style.boxShadow = "0px 12px 15px rgba(0, 0, 0, 0.1)";
        btnEasy.style.boxShadow = "none";

        btnHard.style.border = "2px solid #607D8B";
        btnEasy.style.border = "none";


        /*  if (hardMode) {
              btnEasy.style.transform = "rotate(0)";
          }
          */
        console.log("Hard mode: " + hardMode);
    });


    // Listen for chosen Theme
    btnClassic.addEventListener("click", function () {
        themeClassic = true;
        themeDjungel =  false;
        themeOken = false;
        themeAkvarie = false;

        btnStart.disabled = false;
        btnStart.style.opacity = '1';
        btnClassic.style.transition = "transform .8s";
        btnClassic.style.transform = "rotate(360deg)";
        btnEasy.style.transform = "rotate(0)";
        btnEasy.style.transition = "transform 0s";

        btnHard.style.transform = "rotate(0)";
        btnDjungel.style.transform = "rotate(0)";
        btnOken.style.transform = "rotate(0)";
        btnAkvarie.style.transform = "rotate(0)";

        btnHard.style.transition = "transform 0s";
        btnDjungel.style.transition = "transform 0s";
        btnOken.style.transition = "transform 0s";
        btnAkvarie.style.transition = "transform 0s";


        btnClassic.style.boxShadow = "0px 12px 15px rgba(0, 0, 0, 0.1)";
        btnDjungel.style.boxShadow = "none";
        btnOken.style.boxShadow = "none";
        btnAkvarie.style.boxShadow = "none";

        document.getElementById("btnClassic").style.backgroundColor = "#9C27B0";
        document.getElementById("btnDjungel").style.backgroundColor = "#607D8B";
        document.getElementById("btnOken").style.backgroundColor = "#607D8B";
        document.getElementById("btnAkvarie").style.backgroundColor = "#607D8B";
        console.log("Classic theme: " + themeClassic);
        console.log("Djungel theme: " + themeDjungel);
        console.log("Öken theme: " + themeOken);
        console.log("Akvarie theme: " + themeAkvarie);
    });
    btnDjungel.addEventListener("click", function () {
        themeClassic = false;
        themeDjungel = true;
        themeOken = false;
        themeAkvarie = false;
        btnStart.disabled = false;
        btnStart.style.opacity = '1';
        btnDjungel.style.transition = "transform .8s";
        btnDjungel.style.transform = "rotate(360deg)";
        btnEasy.style.transform = "rotate(0)";
        btnEasy.style.transition = "transform 0s";

        btnHard.style.transform = "rotate(0)";
        btnClassic.style.transform = "rotate(0)";
        btnOken.style.transform = "rotate(0)";
        btnAkvarie.style.transform = "rotate(0)";

        btnHard.style.transition = "transform 0s";
        btnClassic.style.transition = "transform 0s";
        btnOken.style.transition = "transform 0s";
        btnAkvarie.style.transition = "transform 0s";


        btnClassic.style.boxShadow = "none";
        btnDjungel.style.boxShadow = "0px 12px 15px rgba(0, 0, 0, 0.1)";
        btnOken.style.boxShadow = "none";
        btnAkvarie.style.boxShadow = "none";
        document.getElementById("btnClassic").style.backgroundColor = "#607D8B";
        document.getElementById("btnDjungel").style.backgroundColor = "#69F0AE";
        document.getElementById("btnOken").style.backgroundColor = "#607D8B";
        document.getElementById("btnAkvarie").style.backgroundColor = "#607D8B";
        console.log("Classic theme: " + themeClassic);
        console.log("Djungel theme: " + themeDjungel);
        console.log("Öken theme: " + themeOken);
        console.log("Akvarie theme: " + themeAkvarie);
    });
    btnOken.addEventListener("click", function () {
        themeClassic = false;
        themeDjungel = false;
        themeOken = true;
        themeAkvarie = false;
        btnStart.disabled = false;
        btnStart.style.opacity = '1';
        btnOken.style.transition = "transform .8s";
        btnOken.style.transform = "rotate(360deg)";
        btnEasy.style.transform = "rotate(0)";
        btnEasy.style.transition = "transform 0s";

        btnHard.style.transform = "rotate(0)";
        btnClassic.style.transform = "rotate(0)";
        btnDjungel.style.transform = "rotate(0)";
        btnAkvarie.style.transform = "rotate(0)";

        btnHard.style.transition = "transform 0s";
        btnClassic.style.transition = "transform 0s";
        btnDjungel.style.transition = "transform 0s";
        btnAkvarie.style.transition = "transform 0s";


        btnClassic.style.boxShadow = "none";
        btnDjungel.style.boxShadow = "none";
        btnOken.style.boxShadow = "0px 12px 15px rgba(0, 0, 0, 0.1)";
        btnAkvarie.style.boxShadow = "none";
        document.getElementById("btnClassic").style.backgroundColor = "#607D8B";
        document.getElementById("btnDjungel").style.backgroundColor = "#607D8B";
        document.getElementById("btnOken").style.backgroundColor = "#FDD835";
        document.getElementById("btnAkvarie").style.backgroundColor = "#607D8B";
        console.log("Classic theme: " + themeClassic);
        console.log("Djungel theme: " + themeDjungel);
        console.log("Öken theme: " + themeOken);
        console.log("Akvarie theme: " + themeAkvarie);
    });
    btnAkvarie.addEventListener("click", function () {
        themeClassic = false;
        themeDjungel = false;
        themeOken = false;
        themeAkvarie = true;
        btnStart.disabled = false;
        btnStart.style.opacity = '1';
        btnAkvarie.style.transition = "transform .8s";
        btnAkvarie.style.transform = "rotate(360deg)";
        btnEasy.style.transform = "rotate(0)";
        btnEasy.style.transition = "transform 0s";

        btnHard.style.transform = "rotate(0)";
        btnClassic.style.transform = "rotate(0)";
        btnDjungel.style.transform = "rotate(0)";
        btnOken.style.transform = "rotate(0)";

        btnHard.style.transition = "transform 0s";
        btnClassic.style.transition = "transform 0s";
        btnDjungel.style.transition = "transform 0s";
        btnOken.style.transition = "transform 0s";


        btnClassic.style.boxShadow = "none";
        btnDjungel.style.boxShadow = "none";
        btnOken.style.boxShadow = "none";
        btnAkvarie.style.boxShadow = "0px 12px 15px rgba(0, 0, 0, 0.1)";
        document.getElementById("btnClassic").style.backgroundColor = "#607D8B";
        document.getElementById("btnDjungel").style.backgroundColor = "#607D8B";
        document.getElementById("btnOken").style.backgroundColor = "#607D8B";
        document.getElementById("btnAkvarie").style.backgroundColor = "#00BCD4";
        console.log("Classic theme: " + themeClassic);
        console.log("Djungel theme: " + themeDjungel);
        console.log("Öken theme: " + themeOken);
        console.log("Akvarie theme: " + themeAkvarie);
    });


    let btnStart = document.getElementById('btnStart');
    btnStart.addEventListener("click", function () {
        btnStart.style.transition = "transform .8s";
        btnStart.style.transform = "rotate(360deg)";

        drawModule.init();
        showGame();
        let hideFullscreen = document.getElementById('btnFullscreen');

       if(hideFullscreen.style.display === 'block'){
            hideFullscreen.style.display = 'none';
        }else{
            hideFullscreen.style.display= 'block';
        }


    });

    let menu = document.getElementById("menuList");
    let game = document.getElementById("home");

    function showGame() {
        game.style.display = 'block';
        menu.style.display = 'none';
    }

    document.onkeydown = function (/*event*/) {

        keyCode = window.event.keyCode;
        //keyCode = event.keyCode;

        switch (keyCode) {

            case 37:
                if (direction !== 'right') {
                    direction = 'left';
                }
                //console.log('left');
                break;

            case 39:
                if (direction !== 'left') {
                    direction = 'right';
                    //console.log('right');
                }
                break;

            case 38:
                if (direction !== 'down') {
                    direction = 'up';
                    //console.log('up');
                }
                break;

            case 40:
                if (direction !== 'up') {
                    direction = 'down';
                    //console.log('down');
                }
                break;
        }
    }


})(window, document, drawModule);
