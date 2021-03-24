// 1. Remove duplicates

function duplicate(data) {
  return data.filter(function(item, pos) {
    return data.indexOf(item) == pos;
});
};

let result = duplicate([1,2,3,4,5,1,2,3,4,5]);

console.log(result);

// 2. 

let y = [...Array(101).keys()].map((data, index) => {
  if(data % 3 === 0 && data % 5 === 0) {
    return 'fizzbuzz'
  } else if (data % 3 === 0 && data % 5 !== 0) {
    return 'fizz'
  }  else if (data % 3 !== 0 && data % 5 === 0) {
    return 'buzz'
  } return data;
});

console.log(y.slice(1));

// 3.

console.log("hello" || "world"); // "hello"

console.log("foo" && "bar"); // "bar"

// 4. IIFE

(() => {
  console.log("This is immediate invoked function")
})();
