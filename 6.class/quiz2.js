// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// First❗️ 사용자입장에서 생각하라 , 계획을 먼저 세워라.

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    // constructor을 이용해서 외부로부터 정보 받아옴
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate; //한달월급계산
  }
}
// 각각의 클래스안에서 뭘 얻고자 하는지 알아야함 (한달에 얼마받는지) , 그리고 한시간동안 받는 금액은 정해져있음 (바뀌는게 아님)
// 그래서 인스턴스에서 결정할 게 아니라 클래스를 만들 때 입력해놓아야함.
// Employee 를 만들면서 payRate를 매번매번 전달하지 않아도 FullTimeEmployee 과 PartTimeEmployee라는 자식클래스를
// 만들어서 얼마를 받는지는 결정되있고 인스턴스에는 나머지 값만 입력해주면 된다.
class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000; // 숫자를 상수 변수로 입력!>> 인자에 숫자를 입력하는건 안좋음 static을 써줘서 깔끔하게 만들어준다.
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

// First❗️ 사용자입장에서 생각하라 , 계획을 먼저 세워라.
const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
// >> 골격이 나옴. '아!! 풀타임을 나타낼 수 있는 임플로이 클래스와 파트타임을 나타낼 수있는 클래스를 만들것이고  이 두가지는
// 동일한 정보를 담고있으니까 임플로이라는 공통된 클래스를 만들고나서 우리가 각각 이 임플로이 클래스를 각각 풀타임과 파트타임으로
// 만들면 되겠구나 !! 그리고 이 공통된 클래스에는 한달월급을 계산할 수있으면 되겠구나!


// 강의를 다 듣고 이 노트를 한번 참고해 보세요 :)
// PAY_RATE static 멤버 필드는 클래스 내부에서만 사용하죠? 외부에서 참조할 필요도, 그리고 다른 값으로 변경하면 안되니
// static private으로 설정해서 외부에서는 값을 보지도, 수정 하지도 못하게 캡슐화 해주는게 좋아요.