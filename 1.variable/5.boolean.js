//불리언 타입

let 참 = true;//문자열을 쓰지 않고 true false 쓰면 불리언 타입을 나타낸다.
let 거짓 = false;
console.log(참);
console.log(거짓);


// 활용예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();

// Falshy 거짓인 값
console.log(!!0);  //!! 붙이면 true냐 false냐  변환해줌
console.log(!!-0); // false
console.log(!!''); //문자열 false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);
