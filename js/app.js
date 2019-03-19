
(function (window, document, drawModule) {

    // Listen after Easy or Hard Mode
    btnEasy.addEventListener("click", function () {
        hardMode = false;
        document.getElementById("btnEasy").style.transform = "rotate(-7deg)";
        document.getElementById("btnHard").style.transform = "rotate(0)";
        console.log("Hard mode: " + hardMode);
    });

    btnHard.addEventListener("click", function () {
        hardMode = true;
        document.getElementById("btnHard").style.transform = "rotate(7deg)";
        document.getElementById("btnEasy").style.transform = "rotate(0)";
        console.log("Hard mode: " + hardMode);
    });


    // Listen after chosen Theme
    btnClassic.addEventListener("click", function () {
        themeClassic = true;
        themeDjungel =  false;
        themeOken = false;
        themeAkvarie = false;
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
        document.getElementById("btnClassic").style.backgroundColor = "#607D8B";
        document.getElementById("btnDjungel").style.backgroundColor = "#607D8B";
        document.getElementById("btnOken").style.backgroundColor = "#607D8B";
        document.getElementById("btnAkvarie").style.backgroundColor = "#00BCD4";
        console.log("Classic theme: " + themeClassic);
        console.log("Djungel theme: " + themeDjungel);
        console.log("Öken theme: " + themeOken);
        console.log("Akvarie theme: " + themeAkvarie);
    });


    let btnStart = document.getElementById('btnStart'); // Går ej flytta på?
    btnStart.addEventListener("click", function () {
        drawModule.init();
        showGame();
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
                console.log('left');
                break;

            case 39:
                if (direction !== 'left') {
                    direction = 'right';
                    console.log('right');
                }
                break;

            case 38:
                if (direction !== 'down') {
                    direction = 'up';
                    console.log('up');
                }
                break;

            case 40:
                if (direction !== 'up') {
                    direction = 'down';
                    console.log('down');
                }
                break;
        }
    }


})(window, document, drawModule);



/*
    ##### Legacy Code #####
    //btnStart.addEventListener("click", function(){ drawModule.init();});
// Button position and dimensions
 /*   let buttonX = 300;
    let buttonY = 375;
    let buttonW = 60;
    let buttonH = 30;

// Render button
    ctx.fillStyle = 'red';
    ctx.fillRect(buttonX, buttonY, buttonW, buttonH);

    // Control that click event occurred within position of button
    // NOTE: This assumes canvas is positioned at top left corner
    if (
        event.x > buttonX &&
        event.x < buttonX + buttonW &&
        event.y > buttonY &&
        event.y < buttonY + buttonH
    ) {
        // Executes if button was clicked!


    }
    */