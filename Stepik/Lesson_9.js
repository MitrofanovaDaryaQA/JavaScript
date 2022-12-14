/*В этом задании в нашу функцию передаются два параметра: целочисленная переменная ("а") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с переменной "а" в качестве аргумента. Но вот проблема - в функции, похоже, оказалась ошибка. Вам нужно возвратить имя (свойство "name") возникающей ошибки.*/

function testErrorFunc(a, func) {         

     try {
        return func(a);
    }catch(e) {
        return e.name;
    }

    return x;
};

/*В этом задании в нашу функцию testRegExp первым параметром передается случайная строка(переменная s), а вторым - случайная подстрока(переменная sub_s), которую нужно использовать в качестве шаблона регулярного выражения. Вам нужно вернуть из функции строку, в которой будут перечислены через запятую все совпадения шаблона с первой строкой.*/

function testRegExp(s, sub_s) {
const regExp = new RegExp(sub_s, 'g');
    const result = [];
    let finded_s = null;
    while ((finded_s = regExp.exec(s)) != null) {
        result.push(finded_s);
    }
    return result.join(',');
};


