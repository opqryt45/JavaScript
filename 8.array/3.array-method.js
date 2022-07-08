// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍋'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때

console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 기존의 배열 자체를 수정(업데이트) length를 return 해줌
console.log(fruits);
console.log(length);
// 추가 - 제일 앞
length = fruits.unshift('🥦'); // 기존의 배열 자체를 수정(업데이트) length를 return 해줌
console.log(fruits);
console.log(length);

// 제거 = 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트) , 제거된 아이템을 리턴해줌
console.log(fruits);
console.log(lastItem);

// 제거 = 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트) , 제거된 아이템을 리턴해줌
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트) 삭제된 item을 리턴해줌(배열형태로)
console.log(fruits);
console.log(deleted);

fruits.splice(1, 0, '🍉', '🍈'); // 배열 자체를 수정(업데이트)
console.log(fruits);
fruits.splice(1, 2, '🥰');
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 시작하는 index는 포함이고 끝나는 index는 제외함 > index 0 1 출력
console.log(newArr); // 잘라진 배열 리턴
console.log(fruits);
newArr = fruits.slice(-1); // 제일 뒤에서 한 칸 땡겨진 item 부터 slice가 된다.
console.log(newArr);
newArr = fruits.slice(-2);
console.log(newArr);

// 여러개의 배열을 이어줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3)); // flat은 (숫자)단계 까지만 풀어줌. (몇단계) () 기본은 한단계까지 풀어줌
arr = arr.flat(3); // [1,2,3,4,5,6,3,4]

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);

// 정리 >> API확인하면서 사용하면 좋음
// 내가 이걸 호출하면 배열 자체를 호출하는건지 새로운값으로 반환하는건지 point를 두고 사용하자.
// 인자를 전달해야하는 경우라면 유의해서 사용하자.
