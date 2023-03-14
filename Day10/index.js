// function convertAlfa() {

// }

let alfa = "abcdefghijklmnopkrstuvwxyz";
let result = alfa.split("");
// console.log(result.length);

let huruf = "zzz";
let firstChar = huruf[0];
let secondChar = huruf[1];
let thirdChar = huruf[2];
for (let i = 0; i < result.length; ++i) {
	if (huruf.length === 1 && huruf === result[i]) {
		console.log(`${i + 1}`);
	} else if (huruf.length === 2) {
		let index1 = result.indexOf(firstChar) + 1;
		let index2 = result.indexOf(secondChar) + 1;
		let total = index1 * 26 + index2;
		console.log(total);
	} else if (huruf.length === 3) {
		let index1 = result.indexOf(firstChar) + 1;
		let index2 = result.indexOf(secondChar) + 1;
		let index3 = result.indexOf(thirdChar) + 1;
		let total = index1 * (26 * 26) + index2 * 26 + index3;
		console.log(total);
	}
}
