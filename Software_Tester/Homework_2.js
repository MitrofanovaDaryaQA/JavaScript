const age_2=18;
const age_3=60;
const checkAge = prompt("Сколько Вам лет?", age) 
   age=Number(age)
      if (typeof age == "number"){

   if (age < age_2) {
      console.log("You don't have access cause your age is " + age + " it's less then " + age_2)
   } else if ((age >= age_2) && (age < age_3)) {
      console.log("Welcome")
   } else if (age > age_3) {
      console.log("Keep calm and look Culture channel")
   }
   else 
    console.log("Technical work")}
   else
    console.log("Sorry, ERROR")

checkAge("fghjk");
checkAge(17);
checkAge(18);
checkAge(61);
checkAge("18");
