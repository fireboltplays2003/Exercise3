# Zero Counter in an Array

## Description

This program creates an array of numbers and counts how many zeros are present in it. The program uses a loop to iterate through the array and increments a counter each time a zero is encountered.

### Features:
- Initializes an array with predefined numbers.
- Counts the number of zeros using a conditional expression inside a loop.
- Outputs the total count of zeros to the console.

### Example:
For the array `[6, 2, 0, 4, 0, 2, 7, 0, 9, 0]`:
- There are 4 zeros in the array.
- The program outputs: `Number of zeros: 4`.

## Programmers

- **Stephanos Khoury**
- **Rula Yosef**

## Code

```javascript
let count = 0;

let array = [6, 2, 0, 4, 0, 2, 7, 0, 9, 0];

// Looping through the array and counting zeros using a conditional expression.
for (let i = 0; i < array.length; i++) {
  array[i] == 0 ? count++ : null;
}
console.log("Number of zeros:", count);
