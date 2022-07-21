function createArray(arr1, arr2) {
  const result = {};
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i]] = arr2[i];
  }
  return result;
}

const result1 = createArray(['Jett', 'Ken'], [30, 40]);
const result2 = createArray(['Math', 'Science', 'English'], [85, 90, 75]);
const result3 = createArray(['Pizza', 'Salad', 'Pasta', 'Steak'], [3, 4, 2, 1]);

if (
  checkResult(result1, { Jett: 30, Ken: 40 }) &&
  checkResult(result2, { Math: 85, Science: 90, English: 75 }) &&
  checkResult(result3, { Pizza: 3, Salad: 4, Pasta: 2, Steak: 1 })
) {
  console.log('🎉');
}

function checkResult(result, answer) {
  for (const prop in answer) {
    if (result[prop] !== answer[prop]) {
      return false;
    }
  }

  return true;
}
console.clear();

const ob = {
  name: '엘리',
  ageee: 200,
};

const gB = function (obj, key) {
  return obj[key];
};

console.log(gB(ob, 'name'));

const addKey = function (obj, key, value) {
  obj[key] = value;
};
addKey(ob, 'like', 'cake');
console.log(ob);

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

const makeObj = function (name, age) {
  return {
    name,
    age,
  };
};
console.log(makeObj('희산', '30'));

const 냉장고 = {
  thing: 'apple',
  want: function () {
    console.log(`${this.thing}: "맛있어`);
  },
};
냉장고.want();

function Fruit(name, emoji) {
  // 이 함수안에서 객체를 만들 것이다.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const helloG = new Fruit('Heesan', '😇');
const byeO = new Fruit('나야나','🍏');

console.log(helloG);
helloG.display();

console.log(byeO);
byeO.display();

console.log(helloG.name);
helloG.name = '개명함';
console.log(helloG.name);
console.log(helloG.emoji);
console.log(helloG.display());



