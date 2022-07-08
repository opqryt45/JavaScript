// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// 함수의 이름은 funtion iterate(max, action);

// 나 스스로 했던 것 (실수를 되짚자)
/* const cycle = function (max) {
  for (let i = 0; i <= max; i++) {
    return i;
  }
};

const double = function (max) {
  for (let i = 0; i <= max; i++) {
    return (i * 2);
  }
};

function iterate(max, action) {
  let result = action(max);
  console.log(result);
  return result;
}
iterate(20,cycle); */



// 드림코딩 강의 정답본
/* function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}
function log(num) {
  console.log(num);
}
function doubleAndLog(num) {
  console.log(num * 2);
}
iterate(3, log);
iterate(3, doubleAndLog);

iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));
 */



//다시 해보자
// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// 함수의 이름은 funtion iterate(max, action);

function iterate(max, action){
  for(let i = 0; i < max; i++){
    action(i); // action 아 니가 뭘할지 모르겠지만 i라는 값을 하나씩 증가할떄마다 너를 호출해줄게 . !!
  }
}

function cycle(num){  //action 이 num에 i를 전달해줌. 0,1,2,3,4,5,6...
  console.log(num);
}

function double(num){
  console.log(num * 2);
}
iterate(10, cycle);
iterate(10, double);

//iterate(10, (num) => console.log(num));
//iterate(10, (num) => console.log(num * 2));  <<이렇게 써도됨 . 

setTimeout(() => {      //setTimeout 이라는 고차함수에 의해서 타임이 끝났을때 함수가 callback 함수를 호출 해줌.
  console.log('3초뒤 이 함수가 실행될거에요');
}, 3000);