// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
}

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
// If there are no elements in the array, it should return -1.

Array.prototype.last = function() {
    if (this.length == 0) return (-1);
    return this[this.length - 1]
};

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

var compose = function(functions) {
    if (functions.length === 0) {
      return function(x) { return x; };
    }

    return functions.reduceRight((prev, next) => {
       return function(x) {
        return next(prev(x))
       } 
    })
};

const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9
 
// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

// Please solve it without the built-in Array.filter method.

var filter = function(arr, fn) {
    let newArray = [];

    for(let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
    }

    console.log(newArray);

    return newArray;
};

arr = [0,10,20,30];
fn = function greaterThan10(n) { return n > 10; };
const newArray = filter(arr, fn);

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function() {
    return () => "Hello World";
};

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
    let newArray = [];

    for(let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i))
    }

    console.log(newArray);

    return newArray;
};

arr = [1,2,3];
fn = function plusone(n) { return n + 1; };

const newArray = map(arr, plusone); // [2,3,4]