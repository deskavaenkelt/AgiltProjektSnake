let snakeHead = new Image();
snakeHead.src = 'img/snake_head.png';
let snakeBody = new Image();
snakeBody.src = 'img/snake_body.png';
let snakeTail = new Image();
snakeTail.src = 'img/snake_tail.png';

let snakeLength;

let drawModule = (function () {
    let gameloop;
    /*
    Sabbar spelet att deklarera
    //let direction;
    //let btnStart;

     */

    let bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };

    let pizza = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    };

    let drawSnake = function() {
        /*let length = 3;
        snake = [];
        for (let i = length-1; i>=0; i--) {
            snake.push({x:i, y:0});
        }*/
        snakeLength = 3;
        snake = [];
        for (let i = snakeLength-1; i>=0; i--) {
            snake.push({x: i, y: 0});
        }
    };

    let scoreText = function () {
        let showScore = document.getElementById('gamescore');
        showScore.innerHTML = "Poäng: " + score;
    };

    let paint = function(){
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);
        btnStart.setAttribute('disabled', true);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === 'right') {
            snakeX++; }
        else if (direction === 'left') {
            snakeX--; }
        else if (direction === 'up') {
            snakeY--;
        } else if(direction === 'down') {
            snakeY++; }

        let menu = document.getElementById("menuList");
        let game = document.getElementById("home");
        function showMenu(){
            game.style.display = 'none';
            menu.style.display = 'block';
        }


          //restart game
          highScore = localStorage.getItem(localStorageName) == null ? 0 : localStorage.getItem(localStorageName);
          addHighScore();
          btnStart.removeAttribute('disabled', true);
        if (snakeX === -1 || snakeX === w/snakeSize || snakeY === -1 || snakeY === h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
            showMenu();
            btnStart.removeAttribute('disabled', false);

            //restart game
            highScore = localStorage.getItem(localStorageName) == null ? 0 : localStorage.getItem(localStorageName);

            addHighScore();
            //addScore();
            btnStart.removeAttribute('disabled', true);

            ctx.clearRect(0,0,w,h);
            gameloop = clearInterval(gameloop);
            return;
        }
        let tail;
        if(snakeX === food.x && snakeY === food.y) {
            tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
            score ++;

            createFood(); //Create new food
        } else {
            tail = snake.pop(); //pops out the last cell
            tail.x = snakeX;
            tail.y = snakeY;
        }
        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for(let i = 0; i < snake.length; i++) {
            bodySnake(snake[i].x, snake[i].y);
        }

        pizza(food.x, food.y);
        scoreText();
    };

    //Alternativ till highscorelistan, fungerar men plockar bara det högsta värdet
    let addHighScore = function () {
        highScore = Math.max(score, highScore);
        localStorage.setItem(localStorageName, highScore);
        let showHighScore = document.getElementById('highscore');
        showHighScore.innerHTML = 'Highscore: ' + highScore;
    };

    let createFood = function() {
        food = {
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        };

        for (let i=0; i>snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    };

    let checkCollision = function(x, y, array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    };

    let init = function(){
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

/*
    ##### Legacy code #####

  //Alternativ till highscorelistan som ska plocka de högsta fem värdena, fungerar ej i nuläget
  let addScore = function () {
      highScore.push(score);

      highScore.sort(function (a, bt) {return a -b});
      highScore.slice(0, 5);




      let storedList = localStorage.getItem("highScore");
      if(storedList){
          highScore = JSON.parse(storedList);
      }
      let showHighScore = document.getElementById('highscore');
      showHighScore.innerHTML = 'Highscore: ' + storedList;
  };




 */