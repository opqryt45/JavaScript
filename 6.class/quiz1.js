// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0; // << value 는 외부에서 값을 변경 , 접근 못하게 설정해야함!  ⭐️ private field! (#) 사용!⭐️
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  // 외부에서 value를 읽을수만 , 볼수만 있기 때문에 접근제어자 getter 를 이용해서 value 라는 것을 접근하면 내부에 있는 this
  // 에 private field 의 값을 리턴해 줄 것.
  increment = () => { //increment 만을 이용해서 value를 증가 시킬 수 있음. 외부에서 이 value 의 값을 변경 할 수는 없음.
    this.#value++;
  };
}

// First !!! 클래스를 만들기전에 클래스를 어떻게 사용할건지 사용하는 코드를 작성해본다.
const counter = new Counter(0);
counter.value = 15;   // << 외부에서 변경이 불가능하게 만들고싶다..>접근제어자
// #field는 외부에서 접근이 불가능함.
counter.increment();
counter.increment();
console.log(counter.value); // getter가 없으면 출력할 수 없음
