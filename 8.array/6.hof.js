const fruits = ['🍌', '🍓', '🍇', '🍓'];
// 하나씩 출력하려면 for문 >> 매번 사용할 수는 없다!(귀찮,지저분)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 배열을 빙글빙글 돌면서 원하는것(콜백함수)을 할때
fruits.forEach((value /* , index, array */) => {
  console.log(value);
});
// 함수가 한줄 밖에 없네? >> {} 생략가능 > 최대한 간단히 만들자.
fruits.forEach((value) => console.log(value));

// error function 익숙해지자.
// console.log('----------------------------');
// console.log(index);  사용하지 않는 인자는 생략이 가능
// console.log(array);  사용하지 않는 인자는 생략이 가능
// 설명: 이 fucntion() {} 콜백함수는 배열에 요소마다
// 한번씩 호출될거야. 그리고 여기 인자는 총 3개가 있는데 요소(value)와
// 요소가들어있는 index와 배열전체를 전달해줄거야!! 언제? 배열의 요소마다 한번씩!

// 조건에 맞는(콜백함수) 아이템을 찾을때
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
// if문 대신에 find() 고차함수를 이용해보자.
// find: 제일 먼저 조건에 맞는 아이템을 반환
// find()는 찾고자 하는 조건이 맞으면 (즉, true 로 return이 되면)
// 해당하는 아이템을 반환해주는 함수이다.
let result = products.find((value) => {
  return value.name === '🍪';
});
console.log(result);
// 코드블럭에서 값을 바로 리턴하는 경우에는 return 생략 가능함!!
result = products.find((value) => value.name === '🍙');
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🥛');
console.log(result);

result = products.findIndex((value) => value.name === '🍪');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백 함수)에 맞는지 확인
// some: 조금이라도
result = products.some((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이ㅣ 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪');
console.log(result);

// 이때까지는 첫번째로 조건에 맞는 item 만 호출했음
// 전부다 찾고싶다면!! 밑에서..

// 내가 원하는 조건에 맞는 모든 아이템들을 새로운 배열로!! >> filter 사용
result = products.filter((item) => item.name === '🍪');
console.log(result);

console.clear();
// Map은 배열의 아이템들을 각각 다른 아이템으로 맵핑할 수 있는, 변환해서 새로운 배열 생성!
// 배열에서 특정한 아이템을 다른 아이템으로 변환해서 새로운 배열을 만들 때 정말 유용하게 사용!!  👍 중요 👍
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: 중
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); //  [0, 1, 10 ,2, 4, 5] 문자열로 취급되기 때문에 2보다 10이 먼저나옴(십의자리 때문에)
// 원하는건 숫자로 변환! >> 원하는 비교대상의 콜백을 전달해주면 된다.
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 결과값을 하나로!
// 어떻게 값을 전달 할 건지는 callback 함수로 전달 할 수 있다.
// 첫번째 인자는 값을 계속해서 저장할 인자(callback 함수로 전달) 이고, 두번째 인자는 sum의 초기값으로 설정
/* result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); */
// 간결하게 만들자!!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
