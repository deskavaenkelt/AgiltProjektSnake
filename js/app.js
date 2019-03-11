(function (window, document, drawModule) {

var btnStart = document.getElementById('btnStart');
    btnStart.addEventListener("click", function(){ drawModule.init();});
//btnStart.addEventListener("click", function(){ drawModule.init();});
// Button position and dimensions
 /*   var buttonX = 300;
    var buttonY = 375;
    var buttonW = 60;
    var buttonH = 30;

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
