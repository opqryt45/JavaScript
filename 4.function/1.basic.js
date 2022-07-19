//사용예제 1

/* 읽는법. add라는 것은 결국 함수 오브젝트가 담겨있는 메모리 주소를 가지고 있다. 그래서 add 라는 함수의 이름은 함수라는 객체가 담겨있는 곳을 가지고 있다. */
// ❗️함수의 이름은 함수를 참조하고 있다. (함수의 객체의 주소를 가지고 있다.)
function add(num1 , num2){
  console.log('function');
  return num1 + num2;    //함수에서 값을 외부로 반환할 떄는 return 키워드를 사용한다.
}
const result = add(1, 2);
console.log(result);

// 따로 result 를 사용하는 경우가 아니라 값을 바로 반환하는 경우라면 변수를 굳이 할당하지 않고 바로 return 해도 상관없다.

//사용예제2
function fullName(firstName, lastName){
  return `${firstName} ${lastName}👋`;
}
// 함수안에 내용만 수정해주면 다른인자로 호출한 함수값 모두가 변경된다. 실용적임.
console.log(fullName('heesan', 'Kim'));
console.log(fullName('hyunwoo','Bae'));
