// Programmers Names: Stephanos Khoury , Rula yosef
//The program makes an array of numbers and counts how many zeros are in it.

let count = 0;

let array = [6, 2, 0, 4, 0, 2, 7, 0, 9, 0];

// Looping through the array and counting zeros using a conditional expression.
for (let i = 0; i < array.length; i++) {
  array[i] == 0 ? count++ : null;
}
console.log("Number of zeros:", count);
