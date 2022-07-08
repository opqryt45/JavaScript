// 퀴즈 1,2,3 은 5.quiz.js 했던 문제들을 for과 if를 사용하지 않고
// 고차함수를 사용해서 깔끔하게 만들어 보자.



// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🍓' ]

// 나타내는방법 1 (삼항연산자)
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
  // 설명 : item이 from 이라면 to로 바꾸고 item이 from이 아니면 기존의 item을 return 하라.
}

// 나타내는방법 2
/* 
function replace(array, from, to) { 
    return array.map((item) => {
    return item === from ? to : item; <<<< 삼항연산자는 if 구문 대신 간단히 사용
  })
}
*/

// 나타내는방법 3

/* 
function replace(array, from, to) {
    return array.map((item) => {
    if(item === from) {
      return to;
    } else {
      return item;   
    }
  })
}
*/

// 매개변수에 from, to 를 추가해서 재사용성을 높인다.
// 함수안에서 수정하는건 좋지 못하다.
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 나타내는방법 1
/* let input = ['🍌', '🥝', '🍇', '🥝'];
let resultQuiz2 = input.reduce((count, value) => value === '🥝' ? count + 1 : count, 0);
console.log(`count = ${resultQuiz2}`); */

// 나타내는방법2
/* function count(array,item) {
  return array.reduce((count, value) => {
    if (value === item){
      count++;
    }
    return count;
  }, 0);
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝')); */

// 나타내는방법 3
// filter를 호출하면 내가 찾고자하는 item만으로 이루어진 새로운 배열을 return 한다.
// 그 배열의 length가 결국 기존배열에서 내가 찾고자 하는 item의 갯수이다.
function count(array, item) {
  return array.filter((value) => value === item).length;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

/* function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝')); */

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 힌트 ❗️ ~~중에 조건에 맞는 것만 반환해준다 !>>>>>> filter 사용

function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

/* function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓'])); */



// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
// 계획을 먼저 세우자 . 5보다큰 숫자들을 고른다 >filter 새로운배열 만들고 >
// 다 더해서(하나의 값으로 도출) ( reduce ) 평균 내면 되겠다. 
// 즉 filter >> reduce 사용


const result2 = nums //
  .filter((num => num > 5)) // [16, 25, 34 ,21];
  .reduce((avg, num, _/* index */, array) => avg + num / array.length, 0)
// num 자리에 16,25,34,21 이 순차적으로 들어온다.
// 방법 1 > 전부 더해서 나누기 4
// 방법 2 > 각 요소 나누기 4한 값을 전부 더함 (우린 이걸 선택)
// reduce 인자중 index는 사용되지 않기 때문에 회색처리됨, 생략가능함> _ (밑줄로 표시)
console.log(result2);

// 정리
// filter 를 이용해 새롭게 배열을 만듬
// 그 배열에서 reduce를 통해 우리가 얻고자 하는 값을 구함.
// avg라는 변수를 기입. 배열을 빙글빙글 돌면서 num이라는 변수에 각각의 요소들을 전달
// 그것들을 총 배열의 개수만큼 나눈 평균값을 계속 더해나가면서 그 값들이 차곡차곡 쌓임


