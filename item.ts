import GachaBall = require('gacha_ball');

export = Item;

class Item implements GachaBall {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }

    use(): void {
    }
}
