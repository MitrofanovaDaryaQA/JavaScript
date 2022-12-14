/*В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.

Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".*/

function testDateTime(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);
    const date3 = date1 > date2 ? date1 : date2;
    const day = date3.getDay();
    let dayName = '';
    switch (day) {
        case 0:
            dayName = 'Воскресенье';
            break;
        case 1:
            dayName = 'Понедельник';
            break;
        case 2:
            dayName = 'Вторник';
            break;
        case 3:
            dayName = 'Среда';
            break;
        case 4:
            dayName = 'Четверг';
            break;
        case 5:
            dayName = 'Пятница';
            break;
        case 6:
            dayName = 'Суббота';
            break;
    }
    return dayName;
}
