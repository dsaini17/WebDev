function hello(...a) {
    console.log(a);
    return "Hello Ladies"+a;
}

console.log(hello(1,2,3,4));

function km_price(dis) {
    if (dis<5)
        return 10;
    else if (dis<10)
        return 20;
    return 25;
}

function wait_price(t) {
    if(t<5)
        return 0;
    else if (t<10)
        return 10;
    return 15;
}

function calc_price(dis,t) {
    return km_price(dis) + wait_price(t);
}

window.onload = function () {
    var time = document.getElementById('time');
    var km = document.getElementById('km');
    var result = document.getElementById('result');
    var btn = document.getElementById('btn');

    btn.onclick = function () {
        var time_value = time.value;
        var km_value = km.value;
        console.log(time_value,km_value);
        var total_price = calc_price(km_value,time_value);
        result.innerHTML = "Fare is Rs." +total_price;
    }
};
