import Card      = require('card');
import GachaBall = require('gacha_ball');
import Item      = require('item');

export = GachaBox;

class GachaBox {
    fee: number;
    private gacha_balls: GachaBall[];

    constructor() {
        this.fee         = 100;
        this.gacha_balls = [];

        for (var i = 0; i < 5; i++) {
            this.gacha_balls.push(new Item('item' + i));
            this.gacha_balls.push(new Card('card' + i));
        }
    }

    lot(): GachaBall {
        var i = Math.floor(Math.random() * this.gacha_balls.length);
        return this.gacha_balls.splice(i, 1)[0];
    }

    is_empty(): boolean {
        return this.gacha_balls.length == 0 ? true : false;
    }
}
