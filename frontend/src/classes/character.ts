import { CharacterOptions } from './options';

export class Character {
    private name: string;

    private classType: string;

    private race: string;

    private level: number;

    private exp: number;

    private health: number;

    private maxHealth: number;

    private mana: number;

    private maxMana: number;

    // TODO: SKILLBOOK
    private money: number;

    private damage: number;

    private armorClass: number;

    constructor({
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
}
