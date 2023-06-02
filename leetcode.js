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