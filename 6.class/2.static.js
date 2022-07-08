// 우리가 모든 객체마다 동일하게 참조해야 되는 속성이나 또는 행동이 있다면 그런 경우에는 어떻게 하겠는가?
// 클래스 레벨의 프로퍼티와 메소드를 사용하면됨!  >> 만들어진 인스턴스에 포함이 되지 않음
// 클래스에 그대~~로 남아있게됨. 즉, 클래스의 딱 한번만 만들어지고 각각의 인스턴스에는 들어가있지않음.
// 즉, 클래스의 한번만 정의하고 재사용 할 수 있음. 그래서 인스턴스안에서 class.function() 로 호출 할 수 있다.


// static == 클래스레벨의 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수 , 모든 클래스는 기본적인 생성자가 들어 있어야 한다. 
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // static 을 이용해서 클래스 레벨의 메서드를 만들수 있다.
  static makeRandomFruit(){
    return new Fruit('banana','🍌')  // 클래스 레벨의 메서드에서는 클래스 자체로 아무것도 채워져
                                    // 있지 않은 템플릿상태 이기때문에 this를 참조할 수 없음.
  }
  // 인스턴스 레벨의 메서드
  /*function 붙이면 안됨*/ /*this도 붙이면 안됨 */
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
// console.log(Fruit.name);
// Fruit.display();
//클래스안에서 아무런 것도 (즉, static) 붙이지않으면, 인스턴스레벨이기 때문에 클래스 이름 자체에서는 접근이 안된다. console.log를 통해서 호출할 수가 없다. 클래스 자체에는 데이터가 채워져 있지 않기 때문이다. 템플릿인 상태이기 때문!! 이 자체만으로 호출 불가. 속성을 접근해도 데이터가없기 때문에 호출이 불가함. (nodemon error >> Fruit.display is not a function). 이렇게 instance level 의 property와 method는 꼭, 생성된 instance를 통해서 접근하고 호출해야 한다. 

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);


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

Math.pow();
Number.isFinite(1);  // static 을 이용하면 우리가 객체를 별도로 만들지 않고도 비슷한내용의 함수를 묶어서 관리 할 수 있는 장점이 있다.

// 정리 : 클래스 레벨의 함수는 클래스이름으로 접근이 가능하고 인스턴스 레벨의 프로퍼티와 함수는 이렇게 만들어진 인스턴스를 통해서 접근이 가능하다.
// 그리고 static 이라는 키워드를 붙이면 클래스 레벨로 만들 수 있고 함수 앞에 붙이면 클래스 레벨의 메서드이고 속성앞에도 붙일 수 있다. 
// static MAX_FRUITS = 4; 이렇게 지정해두면 클래스레벨에 지정해두었기 때문에 인스턴스 레벨에서는 접근 할 수 없고, Fruit 이라는 클래스이름을 통해서만 접근이 가능.
// 중요❗️ static 함수는 만들어진 인스턴스 안에는 들어있지 않고. 클래스를 통해서만 접근이 가능하다. 
// 이처러 각각 찍어낼 인스턴스마다 변경될 내용이 아니라 클래스 레벨에서 공통적으로 사용할 수있는 속성이나 함수들에 대해서는 static 을 쓰는 게 편하다.

