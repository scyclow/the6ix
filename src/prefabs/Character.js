export default class Character extends Phaser.Sprite {
  constructor(game, x, y, name, frame) {
    name = name || 'ayeesha';

    super(game, x, y, name, frame);

    this.anchor.setTo(0.5, 0.5);

    this.name = name;

    game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.mass = 3;

    const baseSpeed = 120
    this.animations.add('walkSideways', [0, 1, 2, 3, 4, 5], 6, true);
    this.cursors = game.input.keyboard.createCursorKeys();
    this.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.speed = baseSpeed;
    this.spaceBar.onDown.add(() => this.speed = baseSpeed * 1.5);
    this.spaceBar.onUp.add(() => this.speed = baseSpeed);
  }

  update() {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    this.move();
  }

  move() {
    const { animations, body, cursors } = this;
    const diagSpeed = Math.sqrt((this.speed**2) / 2);

    const move = (direction) => {
      this.scale.x = direction || this.scale.x;
      animations.play('walkSideways');
    };

    const moveDown = (amount) => {
      body.velocity.y = amount;
      move();
    };

    const moveUp = (amount) => {
      body.velocity.y = -amount;
      move();
    };

    const moveLeft = (amount) => {
      body.velocity.x = -amount;
      move(-1);
    };

    const moveRight = (amount) => {
      body.velocity.x = amount;
      move(1);
    };

    if (cursors.down.isDown && cursors.left.isDown) {
      moveDown(diagSpeed);
      moveLeft(diagSpeed);

    } else if (cursors.down.isDown && cursors.right.isDown) {
      moveDown(diagSpeed);
      moveRight(diagSpeed);

    } else if (cursors.up.isDown && cursors.left.isDown) {
      moveUp(diagSpeed);
      moveLeft(diagSpeed);

    } else if (cursors.up.isDown && cursors.right.isDown) {
      moveUp(diagSpeed);
      moveRight(diagSpeed);

    } else if (cursors.left.isDown) {
      moveLeft(this.speed);

    } else if (cursors.right.isDown) {
      moveRight(this.speed);

    } else if (cursors.up.isDown) {
      moveUp(this.speed);

    } else if (cursors.down.isDown) {
      moveDown(this.speed);

    } else {
      animations.stop();
      this.frame = 4;
    }
  }
}
