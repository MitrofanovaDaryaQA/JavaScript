//В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть из функции их суммарную длину.

function testStr(a, b) {
   return a.length + b.length;
}

//В этом задании в нашу функцию testStr первым параметром передается строка (переменная str), а вторым - число (переменная n) . Вам нужно вернуть из функции символ строки , порядковый номер которого указан в переданном в функцию числе.
//Подсказка: порядковый номер не равен индексу символа в строке. Если есть сомнения - перечитайте предыдущие шаги.

function testStr(str, n) {
 return str[n-1];
}

//В этом задании в нашу функцию testStr передаются две строки. Вам нужно вернуть индекс позиции, с которой начинается вхождение второй строки в первую.

function testStr(a, b) {
    return a.indexOf(b);
}
