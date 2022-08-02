function klik(id) {
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state == '') elem.style.display = 'none'; //если включен, то выключаем
    else elem.style.display = ''; //иначе - включаем
}

let a = "";
let b = "";
let c = "";
let sign = "";

function computation() {
    a = document.form.textview.value;
    document.form.textview.value = "";
}

function insert(num) {

    document.form.textview.value = document.form.textview.value + num;
    b = document.form.textview.value;
}

function insertsign(num) {
    document.form.textview.value = num;
    if (document.form.textview.value == "+")
        sign = "+";
    else if (document.form.textview.value == "-")
        sign = "-";
    else if (document.form.textview.value == "*")
        sign = "*";
    else if (document.form.textview.value == "/")
        sign = "/";
    else if (document.form.textview.value == "%")
        sign = "%";
    document.form.textview.value = "";
}

function clean() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    a = Number(a);
    b = Number(b);
    if (sign == "+")
        c = a + b;
    else if (sign == "-")
        c = a - b;
    else if (sign == "*")
        c = a * b;
    else if (sign == "%")
        c = a % b;
    else if (sign == "/")
        c = a / b;
    document.form.textview.value = c;
}

function S() {
    document.form.textview.value = Math.sin(b);
}

function C() {
    document.form.textview.value = Math.cos(b);
}

function T() {
    document.form.textview.value = Math.tan(b);
}

function CT() {
    document.form.textview.value = Math.cos(b) / Math.sin(b);
}

function AS() {
    document.form.textview.value = Math.asin(b);
}

function AC() {
    document.form.textview.value = Math.acos(b);
}

function AT() {
    document.form.textview.value = Math.atan(b);
}

function ACT() {
    document.form.textview.value = (Math.PI / 2) - Math.atan(b);;
}

function x2() {
    document.form.textview.value = Number(document.form.textview.value) * Number(document.form.textview.value);
}