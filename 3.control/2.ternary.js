// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 :  거짓인 경우
//if else 만 사용하면 구문이라면 ternary를 사용함으로써 조금 더 간편하게 코드를 작성할 수 있다.

let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('😍');
}
fruit === 'apple' ? console.log('🍎') : console.log('😍');

let emoji = fruit === 'apple' ? '🍎' : '😍';
console.log(emoji);