// 접근제어자 - 캡슐화
// private(#), public(기본), protected

class Fruit {
  #name;    // # 붙이면 외부에서는 접근이 불가함
  #emoji; //생략가능 
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {  //여기도 #을 붙일 수 있음. 
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}
const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지';  // #field는 외부에서 접근 불가
//변경이 되버리면 말이 안되는 상황이 생길 수 있음.. 외부에서 변경이 불가능하게 만들고싶다..>접근제어자
// #field는 외부에서 접근이 불가능함.
console.log(apple);
apple.display(); // 외부에서 호출 불가 


// 정리 >> 클래스 내부에서만 사용하는 필드나 함수, 메서드가 있으면 #을붙여서 제어가 가능하다.
