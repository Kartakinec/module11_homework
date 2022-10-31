//Задание №1. Дан произвольный массив. Выявляем количество чётных
//и нечётных цифр, а также нулей. Результат выводится в консоль.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
function countOfOdd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return console.log('Количество чётных чисел - ' + (count-1))
    //Т.к. 0 (ноль) засчитывается, как чётное число, то для точности результата вычитаем его.
}
countOfOdd(arr);

function countOfEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return console.log('Количество нечётных чисел ' + count)
}
countOfEven(arr);

function countOfNull(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    return console.log('Количество нулей - ' + count)
}
countOfNull(arr);