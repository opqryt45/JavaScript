const fruits = ['๐', '๐', '๐', '๐','๐'];

// ๋ฐฐ์ด ์์ดํ์ ์ฐธ์กฐํ๋ ๋ฐฉ๋ฒ
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// const fruits = ['๐', '๐', '๐', '๐'];
// ์ถ๊ฐ, ์ญ์  - ์ข์ง ์์ ๋ฐฉ์ ๐
fruits[6] = '๐'; // index๋ก ์ถ๊ฐํ๋ ๊ฑด ์ข์ง ์์, ๊ตณ์ด ํ๋ค๋ฉด fruits[fruits.length]
// ๋น์ด์๋ ์์ดํ์ด ๋ฐ์ํ  ์๋ ์๊ณ  ๋ฎ์ด์์๋ฒ๋ฆด ์๋ ์์.
console.log(fruits);

delete fruits[1]; // ์ญ์ ๋๊ณ  ์ค๊ฐ์ empty ๋ก ๋จ์์์(ํํ๋น)...
console.log(fruits);

