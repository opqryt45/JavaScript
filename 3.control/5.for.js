// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) {}
// 실행순서:
// 1.변수선언문
// 2.조건식의 값이 참이면 {} 코드블럭을 수행
// 3 증감식을 수행
// 4.조건식이 거짓이 될때까지 2번과 3번을 반복한다.

for (let i = 0; i < 5; i++){
  console.log(i);
} //i가 5가 되는 순간 조건식이 거짓. 더이상 반복(실행) 안함

for (let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++){
    console.log(i,j);
  }
}

// 무한루프
//for(;;) {
//}

// 반복문 제어: continue, break;
for(let i = 0 ; i < 20; i++){
  if(i ===10){
    console.log('i가 드디어 10이 되었다!');
    continue // 그 아래에 코드는 무시
    break; //i가 10이 되면 더이상 반복하지 않는다
  }
  console.log(i);
}