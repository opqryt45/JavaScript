// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🍓' ]

/* fruits1.splice(1, 1, '🥝');
fruits1.splice(3, 1, '🥝');
console.log(fruits1); */ // 이런것 보다는 함수를 이용해서 하자

function replace(array, from, to) {
  const replaced = Array.from(array); // 배열을 얕게 복사(가져온다는 뜻)
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      // delete fruits1[i];
      replaced[i] = to;
    }
  }
  return replaced;
}
// 매개변수에 from, to ₩를 추가해서 👍재사용성을 높인다.👍
// 함수안에서 수정하는건 좋지 못하다.
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));



/*  이런 방법도 있다.
const arr = ['a', 'b', 'c', 'a']; 
// 배열에서 'a' 개수 구하기
let count 
  = arr.filter(element => 'a' === element).length;
document.write(count); */

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(input, search){
  const result = [];
  for (let i = 0; i < input.length; i++){
    if(search.includes(input[i])){
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));