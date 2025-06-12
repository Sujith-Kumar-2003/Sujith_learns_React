// Push and pop

var arr = [];
arr.push(3);
arr.push(6);
arr.push(10);
arr.push(5);
arr.push(12);
arr.push(18);
// Push adds the element to the end of the array.
console.log(arr);
arr.pop();
arr.pop(3);
// still this removes the last Element. Not the element 3 or element at index 3.
// POP removes the element from the end of the array.
console.log(arr);