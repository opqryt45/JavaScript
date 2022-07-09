// null , undefined

let variable;
console.log(variable);

variable = null; //null로 할당하면 '아! 이변수는 비어있다는 것을 명시해주는 것.
console.log(variable);

let activeItem; //아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; //활성화된 아이템이 없는 상태!

console.log(typeof null); //null도 object에 해당 함 (확실하게 비어있다는 것을 알 수있음)
console.log(typeof undefined);
