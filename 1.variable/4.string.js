// 문자열타입
let string ="안녕하세요";
string = '안녕!' ;  // 재할당.
console.log(string);

// 특수 문자 출력하는법  >>  \ 써서 탈출해서 쓰면됨   \n , \t 많이씀
string = "'안녕!'";
console.log(string);

string = '안녕!\n엘리야!\t\t내 이름은\\\u09AC ';
console.log(string);

// 템플릿 리터럴 ( Template Literal) ``  :: 특수문자를 사용   꺽새 기호를 이용해서 변수나 계산하는걸 섞을수있고 띄어쓰기도 되서 긴문장을쓸때편함  
let id = '하하';
let greeting = "'안녕!," + id + "😝\n즐거운 하루 보내요!";
console.log(greeting);

greetings = `안녕!, ${id}👋
즐거운 하루 보내요!`;

string = '안녕 \캘리야';
console.log(string);



