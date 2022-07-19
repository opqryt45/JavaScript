// 매개변수의 기본값은 무조건 underfined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default(기본) Parameters a = 1, b = 1

function add(a = 1, b = 2) {
  console.log(a);
  console.log(b);
  console.log(arguments); // 전달된 인자의 정보가 들어 있다.
  // { '0': 2, '1': 3, '2': 3, '3': 4 } a와 b라는 이름으로 각각 맵핑이 되어있다.
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}
add(2, 3, 3, 4); //아무것도 인자를 전달하지 않았을 때만 기본값을 설정해 줄 수 있다. 인자가 전달되면 기본값은 무시됨. (undefined 일 때만 기본값을 쓴다.)
console.log(add(2, 3, 3, 4));

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) { // 얼마나 많은 인자의 갯수가 전달될건지 모를 때 모든것들을 배열로 받고 싶을 떄 ...number로 받아 올 수 있다.
  //인자의 숫자가 정해져있지않으면 배열로 받아 올 수도 있다.
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
