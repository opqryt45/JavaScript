function add(a,b){
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add; //❗️함수의 이름을 어딘가에 할당한다는것은 함수를 가리키고있는 그 메모리 주소를 복사해서 할당하는 것과 동일하다.❗️

//console.log(add(3,5)); //함수를 호출할때는 소괄호로 인자를 입력해서 호출.
console.log(add(1));

function add2(a, b){
  console.log(a);
  console.log(b);
  return a + b;
}
const sum2 = add2;
console.log(add2(10,20)); // 소괄호를 이용해서 함수를 호출, 호출할때 함수에서 요구하는 인자값들을 다 전달해줘야 함.
console.log(sum2(1));  // 인자를 전달하지 않으니까 console.log(a); //undefined, b도 마찬가지이고 값은 NaN ( 숫자가 아닌 것들을 더하니까 ) 가 나온다.
// 그리고 인자를 하나만 전달했을 경우 1, undefined 이기떄문에 값은 NaN 가 나온다.
// 1 + undefined = NaN


