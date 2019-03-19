// http://rembound.com/articles/creating-a-snake-game-tutorial-with-html5

// All fish elements in one file (sprite image)
let sprites = new Image();
sprites.src = "img/fish/sprites.png";

// Draw the snake
function drawSnake() {
    // Loop over every snake segment
    for (let i=0; i<snake.segments.length; i++) {
        let segment = snake.segments[i];
        let segx = segment.x;
        let segy = segment.y;
        let tilex = segx*level.tilewidth;
        let tiley = segy*level.tileheight;

        // Sprite column and row that gets calculated
        let tx = 0;
        let ty = 0;

        if (i === 0) {
            // Head; Determine the correct image
            let nseg = snake.segments[i+1]; // Next segment
            if (segy < nseg.y) {
                // Up
                tx = 3; ty = 0;
            } else if (segx > nseg.x) {
                // Right
                tx = 4; ty = 0;
            } else if (segy > nseg.y) {
                // Down
                tx = 4; ty = 1;
            } else if (segx < nseg.x) {
                // Left
                tx = 3; ty = 1;
            }
        } else if (i === snake.segments.length-1) {
            // Tail; Determine the correct image
            let pseg = snake.segments[i-1]; // Prev segment
            if (pseg.y < segy) {
                // Up
                tx = 3; ty = 2;
            } else if (pseg.x > segx) {
                // Right
                tx = 4; ty = 2;
            } else if (pseg.y > segy) {
                // Down
                tx = 4; ty = 3;
            } else if (pseg.x < segx) {
                // Left
                tx = 3; ty = 3;
            }
        } else {
            // Body; Determine the correct image
            let pseg = snake.segments[i-1]; // Previous segment
            let nseg = snake.segments[i+1]; // Next segment
            if (pseg.x < segx && nseg.x > segx || nseg.x < segx && pseg.x > segx) {
                // Horizontal Left-Right
                tx = 1; ty = 0;
            } else if (pseg.x < segx && nseg.y > segy || nseg.x < segx && pseg.y > segy) {
                // Angle Left-Down
                tx = 2; ty = 0;
            } else if (pseg.y < segy && nseg.y > segy || nseg.y < segy && pseg.y > segy) {
                // Vertical Up-Down
                tx = 2; ty = 1;
            } else if (pseg.y < segy && nseg.x < segx || nseg.y < segy && pseg.x < segx) {
                // Angle Top-Left
                tx = 2; ty = 2;
            } else if (pseg.x > segx && nseg.y < segy || nseg.x > segx && pseg.y < segy) {
                // Angle Right-Up
                tx = 0; ty = 1;
            } else if (pseg.y > segy && nseg.x > segx || nseg.y > segy && pseg.x > segx) {
                // Angle Down-Right
                tx = 0; ty = 0;
            }
        }

        // Draw the image of the snake part
        context.drawImage(tileimage, tx*64, ty*64, 64, 64, tilex, tiley,
            level.tilewidth, level.tileheight);
    }
}