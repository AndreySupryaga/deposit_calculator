/**
 * Created by andrey_supryaga on 21.06.2015.
 */

$(function(){

    "use strict";

    var  infoArr = [];

    $('#submit').on('click',function(e){
        e.preventDefault();
        infoArr = [];
        $('.table').fadeOut(500);

        var firsPayment = +$('#first-payment').val(),
            totalCount = +$('#first-payment').val(),
            replenishment = +$('#replenishment').val(),
            percent = +$('#percent').val(),
            term = +$('#term').val(),
            isAllInfo = $('#all-info').prop('checked'),
            $total = $('#total'),
            $own = $('#own'),
            $accumulation = $('#accumulation'),
            $growthYear = $('#growth-year'),
            $growthMonth = $('#growth-month'),
            i = 0;

        /**
         * ---------РАСЧЕТЫ
         */

            for (i ; i != term; i++){
                var one_year = {
                    'count' : '',
                    'percent': '',
                    'total_own':'',
                    'total_percent' : ''
                };
                one_year.percent = totalCount * (percent/100);
                totalCount += totalCount * (percent/100);
                one_year.count = totalCount;
                one_year.total_own = replenishment * (i) + firsPayment;
                one_year.total_percent = totalCount - one_year.total_own;
                infoArr.push(one_year);
                totalCount += replenishment;
            }

        var total = (totalCount - replenishment).toFixed(),
            own = (replenishment * (term-1) + firsPayment).toFixed(),
            accumulation = ((totalCount - replenishment) - (replenishment * term)).toFixed(),
            growth_year = ((totalCount - replenishment)*(percent/100)).toFixed(),
            growth_month = (growth_year/12).toFixed(),
            time = 1000;

        /**
        *  --------------ВЫВОД РЕЗУЛЬТАТОВ
         */

      

        $('#info-panel').fadeIn(300);

        counter($total, total);
        counter($own, own);
        counter($accumulation, accumulation);
        counter($growthYear, growth_year);
        counter($growthMonth, growth_month);

        function counter (element, value){
            var step =  value/40,
                i = 0,
                interval = setInterval(function(){
                    i += 1;
                    element.text(i * step.toFixed());
                    if(i === 40){
                         element.text(value);
                        clearInterval(interval);
                    }
            }, time/30);
        }
        if(isAllInfo){
            infoYears();
        }

    });

    /**
     * -----------ГЕНЕРАЦИЯ И ВЫВОД ТАБЛИЦЫ
     */

    $('#all-info').on('change',function() {
       if(this.checked && infoArr.length > 0) infoYears ();
       else $('.table').fadeOut(500)
    });

    function infoYears (){
        $('#table-content').empty();
        if(infoArr.length > 0)  $('.table').fadeIn(500);
        for(var j = 0; j < infoArr.length; j++){
            var tr =  $('<tr/>')
                .append('<td>' + (+j+1) + '</td>')
                .append('<td>' + infoArr[j].count.toFixed() + '</td>')
                .append('<td>' + infoArr[j].total_own.toFixed() + '</td>')
                .append('<td>' + infoArr[j].percent.toFixed() + '</td>')
                .append('<td>' + infoArr[j].total_percent.toFixed() + '</td>')
                .appendTo('#table-content');
            }
        }

    /**
     * -----------СБРОС РЕЗУЛЬТАТОВ
     */

    $('#reset').on('click',function(){
        $('input').val('');
        $('.table').fadeOut(500);
        $('#info-panel').fadeOut(500);
        $(':checked').prop('checked',false);
        return false;
    });


    $('.form-control').on('keypress', function(e){
        if((e.keyCode < 48 || e.keyCode > 57) && e.keyCode !== 46) e.preventDefault();

    });


});