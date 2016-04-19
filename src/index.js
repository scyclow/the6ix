import Preload from './states/preload';
import Hell from './states/hell';

window.onload = function start() {
  const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  game.state.add('preload', Preload);
  game.state.add('hell', Hell);

  game.state.start('preload');
};
