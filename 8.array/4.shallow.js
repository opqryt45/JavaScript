// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign 
// ❗️아무리 많은 obj가 중첩이 되어있어도 이 obj를 어딘가로 전달하거나 복사할 때는 항상
// ❗️메모리 주소가 전달되어진다. 개념이 중요하다 ! 
/* function (obj){
    함수내부에서 obj를 수정하는 것을 좋지 못하다!!! 
} */
const pizza = { name: '🍕', price: 2, owner: /*0x11*/{name: 'Ellie'} };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1); //Array.from() 메서드는 유사 배열 객체(array-like object)나 
// 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만듭니다
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

/* 여기서 알 수 있는 사실은 우리가 배열을 만들고 그걸 이용해서 배열을 만들면
서로 다른 배열 객체를 가지고 있는 걸 볼 수있다. 그래서 메모리상의 배열이
만들어 질 것이고 store1 는 새롭게 만들어진 배열 자체를 가리킬 것이고 store2도 
새롭게 만들어 진 배열을 가리키고 있다. 서로 다른 배열이기 때문에 store2에다만
sushi를 추가하면 store2 에만 추가된다. (당연한 얘기지만 중요 👍) */

pizza.price = 4; 
console.log('store1', store1);
console.log('store2', store2);
// 가격을 인상하니까 배열을 수정하지 않았는데 store 1,2안에 값이 변경 될 걸 볼수있다. >>shallow copy
/* store1 , store 2  각각 안에 배열이 만들어 지는게 아니라 각각의 object를 가리키고있다 (obj의 주소를 가지고있다).
object를 수정한다면 피자의 price를 4로 수정한다면, 이 배열의 들어있는 오브젝트는 
실제로 새롭게 만들어진 오브젝트가 아니라 이 오브젝트의 메모리주소를 가리키고있기 때문에 
변경된사항이 반영되어져 보이는 것이다. */