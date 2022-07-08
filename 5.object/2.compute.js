const obj = {
  name: '엘리',
  age: 20,
};
// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근(호출 ,추가, 삭제 etc)하고 싶을때 대괄호 표기법 사용! . 마침표 표기법 ❌
function getValue(obj, key){
  return obj[key]; // 이시점엔 key라는 건 정해져있지 않은 매개변수임.
}
console.log(getValue(obj, 'name'));  //접근하고자 하는 key의 이름은 name이다. 

function addKey(obj, key, value){
  obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);  

function deleteKey(obj, key, value){
  delete obj[key];
}
deleteKey(obj,'age');
console.log(obj);

