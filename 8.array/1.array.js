// 배열 생성 방법
let array = new Array(2); // Array class를 이용해 배열을 만들 수 있음. new Array(size); 
console.log(array);

array = new Array(1, 2, 3); // 생성자 함수를 통해 배열을 만들 수 있다.
console.log(array);

array = Array.of(1, 2, 3, 4, 5, 6, 7, 8,)  // Array 에서 제공하는 .of 이라고하는 static 함수
// * Returns a new array from a set of elements.
console.log(array);

const anotherArray = [1, 2, 3, 4, 5, 6, 7, 8]; // [] 배열리터럴을 이용해 만들 수 있다.
console.log(anotherArray);
array = Array.from(anotherArray);
console.log(Array.from(anotherArray)); // 위 배열을 그대로 복사해서 만들어 줌


array = Array.from('text')  // static 함수 //array = Array.from(anotherArray)
// * Creates an array from an iterable(순회가 가능한) object. 
console.log(array);


// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함! 
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
array = Array.from({ //  배열을 object를 통해서 만들어 보자
  0: '안',  // 0이라는 index key
  1: '녕',  // 1이라는 index key
  length: 2, // 몇개의 아이템이 들어있는지
});
// 오브젝트에 index 라는 key가 있고 length 라는 키에 몇개에 
// 아이템이 들어있는지만 나타내면 배열로 만들 수 있다.
console.log(array);