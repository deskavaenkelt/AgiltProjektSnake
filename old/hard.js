// 50x50 rutor

/*let generateAPower = function () {
    generatePowerPosition.publicMethod();
    randomPower.publicMethod();
};*/



/*let generatePowerPosition = (function() {
    let _privateMethod = function () {
        power = {
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        };

        for (let i = 0; i > snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            // Don't generat on food or snake
            if (power.x === snakeX && power.y === snakeY || power.y === snakeY && power.x === snakeX ||
                power.x === food.x && power.y === food.y || power.y === food.y && power.x === food.x)
            {
                power.x = Math.floor((Math.random() * 30) + 1);
                power.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    };

    let publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };
})();*/

/*let randomPower = (function () {
    let _privateMethod = function () {
        let number = ((Math.random() * 4) + 1);

        // Set everyting to false
        booleanPowerUpLength = false;
        booleanPowerDownLength = false;
        booleanPowerUpSpeed = false;
        booleanPowerDownSpeed = false;

        // Set only one power to True based on generated number
        if (number === 1) {
            booleanPowerUpLength = true;
        } else if (number === 2) {
            booleanPowerDownLength = true;
        } else if (number === 3) {
            booleanPowerUpSpeed = true;
        } else {
            booleanPowerDownSpeed = true;
        }
    };

    let publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };
})();*/


/*let activePower = (function () {
    let _privateMethod = function () {
        if (booleanPowerUpLength) {
            if (7 <= snakeLength) {
                snakeLength -= 4;
            }
        } else if (booleanPowerDownLength) {
            snakeLength += 4;
        } else if (booleanPowerUpSpeed) {

        } else if (booleanPowerDownSpeed) {

        }
    };

    let publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };
})();*/

















// work in progress below


/*let powerUpLength = (function () {
    //let propertyPosition = generatePowerPosition.publicMethod();

    let _privateMethod = function () {
        if (7 <= snakeLength) {
            snakeLength -= 4;
        }
    };

    let publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };

})();
let powerSomethingGenerator = (function () {


    let _privateMethod = function () {
        // private stuff

        powerUpLength.publicMethod();
    };

    let publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };

})();
powerSomethingGenerator.publicMethod();*/


