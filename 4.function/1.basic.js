//사용예제 1
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

console.log(fullName('heesan', 'Kim'));
console.log(fullName('hyunwoo','Bae'));
