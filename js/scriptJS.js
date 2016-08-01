"use strict";


window.DC = {};

window.DC.Config = {
    selectorEl: {}

};

!function () {
    document.addEventListener("DOMContentLoaded", instal);

    function instal() {

    }
    function DepositCalculator() {
        
        this.$firstPayment = $('first-payment'),
        this.$replenishment = $('replenishment'),
        this.$percent = $('percent'),
        this.$term = $('term'),
        this.$isAllInfo = $('all-info'),
        this.$total = $('total'),
        this.$own = $('own'),
        this.$accumulation = $('accumulation'),
        this.$growthYear = $('growth-year'),
        this.$growthMonth = $('growth-month')

    }

    DepositCalculator.prototype.calculate = function () {

        var firsPayment = +this.$firstPayment.value,
            totalCount = +this.$firstPayment.value,
            replenishment = +this.$replenishment.value,
            percent = +this.$percent.value,
            term = +this.$term.value,
            isAllInfo = +this.$isAllInfo.value,
            $total = this.$total,
            $own = this.$own,
            i = 0;

        for (; i !== term; i += 1) {

        }


    };


    function $(id) {
        return document.getElementById(id)
    }
}();


