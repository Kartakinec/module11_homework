//Задание №4.
// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
//Когда from = to - цикл останавливается.

function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(5, 15);