// Object literal  {key : value}
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: 'apple',
  'hello-bye': '👋', //왠만하면 깔끔하게 helloBye 처럼 Camel case를 사용하는게 좋다 .
  0: 1,
  ['hello-bye1']: '👋',
};

//속성, 데이터에 접근하기 위해서는
console.log(apple);
apple.name; // 마침표 표기법 dot notation
console.log(apple.name);
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
console.log(apple['name']);

// 속성 추가
apple.emoji ='🍎';
console.log(apple); // 속성 추가
console.log(apple.emoji);  // 마침표 표기법
console.log(apple['emoji']); // 대괄호 표기법 ( 그냥쓰면안되고 항상 문자열로 감싸줘야 함 )

// 속성 삭제
delete apple.emoji;
console.log(apple);
console.log(apple.emoji);