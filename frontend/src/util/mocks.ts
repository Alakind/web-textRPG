import { Character } from '../classes/character';

export const playerMock = new Character({
  name: 'Eragon',
  classType: 'warrior',
  race: 'human',
  level: 2,
  exp: 57,
  health: 100,
  maxHealth: 100,
  mana: 20,
  maxMana: 50,
  money: 11,
  damage: 2,
  armorClass: 15,
});
