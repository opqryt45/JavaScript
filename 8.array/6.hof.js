const fruits = ['๐', '๐', '๐', '๐'];
// ํ๋์ฉ ์ถ๋ ฅํ๋ ค๋ฉด for๋ฌธ >> ๋งค๋ฒ ์ฌ์ฉํ  ์๋ ์๋ค!(๊ท์ฐฎ,์ง์ ๋ถ)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// ๋ฐฐ์ด์ ๋น๊ธ๋น๊ธ ๋๋ฉด์ ์ํ๋๊ฒ(์ฝ๋ฐฑํจ์)์ ํ ๋
fruits.forEach((value /* , index, array */) => {
  console.log(value);
});
// ํจ์๊ฐ ํ์ค ๋ฐ์ ์๋ค? >> {} ์๋ต๊ฐ๋ฅ > ์ต๋ํ ๊ฐ๋จํ ๋ง๋ค์.
fruits.forEach((value) => console.log(value));

// error function ์ต์ํด์ง์.
// console.log('----------------------------');
// console.log(index);  ์ฌ์ฉํ์ง ์๋ ์ธ์๋ ์๋ต์ด ๊ฐ๋ฅ
// console.log(array);  ์ฌ์ฉํ์ง ์๋ ์ธ์๋ ์๋ต์ด ๊ฐ๋ฅ
// ์ค๋ช: ์ด fucntion() {} ์ฝ๋ฐฑํจ์๋ ๋ฐฐ์ด์ ์์๋ง๋ค
// ํ๋ฒ์ฉ ํธ์ถ๋ ๊ฑฐ์ผ. ๊ทธ๋ฆฌ๊ณ  ์ฌ๊ธฐ ์ธ์๋ ์ด 3๊ฐ๊ฐ ์๋๋ฐ ์์(value)์
// ์์๊ฐ๋ค์ด์๋ index์ ๋ฐฐ์ด์ ์ฒด๋ฅผ ์ ๋ฌํด์ค๊ฑฐ์ผ!! ์ธ์ ? ๋ฐฐ์ด์ ์์๋ง๋ค ํ๋ฒ์ฉ!

// ์กฐ๊ฑด์ ๋ง๋(์ฝ๋ฐฑํจ์) ์์ดํ์ ์ฐพ์๋
const item1 = { name: '๐ฅ', price: 2 };
const item2 = { name: '๐ช', price: 3 };
const item3 = { name: '๐', price: 1 };
const products = [item1, item2, item3, item2];
// if๋ฌธ ๋์ ์ find() ๊ณ ์ฐจํจ์๋ฅผ ์ด์ฉํด๋ณด์.
// find: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ๋ฐํ
// find()๋ ์ฐพ๊ณ ์ ํ๋ ์กฐ๊ฑด์ด ๋ง์ผ๋ฉด (์ฆ, true ๋ก return์ด ๋๋ฉด)
// ํด๋นํ๋ ์์ดํ์ ๋ฐํํด์ฃผ๋ ํจ์์ด๋ค.
let result = products.find((value) => {
  return value.name === '๐ช';
});
console.log(result);
// ์ฝ๋๋ธ๋ญ์์ ๊ฐ์ ๋ฐ๋ก ๋ฆฌํดํ๋ ๊ฒฝ์ฐ์๋ return ์๋ต ๊ฐ๋ฅํจ!!
result = products.find((value) => value.name === '๐');
console.log(result);

// findIndex: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ์ธ๋ฑ์ค๋ฅผ ๋ฐํ
result = products.findIndex((value) => value.name === '๐ฅ');
console.log(result);

result = products.findIndex((value) => value.name === '๐ช');
console.log(result);

// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ๋ถ๋ถ์ ์ผ๋ก ์กฐ๊ฑด(์ฝ๋ฐฑ ํจ์)์ ๋ง๋์ง ํ์ธ
// some: ์กฐ๊ธ์ด๋ผ๋
result = products.some((item) => item.name === '๐ช');
console.log(result);

// ๋ฐฐ์ด์ ์์ดํ๋ค์ดใฃ ์ ๋ถ ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
result = products.every((item) => item.name === '๐ช');
console.log(result);

// ์ด๋๊น์ง๋ ์ฒซ๋ฒ์งธ๋ก ์กฐ๊ฑด์ ๋ง๋ item ๋ง ํธ์ถํ์
// ์ ๋ถ๋ค ์ฐพ๊ณ ์ถ๋ค๋ฉด!! ๋ฐ์์..

// ๋ด๊ฐ ์ํ๋ ์กฐ๊ฑด์ ๋ง๋ ๋ชจ๋  ์์ดํ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก!! >> filter ์ฌ์ฉ
result = products.filter((item) => item.name === '๐ช');
console.log(result);

console.clear();
// Map์ ๋ฐฐ์ด์ ์์ดํ๋ค์ ๊ฐ๊ฐ ๋ค๋ฅธ ์์ดํ์ผ๋ก ๋งตํํ  ์ ์๋, ๋ณํํด์ ์๋ก์ด ๋ฐฐ์ด ์์ฑ!
// ๋ฐฐ์ด์์ ํน์ ํ ์์ดํ์ ๋ค๋ฅธ ์์ดํ์ผ๋ก ๋ณํํด์ ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค ๋ ์ ๋ง ์ ์ฉํ๊ฒ ์ฌ์ฉ!!  ๐ ์ค์ ๐
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: ์ค
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort ๋ฐฐ์ด์ ์์ดํ๋ค์ ์ ๋ ฌ
// ๋ฌธ์์ด ํํ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์์๋ฅผ ์ ๋ ฌํ๊ณ , ๊ธฐ์กด์ ๋ฐฐ์ด์ ๋ณ๊ฒฝ
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); //  [0, 1, 10 ,2, 4, 5] ๋ฌธ์์ด๋ก ์ทจ๊ธ๋๊ธฐ ๋๋ฌธ์ 2๋ณด๋ค 10์ด ๋จผ์ ๋์ด(์ญ์์๋ฆฌ ๋๋ฌธ์)
// ์ํ๋๊ฑด ์ซ์๋ก ๋ณํ! >> ์ํ๋ ๋น๊ต๋์์ ์ฝ๋ฐฑ์ ์ ๋ฌํด์ฃผ๋ฉด ๋๋ค.
// < 0 a๊ฐ ์์ผ๋ก ์ ๋ ฌ, ์ค๋ฆ์ฐจ์
// > 0 b๊ฐ ์์ผ๋ก ์ ๋ ฌ, ๋ด๋ฆผ์ฐจ์
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce ๋ฐฐ์ด์ ์์๋ค์ ์ ์ด์ ์ ์ด์ ๊ฒฐ๊ณผ๊ฐ์ ํ๋๋ก!
// ์ด๋ป๊ฒ ๊ฐ์ ์ ๋ฌ ํ  ๊ฑด์ง๋ callback ํจ์๋ก ์ ๋ฌ ํ  ์ ์๋ค.
// ์ฒซ๋ฒ์งธ ์ธ์๋ ๊ฐ์ ๊ณ์ํด์ ์ ์ฅํ  ์ธ์(callback ํจ์๋ก ์ ๋ฌ) ์ด๊ณ , ๋๋ฒ์งธ ์ธ์๋ sum์ ์ด๊ธฐ๊ฐ์ผ๋ก ์ค์ 
/* result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); */
// ๊ฐ๊ฒฐํ๊ฒ ๋ง๋ค์!!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
