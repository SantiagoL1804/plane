//! CLASE PLAIN

const plain1 = new Image();
plain1.src = "./imgs/avion4.png";

class Plain {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 150;
    this.height = 100;
    this.x = 10;
    this.y = 382 - this.height;
    this.image = plain1;
  }
  draw(context) {
    // context.fillStyle = "red";
    // context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  check(object) {
    if (
      this.x > object.x &&
      this.x < object.x + object.width &&
      !object.clicked
    ) {
      score += 1;
      object.clicked = true;

      if (score % 1 === 0) {
        gameSpeed += 0.5;
      }
    }
  }

  stopRest(object) {
    object.stopped = true;
  }
}
