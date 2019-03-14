var snakeHead = new Image();
snakeHead.src = 'img/snake_head.png';
var snakeBody = new Image();
snakeBody.src = 'img/snake_body.png';
var snakeTail = new Image();
snakeTail.src = 'img/snake_tail.png';

var drawModule = (function () {

  var bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  };

  var pizza = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  };

  var drawSnake = function() {
      var length = 3;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }  
  };

  var scoreText = function () {
      var showScore = document.getElementById('gamescore');
      showScore.innerHTML = "Poäng: " + score;
  };
    
  var paint = function(){
      ctx.fillStyle = 'lightgrey';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(0, 0, w, h);
      btnStart.setAttribute('disabled', true);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;

      if (direction == 'right') { 
        snakeX++; }
      else if (direction == 'left') { 
        snakeX--; }
      else if (direction == 'up') { 
        snakeY--; 
      } else if(direction == 'down') { 
        snakeY++; }

      var menu = document.getElementById("menuList");
      var game = document.getElementById("home");
      function showMenu(){
          game.style.display = 'none';
          menu.style.display = 'block';
      }

      if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
          showMenu();
          btnStart.removeAttribute('disabled', false);

          //restart game
          highScore = localStorage.getItem(localStorageName) == null ? 0 : localStorage.getItem(localStorageName);
          addHighScore();
          btnStart.removeAttribute('disabled', true);

          ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          return;          
        }
        
        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
          score ++;
          
          createFood(); //Create new food
        } else {
          var tail = snake.pop(); //pops out the last cell
          tail.x = snakeX; 
          tail.y = snakeY;
        }
        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        } 
        
        pizza(food.x, food.y); 
        scoreText();
  };

  //Highscorelistan, plockar  det högsta värdet
  var addHighScore = function () {

      highScore = Math.max(score, highScore);
      localStorage.setItem(localStorageName, highScore);
      var showHighScore = document.getElementById('allTimeHigh');
      showHighScore.innerHTML = 'All time high: ' + highScore;
      checkHighScore();
  };

  var checkHighScore = function () {
          highScoreList.push(score);
          highScoreList = highScoreList.sort((a, b) => b - a);
          let newList = highScoreList.slice(0, 5);
          let showHighScoreList = document.getElementById('highscore');
          showHighScoreList.innerHTML = 'Highscore: ' + newList;
  };



  var createFood = function() {
      food = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      };

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = Math.floor((Math.random() * 30) + 1);
          food.y = Math.floor((Math.random() * 30) + 1);
        }
      }
  };

  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
            return true;
      }
      return false;
  };
      
    var init = function(){
      direction = 'down';
      drawSnake();
      createFood();
      gameloop = setInterval(paint, 80);
      score=0;
  };
  
    return {
      init : init
    };
}());
