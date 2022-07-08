// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환

let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123; // ← 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable); // number


variable = {};
console.log(typeof variable); // object


variable = function () {};
console.log(typeof variable); // function

variable = Symbol(); // symbol
console.log(typeof variable);

console.log(typeof 123); // number
console.log(typeof '123'); // string
//>>> 정리: 자바스크립에도 타입이 있긴있지만 다만, 동적으로 결정이되고 할당된 값에 따라 타입이 다르게 결정된다. 

let you = true;
console.log(typeof you); // boolean
let yourMother = false;
console.log(typeof you); // boolean

