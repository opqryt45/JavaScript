// 단항연산자 Unary Operators

// + (양)
// - (음)
// !(부정)
let a = 5;
a = -a; // -1 * 5 = -5
console.log(a);

a = -a; // -5 = 5
console.log(a);

a = +a;
console.log(a); 

a = -a; // -5
a = +a; // +(-5)
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음

console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); //NaN

console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환함. 
// 1은 true 임 !1 은 false  !!1 = true. 
// 즉 불리언이 아닌 데이터타입을 불리언타입으로 변환하고싶으면 부정을 두번 !! 해서 불리언값으로 변환할수있다.




