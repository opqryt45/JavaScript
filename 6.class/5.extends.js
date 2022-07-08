// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog{
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('먹자!')
//   }
//   sleep(){
//     console.log('잔다');
//   }
//   play(){
//     console.log('놀자아~');
//   }
// }
// 공통점: 먹고, 자고 . >> 상속을 이용하면 공통된 속성을 그대로 상속 받을 수 있다.(중복을줄여줌)

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();
// 이처럼 공통된 것들 다 호출 가능함.
// 공통관계, 상속관계 가능한것끼리 묶으면됨

class Dog extends Animal {
  constructor(color, ownerName) { // 부모class의 매개변수를 그대로 받아와야함. 여기선 color 
    super(color); //✨super < 키워드임(상속되어있는 부모 class를 가리킴. 부모생성자 임.)✨
    this.ownerName = ownerName; //여기 Dog 클래스에만 적용되는 것이다.
  }

  play() {
    console.log('놀자아'); // 추가로 필요한 게 있다면 함수를 추가 할 수 있음.
  }
  
  eat() {// 오버라이딩 overriding
    // >>자식클래스에서 부모클래스에 있는 함수를 덮어씌우는 행위. 안만들면 당연히 부모클래스에있는 함수가 호출될 것임.
    super.eat(); // 부모의 클래스함수가 출력되고나서 다음에 추가적으로 자식의 클래스함수가 나옴.
    //순서는 바뀌어도 됨
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('까망이', 'heesan');
console.log(dog);
dog.sleep();
dog.eat();
dog.play(); //tiger 에는 없다 dog 에만 있음.
