// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]

function uniteUnique(arr) {
  const finalArray = [];
  const newArray = [];

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

convertHTML('temp');

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

// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
// sumPrimes(10) should return 17.

function sumPrimes(num) {

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      
      if (num % i === 0)
        return false;
    }
    return true;
  }

  let sum = 0;
  for(let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      
      sum += i;
    }
  }

  return sum;
}

sumPrimes(10);

// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
// smallestCommons([1, 5]) should return 60.

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);


// Drop it
// Given the array arr, iterate through and remove each element starting from 
// the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

function dropElements(arr, func) {
  let newArray = [];
  let firstIndex = -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      firstIndex = i;
      break;
    }
  }

  newArray = firstIndex == -1 ? [] : arr.slice(firstIndex);
  return newArray;
}

dropElements([1, 2, 3], function(n) {return n > 0;})

// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray.push(...steamrollArray(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }

  console.log('newArray', newArray);

  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. 
//The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i][pre]);
    if (!collection[i][pre]) {
      return false
    }
  }
  return true;
}

truthCheck([
{name: "Quincy", role: "Founder", isBot: false}, 
{name: "Naomi", role: "", isBot: false}, 
{name: "Camperbot", role: "Bot", isBot: true}], 
"isBot");