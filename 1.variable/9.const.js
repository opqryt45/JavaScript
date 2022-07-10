// let 재할당이 가능했다.
let a = 1;
a = 2;

// but const 재할당이 불가능
// 1.상수
// 2.상수변수 또는 변수
const text ='hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1.상수
const MAX_FRUITS = 5; // 상수를 사용할 때는 변수이름을 대문자로 설정
// 한번 정해지면 바뀔 수가 없다.

// 2.재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display:'🍎'
};
// let 대신 const 사용 한다는 것은 apple이 가리키고 있는 메모리셀에 재할당이 불가능 하다는 것.
// 즉, apple에 다른 메모리 주소를 담을 수 없음, but 오브젝트가 가리키고있는 오브젝트의 변경은 가능하다.
// apple ={}; let 보다는 const 선호해라
console.log(apple);
apple.name = 'orange'; /*메모리셀에 재할당이 불가능하다. 하지만 object가 가리키는 곳 안의 변경은 가능하다. 재할당만 되지 않는다. */
apple.display = '🍏';
console.log(apple);


