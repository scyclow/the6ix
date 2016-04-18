window.onload = function start() {
  const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload() {
      game.load.image('hell', 'assets/hell.png');
      game.load.image('ayeesha', 'assets/ayeesha-sprite.png');
    },

    create() {
      let hell = game.add.sprite(game.world.centerX, game.world.centerY, 'hell');
      hell.anchor.setTo(0.5, 0.5);
      let ayeesha = game.add.sprite(0, 0, 'ayeesha');
    }
  });
};
