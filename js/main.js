define(["require", "exports", 'gacha_box', 'user'], function (require, exports, GachaBox, User) {
    "use strict";
    (function () {
        const MONEY = 1000;
        var user = new User(MONEY);
        var user_money_element = document.getElementById('user-money');
        user_money_element.innerText = String(user.money);
        var gacha_box = new GachaBox();
        var gacha_fee_element = document.getElementById('gacha-fee');
        gacha_fee_element.innerText = String(gacha_box.fee);
        var gacha_exec_element = document.getElementById('gacha-exec');
        gacha_exec_element.onclick = function () {
            if (gacha_box.is_empty())
                return;
            if (!user.can_pay(gacha_box.fee))
                return;
            var gacha_ball = gacha_box.lot();
            var gacha_element = document.getElementById('gacha');
            var gacha_ball_element = document.createElement('div');
            gacha_ball_element.innerText = gacha_ball.info();
            gacha_element.appendChild(gacha_ball_element);
            user.pay(gacha_box.fee);
            user_money_element.innerText = String(user.money);
        };
    }());
});
