// 함수내부에서 외부로부터 주어진 인자의값을 변경하는 것은 좋지않음. 절대안됨❌
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트,값) 만들어서 반환해야 함
// 원시값 - 값에 의한 복사 (copy by value) >> 크게문제가 되진 않음
// 객체값 - 참조에 의한 복사 (메모리주소) >> 함수 내부에서 인자로 전달된 값을 변경하면 큰 문제가 발생함.

function display(num) {
  num = 5; //❌ 여기서 num은 지역 변수
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

// 나쁜 예제
function displayObj(obj) {
  obj.name = 'bob'; //❌❌❌❌❌❌❌  외부로 부터 주어진 인자(오브젝트)를 내부에서 변경은 나쁜 행동이다. ❌❌❌❌❌❌❌
  console.log(obj);
}
const ellie = { name: 'Ellie' }; // 이 ellie 라는 변수와 인자가 가리키고있는 (obj) 오브젝트가 동일한 객체이므로
// 함수내부에서 오브젝트를 변경하면 이 메모리주소를 참조하고있는 ( 즉 이 ellie 를 가리키고있는) 모든 변수들도 같이 업데이트가 된다.
displayObj(ellie);
console.log(ellie);

function changeName(obj) {
  //  이름부터 변경하는 느낌을 주도록!!
  return { ...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트를 만들기!
}
