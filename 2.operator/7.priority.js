let a = 2;
let b = 3;
let result = (a + b) * 4;   //우선순위를 높게할 것을 괄호로 정확하게 명시하는게 좋다. 
console.log(result);
result = a++ + b * 4;  // a++ 은 할당하고 계산되니까 이계산이 끝나서 14가 나온뒤에 a=3 이 되어있음
console.log(result);
console.log(a); // a = 3
