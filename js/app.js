(function (window, document, drawModule) {

    let btnStart = document.getElementById('btnStart');
    btnStart.addEventListener("click" ,function(){
        drawModule.init();
        showGame();
    });

    let menu = document.getElementById("menuList");
    let game = document.getElementById("home");

    function showGame(){
        game.style.display = 'block';
        menu.style.display = 'none';
    };


    document.onkeydown = function(event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch(keyCode) {

            case 37:
                if (direction != 'right') {
                    direction = 'left';
                }
                console.log('left');
                break;

            case 39:
                if (direction != 'left') {
                    direction = 'right';
                    console.log('right');
                }
                break;

            case 38:
                if (direction != 'down') {
                    direction = 'up';
                    console.log('up');
                }
                break;

            case 40:
                if (direction != 'up') {
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




*/