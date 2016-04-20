export default class Character extends Phaser.Sprite {
  constructor(game, x, y, name, frame) {
    name = name || 'ayeesha';

    super(game, x, y, name, frame);

    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.mass = 3;
  }
}
