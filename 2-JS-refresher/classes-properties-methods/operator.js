const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [...numbers, 11];

console.log(newNumbers);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3)); // [1]


// array destructuring
const numbers = [1, 2, 3];
[num1, , num3] = numbers; // de spatie in belangrijk
console.log(num1, num3); // 1 3

// object destructuring
{ name } = { name: "Max", age: 28 };
console.log(name); // Max
console.log(age); // undefined
