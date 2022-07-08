// 객체를 손쉽게 만들수 있는 템플릿
// 1.생성자 함수 ( 오래된 고전적인 방법 )
// 2.클래스 ✨ 로 바꿔보자 (클래스란 객체를 생성할 수 있는 템플릿!! (청사진,틀) 객체지향 프로그래밍 이다.) , 현업에서는 생성자 함수 사용 ❌

class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수 , 모든 클래스는 기본적인 생성자가 들어 있어야 한다.
  // 인스턴스 : 클래스를 통해서 만들어진 객체.
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  } /*function 붙이면 안됨*/
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('ornage', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
orange.display();

// obj는 그냥 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };
