// let 재할당이 가능했다.
let a = 1;
a = 2;

// but const 재할당이 불가능
// 1.상수
// 2.상수변수 또는 변수
const text ='hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1.상수
const MAX_FRUITS = 5;

// 2.재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display:'🍎'
};
// apple ={}; let 보다는 const 선호해라
console.log(apple);
apple.name = 'orange'; //메모리셀에 재할당이 불가능하다. 하지만 object가 가리키는 곳 안의 변경은 가능하다!
apple.display = '🍏';
console.log(apple);


