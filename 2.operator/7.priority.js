let a = 2;
let b = 3;
let result = (a + b) * 4; //우선순위를 높게할 것을 괄호로 정확하게 명시하는게 좋다.
console.log(result);
result = a++ + b * 4; // a++ 은 할당하고 계산되니까 이계산이 끝나서 14가 나온뒤에 a=3 이 되어있음

console.log(result);
console.log(a); // a = 3
console.log(4 * 3 ** 2); // 곱하기보다 거듭제곱 (**) 연산자가 우선순위가 더 높다.

// 우선순위가 헷갈리면 괄호를 잘 이용해야 한다. 기본적으로 곱셈,나눗셈이 더하기,빼기 보다 우선순위가 높다.

// 나눗셈은 좌결합성이고 거듭제곱은 우결합성이다.
// 거듭제곱과 나눗셈을 같이사용하면 나눗셈보다 거듭제곱이 먼저 계산된다.
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
let boo = Boolean(false);
if(boo = true) {
  console.log("🎉");
}