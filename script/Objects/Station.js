//! CLASE STATION

class Station {
  constructor(speedModifier, gameWidth, gameHeight) {
    this.speedModifier = speedModifier;
    this.speed = this.speedModifier * gameSpeed;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 150;
    this.height = 200;
    this.image = logo;
    this.x = this.gameWidth;
    this.y = 400 - this.height;
    this.stopped = false;
    this.markedForDeletion = false;
    this.clicked = false;
    this.explosion = firework2;
    this.spriteWidth = 256;
    this.spriteHeight = 256;
    this.frameX = 0;
    this.frameY = 1;
    this.maxFrame = 4;
  }

  draw(context) {
    if (this.clicked) {
      context.drawImage(
        this.explosion,
        this.spriteWidth * this.frameX,
        this.spriteHeight * this.frameY,
        this.spriteWidth,
        this.spriteHeight,
        this.x - this.spriteWidth * 0.5 + 75,
        this.y - this.spriteHeight * 0.5 + 100,
        this.spriteWidth,
        this.spriteHeight
      );
    } else {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  update() {
    if (this.clicked) {
      if (this.frameX >= this.maxFrame) {
        this.frameX = 0;
        this.frameY++;
      } else {
        this.frameX++;
      }
    }
    if (this.stopped && this.speed >= 0) {
      this.speedModifier = this.speedModifier - 0.1;
    }
    this.speed = this.speedModifier * gameSpeed;

    // Actualizar posición horizontal
    this.x = Math.floor(this.x - this.speed);
    if (this.x < 0 - this.width) this.markedForDeletion = true;

    // Actualizar posición vertical con efecto de flotación
    const floatingOffset = Math.sin(Date.now() * 0.005) * 10; // Ajusta la amplitud y la velocidad de flotación
    this.y = 450 - this.height + floatingOffset;
  }
}
