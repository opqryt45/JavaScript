// 함수 선언문 function name() { }
// 함수 표현식 const name = function() { }
let add = function (a, b) { //굳이 let add = function sum(a,b) 라고 쓸 필요없음
  // 표현식으로 사용되는 함수는 이름을 작성해도 되지만 외부에서는 접근을 할 수 없고 보통 이름을 생략하고 작성한다.
  //이게 왜 가능? 함수도 객체이기때문에 다른변수에 할당 할 수 있다. (앞에서 배움)  (a,b)앞에 함수의 이름이 없음. 이런걸 무명함수 라고 함
  return a + b;
};
console.log(add(1, 2)); // 함수값 자체를 add 변수에 할당하는 것임

// 화살표 함수 const name = () => { }
add = (a, b) => {
  // << 화살표함수 양식
  return a + b;
};
console.log(add(1, 2));

//코드안에서 특별한일이없고 어떤 값을 바로 리턴하는 경우라면, (값만 리턴한다면) , 괄호도 생략, 리턴도 생략 가능 >> 바로 값을 작성할 수 있음.
// 읽는방법 : add2 라는 함수는 a와 b라는 인자를 받아서 바로 더한것을 return 하는 함수구나!
add2 = (a, b) => a + b;
console.log(add2(1, 2));

// 생성자 함수 const object = new Function(); //뒤 객체편에서 다룸

//정리 >> 함수 자체는 선언문일떄는 문이지만 함수는 값으로 표현될 수 있는 선언문이다 .

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  // 함수를 괄호로 묶어서 바로 호출할 수 있는 표현식이다. 자바스크립트에선 잘 쓰이진 않고 프론트엔드에서 가끔쓴다. (즉각적으로무언갈 실행할떄)
  console.log('🥰');
})();
