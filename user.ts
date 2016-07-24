export = User;

class User {
    money: number;

    constructor(money: number) {
        this.money = money;
    }

    pay(fee: number): void {
        this.money -= fee;
    }

    can_pay(money: number): boolean {
        return (0 <= (this.money - money)) ? true : false;
    }
}
