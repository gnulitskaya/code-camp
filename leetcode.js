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


// Given an asyncronous function fn and a time t in milliseconds, return a new time limited version of the input function.
// A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  Note that it should reject with a string, not an Error.

var timeLimit = function(fn, t) {
	return async function(...args) {
        console.log(...args, fn, t);
        const timeLimitFunc = fn(...args);

        const timeout = new Promise((_, reject) => {
            setTimeout(() => {reject('Time Limit Exceeded')}, t)
        })

        return Promise.race([timeLimitFunc, timeout]);
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 250);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms


// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

var reduce = function(nums, fn, init) {
    let finalSum = init;

    for(let i = 0; i < nums.length; i++) {
        finalSum = fn(finalSum, nums[i]);
    }

    console.log(finalSum);
    return finalSum;
};


reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0);

// Write a function createCounter. It should accept an initial integer init. 
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init) {
    function increment() {
        console.log('sxasx');
    }

};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function(fn) {
    let oneCall = false;

    return function(...args){
        if(!oneCall) {
            oneCall = true;

            return fn(...args);
        } else {
            return undefined;
        }
    }
};

let fnt = (a,b,c) => (a + b + c)
let onceFn = once(fnt)

onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn

// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

var chunk = function(arr, size) {
    let newArray = [];

    for (let i = 0; i < arr.length; i +=size) {
        newArray.push(arr.slice(i, i + size))
    }

    console.log(newArray)

    return newArray;
};

chunk([1,2,3,4,5], 2);

// Create a class ArrayWrapper that accepts an array of integers in it's constructor. 
// This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

var ArrayWrapper = function(nums) {

    console.log(nums);
};

ArrayWrapper.prototype.valueOf = function() {
    
}

ArrayWrapper.prototype.toString = function() {
    
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"
