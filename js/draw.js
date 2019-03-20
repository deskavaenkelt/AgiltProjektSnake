// Theme sprite
let desertSprite = new Image();
desertSprite.src = 'img/sprite/desert_body.png';
let aquariumSprite = new Image();
aquariumSprite.src = "img/sprite/aquarium_body.png";
let classicSprite = new Image();
classicSprite.src = "img/sprite/classic_body.png";
let jungleSprite = new Image();
jungleSprite.src = "img/sprite/jungle_body.png";

// Food
let nutrition = new Image();
nutrition.src = "img/hazelnut.png";

//Background image
let desert = new Image();
desert.src = "img/background/desert3.jpg";
let classic = new Image();
classic.src = "img/background/classic.png";
let jungle = new Image();
jungle.src = "img/background/jungle3.png";
let aquarium = new Image();
aquarium.src = "img/background/aquarium.jpg";

//Power up and down image
let powerUpDownImg = new Image();
powerUpDownImg.src = "img/powerUpDown.png";


let tail;

// Hard
let booleanPowerUpLength;
let booleanPowerDownLength;
let booleanPowerUpSpeed;
let booleanPowerDownSpeed;

let drawModule = (function () {
    let gameloop;

    // Colors on the snake
    let bodySnake = function(x, y) {
        //ctx.drawImage = returnSnakeColor();
        ctx.drawImage(returnSnakeColor(), x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //ctx.strokeStyle = 'darkgreen';
        //ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };

    // Colors on the pizza
    let pizza = function(x, y) {
        //ctx.fillStyle = 'yellow';
        ctx.drawImage(nutrition, x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //ctx.fillStyle = 'red';
        //ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
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
        //ctx.fillStyle = returnCanvasBackgroundColor();
        ctx.drawImage(returnCanvasBackgroundColor(), 0, 0, w, h);
        //ctx.strokeStyle = 'black';
        //ctx.strokeRect(0, 0, w, h);
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

        // ##########
        // #  Hard  #
        // ##########
        if (hardMode) {
            powerUpDown(power.x, power.y);
        }
        if(snakeX === power.x && snakeY === power.y) {
            // Get a point
            score++;
            let newSpeedo = false;
            // Do the effect
            //snakeLength = snakeLength + 4;


            if (booleanPowerUpLength) {
                // Length -8
                console.log("Make Hasse shorter");
                if (snake.length >= 11) {
                    for (let i = 0; i < 8; i++) {
                        tail = snake.pop();
                    }
                }
            } else if (booleanPowerDownLength) {
                // Length +16
                console.log("Make Hasse longer");
                for (let i = 0; i < 16; i++) {
                    tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
                    tail.x = snakeX;
                    tail.y = snakeY;
                    snake.unshift(tail); //puts back the tail as the first cell
                    for(let i = 0; i < snake.length; i++) {
                        bodySnake(snake[i].x, snake[i].y);
                    }
                }

            } else if (booleanPowerUpSpeed) {
                console.log("Make Hasse faster");
                // Speed Down
                if (speedo <= 3) {
                    speedo++;
                    newSpeedo = true;
                }

                /*if (snakeSpeed === 55) {
                    snakeSpeed = 120;
                } else {
                    snakeSpeed = 65;
                }*/

            } else {    // booleanPowerDownSpeed
                console.log("Make Hasse slower");
                // Speed Up
                if (speedo > 0) {
                    speedo--;
                    newSpeedo = true;
                }

                /*if (snakeSpeed === 65) {
                    snakeSpeed = 120;
                } else {
                    snakeSpeed = 55
                }*/
            }

            if (newSpeedo) {
                if (speedo === 3) {
                    setInterval(paint, 50000);
                    console.log("Set speedo to 50000");
                } else if (speedo === 2) {
                    setInterval(paint, 60000);
                    console.log("Set speedo to 50000");
                } else if (speedo === 1) {
                    setInterval(paint, 60000);
                    console.log("Set speedo to 70000");
                } else {
                    setInterval(paint, 80000);
                    console.log("Set speedo to 80000");
                }
                newSpeedo = false;
            }


            setInterval(paint, snakeSpeed);
            console.log("snake.length = " + snake.length);
            console.log("speedo = " + speedo);

            //Create new effect
            generateAPower();
        }
    };


    //AllTimeHigh, plockar  det högsta värdet
    let addHighScore = function () {
        highScore = Math.max(score, highScore);
        localStorage.setItem(localStorageName, highScore);
        let showHighScore = document.getElementById('allTimeHigh');
        showHighScore.innerHTML = 'All time high: ' + highScore;
        checkHighScore();
    };

    //Highscorelistan med spelets fem högsta värden
    let checkHighScore = function () {
        highScoreList.push(score);
        highScoreList = highScoreList.sort((a, b) => b - a);
        let newList = highScoreList.slice(0, 3);
        let showHighScoreList = document.getElementById('highScore');
        //showHighScoreList.innerHTML = 'Highscore: ' + newList;

        showHighScoreList.textContent = newList.join('\n')

        }

     //   showHighScoreList.innerHTML = 'Highscore: ' + newList[i] + '\n';
          ;

    // Create food and generate random position
    let createFood = function() {
        food = {
            x: Math.floor((Math.random() * 49) + 1),
            y: Math.floor((Math.random() * 49) + 1)
        };

        for (let i=0; i>snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 49) + 1);
                food.y = Math.floor((Math.random() * 49) + 1);
            }
        }
    };

    // Create a checkCollision function to detect if the snake has crashed on its body itself:
    let checkCollision = function(x, y, array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    };

    // ##########
    // #  Hard  #
    // ##########
    // Colors of power-up/-downs
    let powerUpDown = function(x, y) {
        // This is the border of the power-up/-downs
        ctx.drawImage(powerUpDownImg, x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };
    // This is the combined function
    let generateAPower = function () {
        generatePowerPosition();
        randomPower();
    };
    // Generate the position
    let generatePowerPosition = function() {
        power = {
            x: Math.floor((Math.random() * 49) + 1),
            y: Math.floor((Math.random() * 49) + 1)
        };

        for (let i = 0; i > snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            // Don't generat on food or snake
            if (power.x === snakeX && power.y === snakeY || power.y === snakeY && power.x === snakeX ||
                power.x === food.x && power.y === food.y || power.y === food.y && power.x === food.x)
            {
                power.x = Math.floor((Math.random() * 49) + 1);
                power.y = Math.floor((Math.random() * 49) + 1);
            }
        }
    };
    // Generate the random power
    let randomPower = function () {
        //console.log("randomPower is working");
        let number = (Math.floor(Math.random() * 4) + 1);
        //console.log("random number: " + number);

        // Set everyting to false
        booleanPowerUpLength = false;
        booleanPowerDownLength = false;
        booleanPowerUpSpeed = false;
        booleanPowerDownSpeed = false;

        // Set only one power to True based on generated number
        if (number === 1) {
            booleanPowerUpLength = true;
        }
        if (number === 2) {
            booleanPowerDownLength = true;
        }
        if (number === 3) {
            booleanPowerUpSpeed = true;
        }
        if (number === 4){
            booleanPowerDownSpeed = true;
        }
        /*console.log("booleanPowerUpLength: " + booleanPowerUpLength);
        console.log("booleanPowerDownLength: " + booleanPowerDownLength);
        console.log("booleanPowerUpSpeed: " + booleanPowerUpSpeed);
        console.log("booleanPowerDownSpeed: " + booleanPowerDownSpeed);*/

    };

    // ##########

    // Init parameters at start
    let init = function(){
        speedo = 2;
        console.log("Start game!");
        direction = 'down';
        drawSnake();
        createFood();

        // Hard Mode = Faster game speed and generate a random power every 10 sek
        if (hardMode) {
            snakeSpeed = 60;    // 60
            //generateAPower();
            setTimeout(function() {
                generateAPower();
            }, 1000);//milliseconds
        } else {
            snakeSpeed = 80;    // 80
        }
        //console.log("before gameloop")
        gameloop = setInterval(paint, snakeSpeed);
        //console.log("before gameloop")
        score=0;
        //console.log("score = " + score)
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