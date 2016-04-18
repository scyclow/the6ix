window.onload = function start() {
  let cursors;
  let ayeesha;

  const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload() {
      game.load.image('hell', 'assets/hell.png');
      game.load.spritesheet('ayeesha', 'assets/ayeesha-sprite.png', 20, 35);
    },

    create() {
      game.physics.startSystem(Phaser.Physics.ARCADE)

      let hell = game.add.sprite(game.world.centerX, game.world.centerY, 'hell');
      hell.anchor.setTo(0.5,0.5);

      ayeesha = game.add.sprite(20, 20, 'ayeesha');
      game.physics.arcade.enable(ayeesha);

      ayeesha.body.allowGravity = false;
      ayeesha.body.bounce.y = 0.2;
      ayeesha.body.gravity.y = 300;
      ayeesha.body.collideWorldBounds = true;

      ayeesha.animations.add('lft', [0, 1, 2, 3, 4, 5], 6, true);
      ayeesha.animations.add('right', [0, 1, 2, 3, 4, 5], 6, true);
      ayeesha.play('right')
      // this.physics.arcade.collide(ayeesha, this.layer);
      cursors = game.input.keyboard.createCursorKeys();
    },

    update() {
      const speed = 120;
      ayeesha.body.velocity.x = 0;
      ayeesha.body.velocity.y = 0;

      const move = () => {
        ayeesha.animations.play('right');
      }

      const moveDown = (amount) => {
        ayeesha.body.velocity.y = amount;
        move();
      }

      const moveUp = (amount) => {
        ayeesha.body.velocity.y = -amount;
        move();
      }

      const moveLeft = (amount) => {
        if (ayeesha.scale.x === 1) { ayeesha.scale.x *= -1 }
        ayeesha.body.velocity.x = -amount;
        move();
      }

      const moveRight = (amount) => {
        if (ayeesha.scale.x === -1) { ayeesha.scale.x *= -1 }
        ayeesha.body.velocity.x = amount;
        move();
      }

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
  });
};
