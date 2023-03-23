let s = [
  { name: 'Dave', js: 59, react: 64, node: 67 },
  { name: 'George', js: 58, react: 82, node: 65 },
  { name: 'William', js: 51, react: 56, node: 68 },
  { name: 'Anita', js: 62, react: 65, node: 56 },
  { name: 'Thomas', js: 68, react: 72, node: 75 },
  { name: 'Steve', js: 56, react: 51, node: 63 },
  { name: 'Julia', js: 47, react: 77, node: 72 },
  { name: 'Mary', js: 72, react: 55, node: 81 },
];

// a)Calculate the total marks received in jsby all the students.
console.log(
  s.reduce((acc, value) => {
    return acc + value.js;
  }, 59)
);

// d)Create an array of students who scored more than 60 in js.
console.log(s.filter((value) => value.js > 60));

// b)Calculate the number ofstudents who scored more than 70 in react.
let count = 0;
for (var i = 0; i < s.length; i++) {
  s[i].react > 70 ? count++ : 'null';
}
console.log(count);
// c)Calculate the student who scored the highest marks in node.
for (var i = 0; i < s.length; i++) {
  p = Math.max(s[i].node);
}

// e)Create an array of students withtotal marks morethan 175
console.log(
  s.filter((value) => {
    return value.js + value.react + value.node > 175;
  })
);
// f)Create an of JSON having the names of the students with their grades in js,
// react and node. For score greater than or equal to 75, the grade is A.
//  For score greater than equal to 60,
// it is B otherwise it is C
console.log(
  s.map((value) => {
    value.node >= 75
      ? (value.node = value.node + ' ' + 'A')
      : value.node >= 60
      ? (value.node = value.node + ' ' + 'B')
      : (value.node = value.node + ' ' + 'C');
    value.js >= 75
      ? (value.js = value.js + ' ' + 'A')
      : value.node >= 60
      ? (value.js = value.js + ' ' + 'B')
      : (value.js = value.js + ' ' + 'C');
    value.react >= 75
      ? (value.react = value.react + ' ' + 'A')
      : value.node >= 60
      ? (value.react = value.react + ' ' + 'B')
      : (value.react = value.react + ' ' + 'C');
    //   value.node = value.node + ' ' + 'A';
    //   value.js = value.js + ' ' + 'A';
    //   value.react = value.react + ' ' + 'A';

    return value;
  })
);
