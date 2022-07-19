// 조건문 Conditional Statement
// switch
// if else if else if else if .....else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 1; // 0:월요일, 1:화요일... 6: 일요일
let dayName;

if(day === 0) {
  dayName === '월요일';
  console.log("헬요일이야..ㅠㅠ")
} else if(day === 1){
  dayName === '화요일';
  console.log("맛있는거없나..")
} else if(day === 2){
  dayName === '수요일';
  console.log("으에아아아")
} else if(day === 3){
  dayName === '목요일';
  console.log("언제금요일오냐구")
} else if(day === 4){
  dayName === '금요일';
  console.log("오늘만버티자!")
} else if(day === 5){
  dayName === '토요일';
  console.log("놀러가자구~")
} else if(day === 6){
  dayName === '일요일';
  console.log("주말벌써...")
}


switch(day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
    default: // else 랑 같은 의미임.
      console.log('해당하는 요일이 없음!')
} // break를 사용하지 않으면 계속해서 넘어가서 '일요일'이 실행이 된다.
  // 해당 조건의 코드가 수행이 된 다음에 멈출 수 있도록 break를 걸어야 한다.
console.log(dayName);

let condition = 'okay'; //okay,good -> 좋음, bad -> 나쁨!
switch(condition){
  case 'okay':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
}  
console.log(text);

