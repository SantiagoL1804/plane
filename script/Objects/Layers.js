//! CLASE LAYERS

class Layer {
  constructor(image, speedModifier) {
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = this.speedModifier * gameSpeed;
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.stopped = false;
  }

  update() {
    if (this.stopped && this.speed >= 0) {
      this.speedModifier = this.speedModifier - 0.1;
    }
    this.speed = this.speedModifier * gameSpeed;

    if (this.x < -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 < -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}
