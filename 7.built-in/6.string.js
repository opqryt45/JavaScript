const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

// 일반 문자열에 .을찍는순간 string에서 사용 가능한 모든 함수들을 살펴볼 수 있음.
console.log(text.length); // 문자열 길이확인
console.log(text[0]); // 배열 index로 접근
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0)); // 함수로 접근
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); // 처음에 찾은 위치를 반환

console.log(text.lastIndexOf('l')); // 뒤에서부터 처음 찾은 위치를 반환

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('H'));
console.log(text.startsWith('h'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '                 space     ';

console.log(space.trim());

// split() 함수는 알고리즘에서 많이 사용한다.
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(' ', 3)); // 공백으로 끊고 세 덩어리만 받자! 
console.log(longText.split(', ', 2));
console.log(longText.split(',', 2)); // 끊어진 것 중에 두 덩어리만 받고싶을때.
// 궁금한거는 MDN 사이트에서 확인하면서 공부할 것.
