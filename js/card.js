define(["require", "exports"], function (require, exports) {
    "use strict";
    class Card {
        constructor(name) {
            this.name = name;
        }
        info() {
            return this.name;
        }
        use() {
        }
    }
    return Card;
});
