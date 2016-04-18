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
      ayeesha.body.velocity.x = 0;
      ayeesha.body.velocity.y = 0;

      if (cursors.left.isDown) {
          ayeesha.body.velocity.x = -150;
          ayeesha.animations.play('right');

      } else if (cursors.right.isDown) {
          ayeesha.body.velocity.x = 150;
          ayeesha.animations.play('right');


      } else if (cursors.up.isDown) {
          ayeesha.body.velocity.y = -150;
          ayeesha.animations.play('right');


      } else if (cursors.down.isDown) {
          ayeesha.body.velocity.y = 150;
          ayeesha.animations.play('right');

      } else {
          //  Stand still
          ayeesha.animations.stop();

          ayeesha.frame = 4;
      }
    }
  });
};
