console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다.
console.log(parseInt('12.43')); // 숫자로, 정수로 변환
console.log(parseInt('11')); // 숫자로, 정수로 변환

// URL ( URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);  //<< 전역함수인 encodeURI 함수를 사용하면 한글이나
//특수문자를 사용하는 주소가 있다면 이스케이프 처리를 해준다.
console.log(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);
// 프론트엔드와 백엔드가 서로 통신할 때 유용하게 슬수있음 encode,decode

//전체 URL이 아니라 부분적인 것을 사용할 때는 Component 를 이용
const part = '드림코딩.com';
encodeURIComponent(part);
console.log(encodeURIComponent(part));