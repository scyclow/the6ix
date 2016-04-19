export default class Hell {
  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.background = this.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'hell'
    );

    this.background.anchor.setTo(0.5, 0.5);

    this.ayeesha = this.add.sprite(20, 20, 'ayeesha');
    this.physics.arcade.enable(this.ayeesha);

    this.ayeesha.body.allowGravity = false;
    this.ayeesha.body.bounce.y = 0.2;
    this.ayeesha.body.collideWorldBounds = true;

    this.ayeesha.animations.add('lft', [0, 1, 2, 3, 4, 5], 6, true);
    this.ayeesha.animations.add('right', [0, 1, 2, 3, 4, 5], 6, true);
    this.ayeesha.play('right');
    // this.physics.arcade.collide(ayeesha, this.layer);
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const { ayeesha, cursors } = this;
    const speed = 120;

    ayeesha.body.velocity.x = 0;
    ayeesha.body.velocity.y = 0;

    const move = () => {
      ayeesha.animations.play('right');
    };

    const moveDown = (amount) => {
      ayeesha.body.velocity.y = amount;
      move();
    };

    const moveUp = (amount) => {
      ayeesha.body.velocity.y = -amount;
      move();
    };

    const moveLeft = (amount) => {
      ayeesha.scale.x = -1;
      ayeesha.body.velocity.x = -amount;
      move();
    };

    const moveRight = (amount) => {
      ayeesha.scale.x = 1;
      ayeesha.body.velocity.x = amount;
      move();
    };

    if (cursors.down.isDown && cursors.left.isDown) {
      moveDown(speed);
      moveLeft(speed);

    } else if (cursors.down.isDown && cursors.right.isDown) {
      moveDown(speed);
      moveRight(speed);

    } else if (cursors.up.isDown && cursors.left.isDown) {
      moveUp(speed);
      moveLeft(speed);

    } else if (cursors.up.isDown && cursors.right.isDown) {
      moveUp(speed);
      moveRight(speed);

    } else if (cursors.left.isDown) {
      moveLeft(speed);

    } else if (cursors.right.isDown) {
      moveRight(speed);

    } else if (cursors.up.isDown) {
      moveUp(speed);

    } else if (cursors.down.isDown) {
      moveDown(speed);

    } else {
      ayeesha.animations.stop();
      ayeesha.frame = 4;
    }
  }
}
