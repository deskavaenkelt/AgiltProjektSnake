let snakeHead = new Image();
snakeHead.src = 'img/snake_head.png';
let snakeBody = new Image();
snakeBody.src = 'img/snake_body.png';
let snakeTail = new Image();
snakeTail.src = 'img/snake_tail.png';
let btnEasy = document.getElementById('btnEasy');
let btnHard = document.getElementById('btnHard');
//let btnClassic = document.getElementById("btnClassic").disabled = true;




let drawModule = (function () {
    let gameloop;
    /*
    Sabbar spelet att deklarera
    //let direction;
    //let btnStart;

     */

    // Colors on the snake
    let bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };

    // Colors on the pizza
    let pizza = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    };

    // Growth of the snake
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
        let showScore = document.getElementById('gameScore');
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
            snakeX++;
        } else if (direction === 'left') {
            snakeX--;
        } else if (direction === 'up') {
            snakeY--;
        } else if(direction === 'down') {
            snakeY++;
        }

        let menu = document.getElementById("menuList");
        let game = document.getElementById("home");
        function showMenu(){
            game.style.display = 'none';
            menu.style.display = 'block';
        }


        if (snakeX === -1 || snakeX === w/snakeSize || snakeY === -1 || snakeY === h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
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

        // Make snake grow
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

        //If the snake eats power it makes somthing happen and this means that, in this case, you will receive powerUp or powerDown a.
        if (snakeX === power.x && snakeY === power.y) {
            // Activate powerUp/Down

            // Create new power.
            createFood();
        } else {

            // Check if 10 sek has passed since last generated power, remove and generate new if true

        }

    };


    //AllTimeHigh, plockar  det högsta värdet
    var addHighScore = function () {
        highScore = Math.max(score, highScore);
        localStorage.setItem(localStorageName, highScore);
        var showHighScore = document.getElementById('allTimeHigh');
        showHighScore.innerHTML = 'All time high: ' + highScore;
        checkHighScore();
    };

    //Highscorelistan med spelets fem högsta värden
    var checkHighScore = function () {
        highScoreList.push(score);
        highScoreList = highScoreList.sort((a, b) => b - a);
        let newList = highScoreList.slice(0, 5);
        let showHighScoreList = document.getElementById('highScore');
        //showHighScoreList.innerHTML = 'Highscore: ' + newList;

        showHighScoreList.textContent = newList.join('\n')

        }

     //   showHighScoreList.innerHTML = 'Highscore: ' + newList[i] + '\n';
          ;

    // Create food and generate random position
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

    // Snake self collision detect?
    let checkCollision = function(x, y, array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    };

    // Init parameters at start
    let init = function(){
        direction = 'down';
        drawSnake();
        createFood();

        // Hard Mode = Faster game speed and generate a random power every 10 sek
        if (hardMode) {
            snakeSpeed = 60;
            setTimeout(function() {
                generateAPower();
            }, 10000);//milliseconds
        } else {
            snakeSpeed = 80;
        }
        gameloop = setInterval(paint, snakeSpeed);
        score=0;
    };

    return {
        init : init,
    };
}());



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