export default class Preload {
  preload() {
    this.load.image('hell', 'assets/hell.png');
    this.load.spritesheet('ayeesha', 'assets/ayeesha-sprite.png', 20, 35);

    this.load.onLoadComplete.addOnce(
      () => this.game.state.start('hell')
    );
  }
}
