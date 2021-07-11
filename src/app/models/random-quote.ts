export class RandomQuote {
    sentence: string;
    character: Character;
 
    constructor(sentence: string, character: Character) {
        this.sentence = sentence;
        this.character = character;
    }
}

export class Character {
    name: string;
    slug: string;
    house: House;

    constructor(name: string, slug: string, house: House) {
        this.name = name;
        this.slug = slug;
        this.house = house;
    }
        
}

export class House {
    name: string;
    slug: string;

    constructor(name: string, slug: string) {
        this.name = name;
        this.slug = slug;
    }
}
