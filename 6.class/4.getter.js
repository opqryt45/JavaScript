// 접근자 프로퍼티 (Accessor) >> 클래스의 상태처럼 변수처럼 보이긴한데 실제로는 함수인 것을 말함.

class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // 속성에 가깝기 때문에 함수호출하는것처럼 호출하지 않아도  됨.
  get fullName(){ // 따라서 접근자 프로퍼티를 사용하면 함수지만, 즉, 고정된 값이 아니라
    // 이걸 호출하는 시점에 데이터를 만들어서 리턴을 하는데 이건 속성에 가깝기 때문에
    //(속성의 한 부분이라고 간주되는 이런것들 함수로 만들어야 할때) 속성에 접근하듯이 만들 수 있음.     
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value){ // 할당을 할 때 이 함수가 호출
    console.log('set', value);
  }
}

const student = new Student ('수지','김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName); 
student.fullName= '김철수';
console.log(student);



// 함수처럼 접근하기 싫다 속성처럼 접근하고 싶다.
// 그러면 함수를 사용하지말고 속성처럼 fullname = `${this.lastName} ${this.firstName}`; 하면 되지 않는가 ?
// >> 결과는 밑에   >> 따라서 이럴때 접근자 프로퍼티를 사용한다.

/* class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.lastName} ${this.firstName}`;
  }
  //fullName(){
  //  return `${this.lastName} ${this.firstName}`;
  //}
}

const student = new Student ('수지','김');
student.firstName = '희산';
console.log(student.firstName);
console.log(student.fullName); */
// 이렇게 firstName은 희산이지만 fullName은 김수지로
//나옴 그래서 할때마다 업데이트된 값으로 나올려면 함수를 사용해야함 

// 정리
// >>>>> 무언가를 처리하는 행위는 아닌데 프로퍼티의 
//일부분이긴 한데 무언가를 조합해서 만들거나 또는 get 이나
// set을 할 때 특정한 일을 조금더 해주고 싶다면 
//(ex.특정한숫자를 set할때 0이하의 숫자가 들어오면 0으로)
// 접근자 프로퍼티를 유용하게 사용할 수 있다.