// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수(외부로부터 주어지는 함수)이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨

function calculator(a, b, action) { // 함수의 참조값을 action으로 전달 하는 것.
  //calculator 라는 함수는 직접적으로 계산하는 건 아니고
  //더하고싶은지 곱하고싶은지 정해져 있지 않지만
  //특정한 일을 수행하는 action 이라는 함수를 전달 받을 것이다.
  if (a < 0 || b < 0) {
    return;
    // 둘중에 하나라도 작다면 계산하지 않고 바로 return
    // action 이라는 콜백은 영원히 호출되지 않음
    // 콜백함수는 고차함수의 내부에서 필요한 순간에 
    // 호출하고 싶을떄 호출해줌.

  }
  let result = action(a, b); // 외부로 부터 전달받는 action 함수를 콜백함수라고 한다.
  console.log(result);
  return result;
}
calculator(-1, -1, add); //여기서 add 는 호출된게 아니라 add라는 이름만 전달했으므로 위에서 선언된 add의 참조값을 콜백함수형태로 전달해주고 있다.
//calculator(1, 2, multiply);
