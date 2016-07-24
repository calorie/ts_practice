define(["require", "exports"], function (require, exports) {
    "use strict";
    class Item {
        constructor(name) {
            this.name = name;
        }
        info() {
            return this.name;
        }
        use() {
        }
    }
    return Item;
});
