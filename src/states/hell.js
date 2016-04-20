import Character from '../prefabs/character';
import Thing from '../prefabs/thing';
import { create } from './utils';

export default class Hell {
  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.background = this.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'hell'
    );

    this.background.anchor.setTo(0.5, 0.5);

    this.ayeesha = create(Character, this.game, 20, 20, 'ayeesha');
    this.thing = create(Thing, this.game, 50, 50, 'ayeesha');
  }

  update() {
    this.game.physics.arcade.collide(this.ayeesha, this.thing);
  }
}
