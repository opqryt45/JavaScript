const apple = {
  name: 'apple',
  display: function () { // 이 배열의 요소중 한개는 key값이 display이고 값이 함수이다. 
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
console.log(apple);

// key는 display 이고 value(값)는 함수이다. 이 함수는 객체 자신의 이름을 출력하고 관련된 이모지를 출력하는 함수이다.
// 객체안에서 자기 자신의 속성을 접근할 때는 항상 this.key 
// 이처럼 객체는 서로 연관된 정보와 그리고 함수들을 묶어서 관리 할 수 있다.
