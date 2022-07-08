// key 이름과 변수이름이 동일한 경우에는 간략하게 만들 수 있다.

const x = 0;
const y = 0;
const coordinate = { x,y }; // 축약버전<<{x: x, y: y};
console.log(coordinate);

function makeObj(name, age) {
  return {
    name, // <<< name: name,
    age, //<<< age: age,
  };
}// key와 value가 똑같으므로 생략이 가능하다. 
console.log(makeObj('heesan', 30));
