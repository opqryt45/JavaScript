// 퀴즈!!
let num = 2;
// num의 숫자가 짝수이면 👍 , 홀수라면 👎 을 출력하도록 

// if
if(num % 2 === 0){
  console.log('👍');
} else {
  console.log('👎');
}

// ternary
num % 2 ===  0 ? console.log('👍') : console.log('👎');

let emoji = num % 2 === 0 ? '👍' : '👎';    // 바로위에 console.log가 너무많음. emoji로 할당한다음에 console.log(emoji); 한번만 써주면 됨! 코드가 간결해지고 반복성도 줄어듬
console.log(emoji);