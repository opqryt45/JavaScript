const fruits = ['🍌', '🍎', '🍇', '🍑','😇'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 👎
fruits[6] = '🍓'; // index로 추가하는 건 좋지 않음, 굳이 한다면 fruits[fruits.length]
// 비어있는 아이템이 발생할 수도 있고 덮어씌워버릴 수도 있음.
console.log(fruits);

delete fruits[1]; // 삭제되고 중간에 empty 로 남아있음(텅텅빔)...
console.log(fruits);

