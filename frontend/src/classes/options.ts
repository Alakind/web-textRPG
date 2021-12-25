export interface UserOptions {
    email: string;
    username: string;
    password: string;
    id: number;
}

export interface CharacterOptions {
    id: number;
    name: string;
    classType: string;
    race: string;
    level: number;
    exp: number;
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
    // TODO: SKILLBOOK
    money: number;
    damage: number;
    armorClass: number;
}
