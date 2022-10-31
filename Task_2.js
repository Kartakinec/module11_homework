//Задание №2. Через функцию выявляем является ли вводимое в консоли число простым или нет
//в интервале от 0 до 1000. Выполняется проверка: 1 и 0 не являеются простыми числами
//и выдаётся "false".
function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        } else if (num > 1000) {
            return false;
        }
    }
    return num > 1;
}
console.log("1000", isPrime(1000))