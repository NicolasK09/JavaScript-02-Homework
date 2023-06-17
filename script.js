// number 1
for (let i = 5; i <= 100; i++) {
    console.log(i);
  }
// number 2
  let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
  }
}
 //number 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 5) {
    console.log('არის')
    break;
  }
}

//number 4
let array3 = [1, 2, 3, 4, 5];
let x = 0;

for (let i = 0; i < array3.length; i++) {
  x += array3[i];
}

console.log(15);

//number 5

let array4 = [1, 2, 3, 7, 6, 9];
let sum = 0;

for (let i = 0; i < array4.length; i++) {
  x += array4[i];
}

let average = sum / array4.length;
console.log(4,66);


//number 6
let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
  if (array5[i] !== 7) {
    console.log(array5[i]);
  }
}

//number 7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    "student status": "active"
  };
  
  delete user["student status"];

  //number 8
  let usuario = {
    name: 'giorgi',
    age: 20,
    'student status': 'active'
  };
  
  if (user.age < 18 && user['student status'] === 'active') {
    console.log('Hello');
  } else if (user.name === 'levani') {
    console.log('Hello levani');
  } else if (user['student status'] === 'active' || user.age < 25) {
    console.log('Hello World');
  } else {
    console.log('error');
  }

  //number 9
  let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10]
  ];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > 0) {
        console.log(array[i][j]);
      }
    }
  }

  //number 10

  let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 === 0) {
    console.log(array6[i]);
  }
}

//number 11

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
  ];
  for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
      console.log(users[i]);
      break; 
    }

  }