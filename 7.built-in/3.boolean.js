// Boolean
// boolean 원시타입도 해당하는 객체가 있다.true.valueOf

const isTrue = true; // new Boolean(true); 객체를 사용하면 메모리를 더 소비하기 때문에 굳이 이렇게 객체를 사용할 필요 없음.
console.log(isTrue.valueOf());

/*
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */
// 매우중요 !! ❗️👍
/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'fasle'
 * []
 * {}
 */
