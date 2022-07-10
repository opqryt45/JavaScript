// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);

console.clear();

//주의! (위치에 따라서)
//a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
//++a 값을 먼저 증가하고 필요한 연산을 함
a = 0;
let b = a++; //0이라는 값을 먼저 b에 할당하고 끝난다음에 1로 바뀌어있음.
console.log(b); // 0
console.log(a); // 1

c = 0;
let d = c--;
console.log(d);
console.log(c);

e = 0;
console.log(e++);   //값을 먼저 보여주고 필요한 연산을 하기때문에 0이 나타난다.
console.log(e);



