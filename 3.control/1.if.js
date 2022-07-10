// 조건문 Conditional Statement
// if(조건) {} 조건이 맞을때만 {}안에 코드를 실행
// 즉 그말은 ()안에 조건이 false(boolean 값)일 경우 코드 실행 안됨.
// if(조건) {} else {}
// if(조건1) {} else if(조건2){} else {}
let fruit = 'banana';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('🍕');
  console.log('과일보다는 피자가 훨씬 맛있지!!');
}
if (2 < 1) {
  console.log('출력되면 안됨!'); //if 안에가 불리언값이 false면 출력안됨, true면 출력
}
