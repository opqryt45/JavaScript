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
  console.log('π');
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
  name: 'μλ¦¬',
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
console.log(makeObj('ν¬μ°', '30'));

const λμ₯κ³  = {
  thing: 'apple',
  want: function () {
    console.log(`${this.thing}: "λ§μμ΄`);
  },
};
λμ₯κ³ .want();

function Fruit(name, emoji) {
  // μ΄ ν¨μμμμ κ°μ²΄λ₯Ό λ§λ€ κ²μ΄λ€.
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const helloG = new Fruit('Heesan', 'π');
const byeO = new Fruit('λμΌλ','π');

console.log(helloG);
helloG.display();

console.log(byeO);
byeO.display();

console.log(helloG.name);
helloG.name = 'κ°λͺν¨';
console.log(helloG.name);
console.log(helloG.emoji);
console.log(helloG.display());



