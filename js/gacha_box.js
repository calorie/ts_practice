define(["require", "exports", 'card', 'item'], function (require, exports, Card, Item) {
    "use strict";
    class GachaBox {
        constructor() {
            this.fee = 100;
            this.gacha_balls = [];
            for (var i = 0; i < 5; i++) {
                this.gacha_balls.push(new Item('item' + i));
                this.gacha_balls.push(new Card('card' + i));
            }
        }
        lot() {
            var i = Math.floor(Math.random() * this.gacha_balls.length);
            return this.gacha_balls.splice(i, 1)[0];
        }
        is_empty() {
            return this.gacha_balls.length == 0 ? true : false;
        }
    }
    return GachaBox;
});
