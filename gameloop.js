let px=40, py=40;
/*
 * 0: floor
 * 1: wall
*/
let world = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1], 
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];

function setup() {
  createCanvas(400, 400);
}

function collisionDetection(game) {
  
}

let colliders = [];

function collision(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

function createCollisions() {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (tm[y][x] == 1) {
        colliders.push(new collision(x, y, 40, 40));
        
      }
    }
  }
}

function checkCollision() {

}

createCollision();

function drawMap(tm) {
  let tilesize = 400/tm.length;
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (tm[y][x] == 0) {
        fill(70);
        rect(x*tilesize+1, y*tilesize+1, tilesize-2, tilesize-2);
      }
      if (tm[y][x] == 1) {
        fill(110, 57, 19);
        rect(x*tilesize+1, y*tilesize+1, tilesize-2, tilesize-2);
      }
    }
  }
}

function drawPlayer() {
  fill(200);
  rect(px, py, 40, 40);
}

function draw() {
  noStroke();
  background(40);
  checkCollision();
  drawMap(world);  
  drawPlayer();
  if (keyIsPressed) {
    if (key.toString() == 'w') {
      py -= 2;
    }
    if (key.toString() == 's') {
      py += 2;
    }
    if (key.toString() == 'a') {
      px -= 2;
    }
    if (key.toString() == 'd') {
      px += 2;
    }
  }
}