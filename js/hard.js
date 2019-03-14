// 50x50 rutor
let power;
let powerSomethingGenerator = (function () {


    let _privateMethod = function () {
        // private stuff
    };

    let publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };

})();
powerSomethingGenerator.publicMethod();



let powerUpLength = (function () {
    let propertyPosition = generatePowerPosition.publicMethod();

    s




    let _privateMethod = function () {
        snakeLength = snakeLength -2;
    };

    let publicMethod = function () {
        _privateMethod();
    };

    return {
        publicMethod: publicMethod
    };

})();













let generatePowerPosition = (function() {
    let _privateMethod = function () {
        power = {
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        };

        for (let i=0; i>snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;

            if (power.x === snakeX && power.y === snakeY || power.y === snakeY && power.x === snakeX) {
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
})();