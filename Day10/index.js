function convertAlfa(n) {
	let alfa = "abcdefghijklmnopkrstuvwxyz";
	let result = alfa.split("");

	let huruf = n;
	let firstChar = huruf[0];
	let secondChar = huruf[1];
	let thirdChar = huruf[2];
	for (let i = 0; i < result.length; ++i) {
		if (huruf.length === 1 && huruf === result[i]) {
			// console.log();
			return `${i + 1}`;
		} else if (huruf.length === 2) {
			let index1 = result.indexOf(firstChar) + 1;
			let index2 = result.indexOf(secondChar) + 1;
			let total = index1 * 26 + index2;
			// console.log(total);
			return total;
		} else if (huruf.length === 3) {
			let index1 = result.indexOf(firstChar) + 1;
			let index2 = result.indexOf(secondChar) + 1;
			let index3 = result.indexOf(thirdChar) + 1;
			let total = index1 * (26 * 26) + index2 * 26 + index3;
			// console.log(total);
			return total;
		}
	}
}

console.log(convertAlfa("ab"));

//
let arr1 = [];
let arr = [7, 2, 2, 2, 4, 4, 4, 5, 5];
let panjang = arr.length;

function findSingle(A, ar_size) {
	for (let i = 0; i < ar_size; i++) {
		let count = [];
		for (let j = 0; j < ar_size; j++) {
			if (A[i] == A[j]) {
				count.push(A[i]);
			}
		}
		if (count.length != 0) {
			return count;
		}
	}
	return "tidak ada yang sama";
}

console.log(findSingle(arr, panjang));

//fibonacci
function prob(n) {
	let arr2 = [1, 1];
	for (let i = 0; i < n; i++) {
		let preVal = arr2.length - 2;
		let nexVal = arr2.length - 1;
		let result = arr2[preVal] + arr2[nexVal];
		arr2.push(result);
	}
	let akhir = arr2.length - 1;
	return arr2[akhir];
}

console.log(prob(13));
