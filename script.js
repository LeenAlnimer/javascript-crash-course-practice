// console.log(`Hello`);
// console.log(`I like  pizza`);

// //This  is  a comment
// /*This  is  a comment  */
// document.getElementById("myH1").textContent = `Hello in  JS `;
// document.getElementById("parag").textContent = `I like  pizza `;
// // window.alert(`This  is  an alert `);
// // winsow.alert(`This  is  a  pizza`);
// let x;
// x = 10;
// console.log(x);
// let y = 188;
// console.log(y);
// let age = 22;
// console.log(age);
// let price;
// price = 20;
// console.log(price);
// price = 23;
// console.log(price);
// let gpa = 3.1;
// let name = `Leen`;
// let uni = `Albalqa applied  university `;
// console.log(
//   ` My name is ${name} , my age  is  ${age} and  my university  is  ${uni}`
// );
// console.log(typeof uni);
// console.log(typeof gpa);
// let online = true;
// console.log(typeof online);
// console.log(` This  man is  online :${online}`);
// let fullName = "Leen Alnimer";
// age = 23;
// let student = false;
// document.getElementById("1").textContent = `Your name  is  ${fullName}`;
// document.getElementById("2").textContent = age;
// document.getElementById("3").textContent = `Enrolled :${student}`;
// //Arithmetic  Operators
// //*  doble  star  is  power  this   */
// let result = 1 + 2 + 7 + 9 ** 2;
// console.log(result);
// let username;
// username = window.prompt("What is  your user name ? ");
// console.log(`${username}`);
// // window    يعني  متصفح نفسه المتصفح  او ىالنافذة للتنبهيات

// // document تستخدم  ل المحتوى داخل الصفحة

// // wndow        النافذة نفسها
// // document  الاشيا  الي  جوا النافذة
// //  to  edit  anything  to  html we  use  document    but  anything  not  html  we   use  window

// // Type  Conversion
// age = window.prompt("How  old  are you ?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);
// x = "pizza";
// y = "Burger";
// let b = "Lzania ";
// x = Number(x);
// y = String(y);
// b = Boolean(b);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(b, typeof b);

// // Constants
// const PI = 3.14;
// let circumference;
// radius = window.prompt("Enter  the  radius  of circle ");
// radius = Number(radius);
// circumference = 2 * pi * radius;
// console.log(radius);

// console.log(circumference);
// // Counter  program

// Counter  Program
// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const increaseBtn = document.getElementById("increase");
// const CountLabel = document.getElementById("countLabel");
// let count = 0;
// increaseBtn.onclick = function () {
//   count++;
//   CountLabel.textContent = count;
// };
// decreaseBtn.onclick = function () {
//   count--;
//   CountLabel.textContent = count;
// };
// resetBtn.onclick = function () {
//   count = 0;
//   CountLabel.textContent = count;
// };
// Math Object    --->  Built  in  object provides methods
// let x = 3.21;
// let y = 2.33;
// let d = -9;
// let z;
// z = Math.round(x);
// console.log(z);
// m = Math.floor(y);
// console.log(m);
// console.log(Math.sqrt(x));
// console.log(Math.abs(d));
// let max = Math.max(x, y, z);
// let min = Math.min(x, y);
// console.log(max);
// console.log(min);
// // trunc  to remove  every  thing  after  decimal
// console.log(Math.trunc(x));
// Random Generator  Numbers
//

// const myButton = document.getElementById("Random");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");

// const myLabel3 = document.getElementById("myLabel3");

// const min = 1;
// const max = 10;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function () {
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;

//   myLabel1.textContent = randomNum1;
//   myLabel2.textContent = randomNum2;
//   myLabel3.textContent = randomNum3;
// };

// If  Statements

// let age = window.prompt("Enter your  age ");
// if (age >= 18) {
//   console.log("You are allowed  to  enter  the site ");
// } else {
//   console.log("You are not  allowed ");
// }
// let time = window.prompt("What  time  is  now?");
// if (time < 12) {
//   console.log("Good Morning");
// } else {
//   console.log("Good Afternoon");
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;
// mySubmit.onclick = function () {
//   if (age >= 100) {
//     resultElement.textContent = "You are too old  to  enter  this  site  ";
//   } else if (age >= 18) {
//     resultElement.textContent = "you  are allowed to  enter this  site  ";
//   } else {
//     resultElement.textContent = "no other  choice  ";
//   }
// };

//. checked   it is property
// it  is  property  for  check box  and  radio  button
// // as  value  is  a  property  for  input
// const checkbox = document.getElementById("subscribe");
// if (checkbox.checked) {
//   console.log("you subscribed");
// } else {
//   console.log("you are not  subscribed");
// }
// Ternary  operator  condition ? expressionIfTrue : expressionIfFalse
// let age = 21;
// let message = age >= 18 ? "You are adult" : "You are not  adult";
// console.log(message);
// let isStudent = false;
// let Student = isStudent ? "You are a student " : "You are not a  student";
// console.log(Student);
// let purshaseAmount = 12;
// let discount = purshaseAmount >= 100 ? "Get discount" : "You won't get  discount";
// console.log(discount);
// we use switch  if  many cases  have  equality

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("It is  Monday");
//     break;
//   case 2:
//     console.log("It is  Tuesday");
//     break;

//   case 3:
//     console.log("It is  Wednesday");
//     break;
//   case 4:
//     console.log("It is  Thursaday");
//     break;

//   case 5:
//     console.log("It is  Friday");
//     break;
//   default:
//     console.log("Nothing  match ");
// }
//String  Methods to  work with text (strings  )

// let user = "Leen Alnimer;";
// console.log(user.charAt(0));
// // to  take  a  letter  from string in specific  position   it returns  character
// console.log(user.indexOf(L));
// console.log(user.length); // it starts from one  not zero
//trim() to delete spaces
//toUpperCase to make  all chracters  capital
//toLowerCase to make  all characters  small
//startsWith to  check on something  in  the  begeinning
//endsWith to  check  on  something  on the  end
// let username = " Leen";
// let result = username.startsWith(" ");
// if (result) {
//   console.log("Your username  can not  have  any spaces  ");
// } else {
//   console.log(username);
// }
//replaceall to replace something
// let phoneMumber = "123-234-45455";
// console.log(phoneMumber.replaceAll("-", " "));
//string  slicing

//to make string  from  another string
// const fullName = "Leen Alnimer";
// let firstName = fullName.slice(0, 4);
// console.log(firstName);
// let lastName = fullName.slice(4);
// console.log(lastName);

// Method  chaining
//call many mthods after each other
// let username = window.prompt("Enter your  username: ");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice();
// console.log(username);
//Logical Operators
// ! &&  ||

//Strict  Equality
// == equal values not data type
// === equal values and types
//!= emequality
// !== strict en equality
//Loops
//Number guessing  game
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1));
// let attempts = 0;
// let guess;
// let running = true;
// while (running) {
//   guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     window.alert("Please enter  a  valid  number ");
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert("Please enter a valid number ");
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert("Too low try again  ");
//     } else if (guess > answer) {
//       window.alert("Too high  try again  ");
//     } else {
//       window.alert(
//         `Correct The answer was ${answer} and  it  took  you ${attempts}`
//       );
//       running = false;
//     }
//   }
// }

// Functions   --> it is reusable code  that declare once and  then you call  it when needed
// let x;
// let y;

// function happyBirthday(x, y) {
//   for (let i = 0; i <= 2; i++) {
//     console.log(x, y);
//   }
// }
// // we  called it  in  its  name
// happyBirthday("leenalnimer", 21);
// happyBirthday("kfn", 23);
// function add(x, y) {
//   let result = x + y;
//   return result;
// }
// let answer = add(2, 3);
// console.log(answer);

// Variable Scope  // local vs global
// when it  is  internal  curly braces it  is local  and  outside it  is  global
// function function1() {
//   let x = 1;
//   console.log(x);
// }
// function function2() {
//   let x = 2;
//   console.log(x);
// }

//Temperature  Conversion program
// const textBox = document.getElementById("textBox");
// const Tempfrhen = document.getElementById("Tempfrhen");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;
// function convert() {
//   if (Tempfrhen.checked) {
//     result.textContent = "select a Fehrenhait";
//   } else if (toCelsius.checked) {
//     result.textContent = "select a Celisius";
//   } else {
//     result.textContent = "select a unit";
//   }
// }
//Array  -->  variable  like  structure  store s  more than one value

// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]); // undefined
// let numOfFruits = fruits.length;
// console.log(numOfFruits);
// for (let i = 0; i, fruits.length; i += 2) {
//   console.log(fruits[i]);
// }
//Spread  operator to copy  an array without  affect  on  another  array
//use to seperate   array to  elements

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);
// // REst parameters  // ... use  to join  elements and  make array
// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4);
// it will convert to array
//Dice Roller
//Random password generator
// function generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers
// ) {

// const lowercaseChars="andbwh";
// const uppercaseChars="ABCSD";
// const numberChars="01258";
// const symbolChars="*/^%";
// let allowedChars="";
// let password="";

// }
// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const password = generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers
// );
// console.log(`Generated Password:${password}`);
//30 callbacks
//hey ehen you are done  call this next
// function hello(username) {
//   console.log("hello " + username);
// }
// function goodbye(username) {
//   console.log("goodbye" + username);
// }
// Arrow Functions
// ()=>console.log("hello")
//instead  of

//  function (){
//console.log("hello ");
//}

// hello(); //invoke---call
// goodbye();
// //i  want goodbye  to  work  after 3 sec so i will put  timer  within the  function to work
// function hello() {
//   console.log("hello");
// }
// function goodbye() {
//   setTimeout(function () {
//     console.log("goodbye");
//   }, 3000);
// }
//for each ()
//forEach() هي method (دالة جاهزة) بتخص الـ arrays في JavaScript.
// بتستخدمها لما بدك تمرّ على كل عنصر داخل array وتنفّذ عليه كود معيّن (دالة).
// الهدف  تمر  ع كل  عنصر ال اراي  وتنفذ عليه  فنكشن معين
// let names = ["Leen", "Abdullah", "Kholod"];
// names.forEach(function (name) {
//   console.log("Hi" + name);
// });
// فهون وظيفتها  مرت   على كل  عنصر  بال اراي  وعملت عليه   فنكشن معين
// so   it  is   nameof array.foreach(callback)
// .map()
//الدف  منها  اطبف فنكشن  ع كل  عنصر  وبعدها
// وبعدها يطلع  عندي array   جديدة
// بينما  foreach  كنا نطبق  وظيفة  ع  كل عنصر  بدون   ليعطي  اراي  جديدة
//

// const numbers = [1, 2, 3, 4];

// const power = numbers.map(square);
// console.log(power);

// function square(element) {
//   return Math.pow(element, 2);
// }
// so it  will give  new array
// filter()
//برضه فنكشن بتحط جواها غنكشن هاي الفنكشن الي حتحطها جواها فيها كونديشن لازم  يمر  ع كل  العناصر  ويعطي  اراي جديدة
// const numbers = [2, 18, 8, 9];
// const conde = numbers.filter(Cond);
// console.log(conde);
// function Cond(num) {
//   if (num >= 5) {
//     return num;
//   }
// }
// so it  is  new  array but  with  condition
//reduce  ()
// تستخدم  لتجميع ال  array   بقيمة وحدة
// هو المجمع وببلش من القيمة صفر
// const people = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 22 },
//   { name: "Omar", age: 15 },
//   { name: "Leen", age: 30 },
// ];
// function sumAges(acc, person) {
//   return acc + person.age;
// }
// const totalAge = people.reduce(sumAges, 0);
// console.log(totalAge); //84
// فهون عملنا اراي جديدة عن طريق  تجميع شي
/*Function Declaration (عادية)

sayHello();

function sayHello() {
  console.log("Hi!");
}
// ممكن استدعاؤها قبل التعريف

Function Expression
const sayHello = function() {
  console.log("Hi!");
};

sayHello(); // ل
// \
//ازم بعد التعريف، مش قبلArrow Function
const sayHi = () => {
  console.log("Hi!");
};*/
//3000 means  3 seconds

/// js   objects
/*

class = بنستخدمه لما بدنا ننشئ أكثر من نسخة (object) بنفس الخصائص والوظائف.

object = بنستخدمه لما بدنا كائن واحد فقط ومش راح نكرره.
ف ال class  هو القالب  الاساسي  ف عشان مانكرر البروبرتيز والميثودز منعمل اوبجيكست منه 
بعدد قد مابدنا بدون لنرجع نكتب  نفس  البروبرتيز والميثودز 
الـ class = "القالب" تبع الشخص

الـ constructor = اللي بحدد خصائص الشخص لما ينسحب من القالب (زي الاسم، العمر)

الـ this = المؤشر على الشخص الحالي اللي عم نحكي عنه

*/
/*

class Person {
  constructor(firstName, lastName)//properties  {
    this.firstName = firstName;  //this==person   == person.firstName
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hi! I'm ${this.firstName}!`);
  }
}

const person1 = new Person("Spongebob", "Squarepants");
//new   means  you make  new  object from the class  
const person2 = new Person("Patrick", "Star");

person1.sayHello(); // Hi! I'm Spongebob!
person2.sayHello(); // Hi! I'm Patrick!

//منكتب  this  لانه الكلاس بكون عام الكل حيستخدمه  ف مامنعرف  كم واحد مابزبط نسكميه مثلا  person1 

*/

//constructor  // special method  for  defining  properties  , methods  of  objects

// class Car {//class  is  a blueprint//النموذج الاصل الي الكل حيوخد نسخة منه وبس حستغير ال قيم تبعتعهم
//   constructor(color, type, year) {
//     //we use constructor  to put  properties
//     this.color = color;
//     this.type = type;
//     this.year = year;
//   }
// }
// // now  i  want to make  objects  from this  class
// const car1 = new Car("green", "ford", 2002); //object from class car
// const car2 = new Car("black", "ford", 2020);

// console.log(car1.color);
// console.log(car1.type);
// console.log(car1.year);
// console.log(car2.color);
// console.log(car2.type);
// console.log(car2.year);
//static  keyword

// الدوال العادية: تخص كل نسخة (object) لحالها

// مثال: كل سيارة لها لونها الخاص.

// الدوال الـ static: تخص الكلاس ككل

// مثال: كل السيارات بالعالم إلها 4 عجال — مش خاصية لسيارة معينة.

//if i  want to change  value  for  each object we use function
//without  static

// but  if all the  object have same  value  we put  static  function in the  class
//and we can not  use this keyword  this with static
// class Car {
//   constructor(color, brand) {
//     this.color = color;
//     this.brand = brand;
//   }

//   drive() {
//     console.log(`The ${this.color} ${this.brand} is driving.`);
//   }

//   static numberOfWheels() {
//     console.log("All cars have 4 wheels.");
//   }
// }
// const myCar = new Car("red", "Toyota");
// myCar.drive();
// // ✅ The red Toyota is driving.
// // myCar.numberOfWheels(); //wrong it is for a class not for object
// Car.numberOfWheels();

//Inheritance // we use extends  that indication for  inheretance
/*شو يعني Inheritance؟

الـ Inheritance أو الوراثة في البرمجة هي ميزة تسمح لك بأنو كلاس (Class) يرث خصائص ووظائف كلاس آخر، بدون ما تعيد كتابتها. يعني الكلاس الفرعي بيقدر يستخدم كل شيء من الكلاس الأساسي ويضيف أو يغيّر اللي بده.*/

/*class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow!");
  }
}

const kitty = new Cat();
kitty.eat();  // Eating... (ورثناها من Animal)
kitty.meow(); // Meow!
*/

/*extends: تستخدم لتحديد أنو الكلاس فرعي يرث من كلاس ثاني.

super(): تستدعي constructor الكلاس الأساسي. لازم إذا عندك constructor في الكلاس الفرعي.

الكلاس الفرعي ممكن يضيف خصائص ودوال جديدة ويعدل على الموجوده.

الوراثة تساعد على إعادة استخدام الكود وتنظيمه بشكل أفضل.*/

/*الوراثة مع إعادة تعريف دوال (Override)
class Vehicle {
  move() {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  move() {
    console.log("Car is driving");
  }
}

const car1 = new Car();
car1.move(); // Car is driving


الفرق:

الكلاس الفرعي Car أعاد تعريف دالة move() لتعمل بطريقة خاصة له.*/
/*لسة الوراثة (Multi-level Inheritance)
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Mammal extends Animal {
  walk() {
    console.log("Walking...");
  }
}

class Dog extends Mammal {
  bark() {
    console.log("Barking...");
  }to  access method from main we just writw the  name  of this method  
    
  
  so to access  properties from sub to main we  should  use  super 
  but  if  we  want 
  
  */
// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   work() {
//     console.log(`${this.name} is  working`);
//   }
// }
// class Manager extends Employee {
//   constructor(name, salary, department) {
//     super(name, salary);
//     // super  here  make me  not to  re write  this  of  name  and  salary
//     this.department = department;
//   }
//   manage() {
//     console.log(`${this.name}is  managing the ${this.department} department`);
//   }
// }
// const manager1 = new Manager("Omar", 5000, "IT");
// console.log(manager1.name);
// console.log(manager1.salary);
// console.log(manager1.department);
// manager1.work();
// manager1.manage();

//Getters  & Setters
/*
s → لقراءة الخصائص بطريقة ذكية أو محسوبة.

Setters → لتعيين الخصائص بطريقة آمنة، ممكن تضيف تحقق أو قواعد.

الفائدة الكبيرة: حماية البيانات + التحكم بالقيم + تنفيذ قواعد قبل التغيير

Getter يسمح لك تشوفي المعلومات بدون تعديلها.
أما Setter يسمح لك تكتبي المعلومات أو تعدليها بطريقة صحيحة.


إذا لاحظت أنك تحتاج: حماية، تحقق، أو حساب ديناميكي للقيم، استخدمي Getter/Setter.
أما إذا مجرد تخزين بيانات عادية بدون شروط، property عادي يكفي.
*/
// Destructuring   التفكيك

// [] to perform  array destructuring
// {} to perform   object  destructuring
// swapping
// let a = 1;
// let b = 2;
// [a, b] = [b, a];

// console.log(a);
// console.log(b);
// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);
// destructuring from objects

/*
const user = {name: 'Leen', age: 23, city: 'Amman'};

const { name, age } = user;
console.log(name, age); // 'Leen' 23


*/
// Nested Objects
/*
const person = {
  name: "Leen",
  age: 23,
  address: {
    city: "Amman",
    street: "Rainbow Street",
    zip: 11183
  }
};
console.log(person.address.street);


*/

// Array of  Objects

// const students = [
//   { id: 1, name: "Leen", grade: "A" },
//   { id: 2, name: "Ahmad", grade: "B" },
//   { id: 3, name: "Noor", grade: "A+" },
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }
/*
const numbers = [5, 2, 10, 1];

// ترتيب تصاعدي (من الأصغر للأكبر)
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 10]

// ترتيب تنازلي (من الأكبر للأصغر)
numbers.sort((a, b) => b - a);
console.log(numbers); // [10, 5, 2, 1]

const names = ["Leen", "Sara", "Omar", "Ahmad"];
names.sort();
console.log(names);



*/

//Shuffle  An  Array

// const cards = ["1", "2", "3"];
// cards.sort(() => Math.random() - 0.5);
// console.log(cards);
// Dates
// const date = new Date();
// console.log(date);
//Closure
//الـ Closure هي دالة بتقدر تستخدم متغيرات من دالة تانية (أعلى منها) حتى بعد ما تخلص هاي الدالة التانية.
/*دالة جوّا دالة →
والدالة الداخلية بتتذكّر متغيرات الخارجية وبتضل تقدر توصل إلها.




function outer() {
  let x = 10;
  return function inner() {
    console.log(x); // بتتذكر x من outer
  };
}

const test = outer();
test(); // 10 




closure: function inside  another  function and  inner  function have  
access  to  variable  of outer  function  
لهدف
حفظ البيانات أو الحالة بدون ما تكون متاحة من الخارج


*/
