// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };
// console.log(apple);
// console.log(orange);

// 하나하나 만들기 너무 귀찮음 >> 특정한 템플릿에 맞게 객체를 쉽게만들어줄 수 있는 게 필요!!

// 생성자 함수 (대문자로 시작해야함)   >>👍 객체 하나하나 리터럴을 작성할 필요가 없어짐. 템플릿 하나만 만들어놓으면 됨.👍  붕어빵처럼 계속 찍어냄.
function Fruit(name, emoji) { // 이 함수안에서 객체를 만들 것이다. 
  this.name = name; //this 라는 키워드를 이용하면 객체자기 자신을 가리키고 this.name을 하는순간 이 객체에 
  // name이라는 key가 만들어지고 name이라는 key의 값은 name 이라는 인자로 전달된 값이 할당된다.
  this['그림'] = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this['그림']}`);
  };
  // return this; //생략가능    >>>  자동으로 this가 리턴되도록 자바스크립트가 만들어줌 대개는 return 해주지 않고 😜생성자함수에서는😜 this가 자동으로 return 됨
}

const apple = new Fruit('apple','🍎');  //new 라는 키워드를 이용해서 새롭게 찍어 낼 수가 있다. 
const orange = new Fruit('orange','🍊'); // 반복적으로 작성할 필요 없다.

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple['그림']); // 대괄호로 표기  .'그림' ❌
apple.display();


// 👍비슷한 객체를 반복해서 생성해야 하는 경우라면 객체 리터럴을 이용해서 매번 작성하지 않고 생성자 함수를 이용해서 손쉽게 객체를 생성할 수 있다 .!! 👍