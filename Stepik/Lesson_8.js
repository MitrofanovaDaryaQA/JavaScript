/*В этом задании в нашу функцию передается угол в градусах. Вам нужно вернуть из функции значение его синуса. Не забывайте, что тригонометрические функции в JavaScript принимают аргументы только в радианах!*/

function testMath(a) {
     return Math.sin(a * (Math.PI / 180));
};


/*А тут вам нужно вычислить и вернуть из функции площадь треугольника. Передаваемые в функцию аргументы "a" и "b" - это длины сторон, а "c" - это угол между ними в градусах.*/

function testMath(a, b, c) {
    var S;
  S = (1 / 2) * a * b * Math.sin((Math.PI * c) / 180);
  return S;
};

/*В этом задании в нашу функцию передаются 4 числа. Вам необходимо вычислить результат деления большего из этих чисел на меньшее, и округлив до ближайшего меньшего целого вернуть из функции.*/

function testMath(a, b, c, d) {
    z=Math.max(a, b, c, d);   
     f=Math.min(a, b, c, d); 
    y=z/f;
    return(Math.floor (y));
};

//В этом задании вам необходимо выполнить возведение переменной a в степень b и возврат значения из функции.

function testMath(a, b) {
        return Math.pow(a, b);
};
