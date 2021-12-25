import { CharacterOptions } from './options';

export class Character {
    public id: number;

    public name: string;

    public classType: string;

    public race: string;

    public level: number;

    public exp: number;

    public health: number;

    public maxHealth: number;

    public mana: number;

    public maxMana: number;

    // TODO: SKILLBOOK
    public money: number;

    public damage: number;

    public armorClass: number;

    constructor({
      id,
      name,
      classType,
      race,
      level,
      exp,
      health,
      maxHealth,
      mana,
      maxMana,
      // TODO: SKILLBOOK
      money,
      damage,
      armorClass,
    } : CharacterOptions) {
      this.id = id;
      this.name = name;
      this.classType = classType;
      this.race = race;
      this.level = level;
      this.exp = exp;
      this.health = health;
      this.maxHealth = maxHealth;
      this.mana = mana;
      this.maxMana = maxMana;
      // TODO: SKILLBOOK
      this.money = money;
      this.damage = damage;
      this.armorClass = armorClass;
    }

    die() {
      console.log(`${this.name} died`);
      // Will dispatch an action
    }
}
