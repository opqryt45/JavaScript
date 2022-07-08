// Number.EPSILON 0과 1사이에서 나타낼 수 있는 가장작은 숫자.

const num1 = 123;
const num2 = new Number(123); // 굳이 필요한거아니면 메모리낭비임
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); //e+308 은 10의 308제곱을 나타냄.
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// 언제사용하느냐?

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 실수를 반올림해서 →→ 문자열로 변환❗️

const num4 = 1234.12;
console.log(num4.toFixed()); // 실수가 정수로 변환

console.log(num4.toString()); // 문자열로 변환
console.log(num4.toLocaleString('ar-EG')); // 숫자를 그나라 지역에 맞게 보여줌. (마찬가지로 문자열로 변환해서)

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기 안될때는 지수표기법으로 반환됨

// Number.EPSILON 0과 1사이에서 나타낼 수 있는 가장작은 숫자.

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num); // 이진수로 변환후 계산후 십진수로 다시 이진수로 반환함. 이런 과정에서 정확한 부동소수점까지 계산이 안됨
// 작은오차발생 , 이런작은 오차를 나타내는 것이 EPSILON 

function isEqual(original, expected){
  return original === expected; 
  // return original - expected < Number.EPSILON  // 작은차이는 똑같다고 간주하고 싶다면
  // return Math.abs(original - expected) < Number.EPSILON;  >> Math.abs 은 절대값표시
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1));// true
console.log(isEqual(num, 0.1)); // false !!  why? num = 0.10000000000000003 이기때문.

// 결론은 자바스크립트에서 실수끼리 계산할 떄 미묘한차이가 발생할 수 있다. >> 감지하려면 Number.EPSILON 사용

// function isEqual(original, expected){
//   return original - expected < Number.EPSILON;
// }
// console.log(isEqual(num, 0.1));  // 이렇게하면 true 가 나옴

// 여기서 위에 return Math.abs(original - expected) 하면 절대값을 의미함.
