/* Вам нужно написать в указанном месте код, который решит следующую задачу: представьте кофейню, посетитель заходил в кофейню n раз и совершал покупки на s рублей. Выведите в консоль значение общей суммы покупок, совершенных за n раз в кофейне. 

Постарайтесь решить с помощью цикла for.*/

function myFunction(n, s) { 
    let totalprice=0;
  for (let i=0; i<=n; i++) {
    totalprice = s*i;
}
console.log(totalprice)
};



