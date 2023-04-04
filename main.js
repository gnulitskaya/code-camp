// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]

function uniteUnique(arr) {
  const finalArray = [];

  for(let i = 0; i < arguments.length; i++) {
    let args = arguments[i];

    for(let j = 0; j < args.length; j++) {
      if (newArray.indexOf(args[i]) < 0) {
        newArray.push(args[i]);
      }
    }
  }
    
  console.log('Sorted Union', newArray);
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

function convertHTML(str) {
  var temp = str.split("");

  for(let i = 0; i < temp.length; i++) {
    switch(temp[i]) {
      case '<':
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  temp = temp.join("");
  console.log(temp);
  return temp;
}

convertHTML(temp);

// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
// sumFibs(75024) should return 60696.

function sumFibs(num) {
  let activeNum = 1;
  let prevNum = 0;
  let summ = 0;

   while(activeNum <= num) {
     if (activeNum % 2 !== 0) {
       summ += activeNum;
     }
     activeNum += prevNum;
     prevNum = activeNum - prevNum;
   }
   
  return summ;
}

sumFibs(4);