// return을 명시적으로 작성하지 않으면 코드상에서 자바스크립트 엔진이 자동으로 undefined 이 반환됨!
function add(a, b) {
  // return a + b;   자바스크립트에서 return을 명시하지 않으면 코드상에서 엔진이 return undefined; 으로 처리한다.
  return undefined; // < 그냥 return 적으면 undefined가 생략된것임.
}
console.log('melon');
const result = add(1, 2);
console.log(result);
//함수에서 값을 리턴해야 하는 값이 아니라면 굳이 return undefined; 작성할 필요 없다.

function print(text) {
  // << 단순히 무언가를 print를 하는 함수라면 (즉, 특정한 일을 수행하고 아무것도 반환하지 않는 함수라면) return을 생략할 수 있다. 단순히 명령만 하는 용도.
  console.log(text);
}
// const outcome = print('text');  // 그 어떤값도 반환하지 않기떄문에 return 값을 굳이 작성할 필요가 없다.
// console.log(outcome);
print('text 에용');

//return 을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건에 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num) {
  if (num < 0) {
    return; //return undefined 의 약자라고 생각하면됨.  둘다 써도됨 , 그리고 여기서 return은
            // 함수를 종료해(why?? return undefined 이기 때문)라는 뜻이다 ! . 절대 헷갈리지말자.
  }
  console.log(num);
}

print(12);
print(-10);
