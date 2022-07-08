//동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !=== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2'); //타입은 다르지만 true
console.log(2 === '2'); // 〽️
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();


const obj1 = {
  name: 'js'
}
const obj2 = {
  name: 'js'
}
console.log(obj1 == obj2);   //false!! 다른메모리 주소라서 key 와 valuer가 동일하더라도 공간이다름(서로다른 메모리주소)
console.log(obj1 === obj2);  //false!! 값 자체가 다름.
console.log(obj1.name == obj2.name) // true
console.log(obj1.name === obj2.name) // true

let obj3 = obj2;  
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true

