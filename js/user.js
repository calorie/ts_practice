define(["require", "exports"], function (require, exports) {
    "use strict";
    class User {
        constructor(money) {
            this.money = money;
        }
        pay(fee) {
            this.money -= fee;
        }
        can_pay(money) {
            return (0 <= (this.money - money)) ? true : false;
        }
    }
    return User;
});
