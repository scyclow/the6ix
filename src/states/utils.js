export function create(model, game, ...args) {
  const obj = new model(game, ...args);
  game.add.existing(obj);
  return obj;
}
