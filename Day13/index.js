function sum(a, b) {
	return a + b;
}

function multyple(a, b) {
	return a * b;
}

module.exports = { sum, multyple };

let post = 0;
console.log(++post);

let pre = 0;
console.log(pre++);
console.log(pre);

let arr = ["apel", "mangga", "jeruk", "anggur", "semangka"];
let arr2 = ["pir", "naga", "pisang", "q", "2"];
console.log(arr.toString());
let result = arr.join();
console.log(result);

arr2.push("kelengkeng");
arr2.pop();
arr2.shift();
arr2.unshift("pepaya");

console.log(arr2.slice(1, 2));
console.log(arr2.splice(1, 2));

// let foo = ["a", "b", "c", "d", "e"];
// foo.forEach(function (element) {
// 	console.log(element);
// });

let kata = "fafifufefo";
console.log(kata.slice(3));
