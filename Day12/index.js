const Queue = require("./queue.js");
// const kelas = require("./queue.js");

// console.log(Queue);

let a = new Queue(1, "str");
let b = new Queue(2, "nbr");
let c = new Queue(3, "obj");
let d = new Queue(4, "arr");

// let arr = [];
// function setUser(n) {
let arr = [];

arr.push(a, b, c, d);

console.log();
for (let i = 0; i < arr.length; i++) {
	let detikTampilan = Math.floor(Math.random() * 11);
	let detik = detikTampilan * 1000;
	let userId = arr[i].id;
	let userName = arr[i].username;
	// async function prosesData() {
	// console.log(
	// 	`${userName} dengan antrian ${userId} selesai dalam ${detikTampilan} detik`
	// );
	// }
	const prosesData = () => {
		try {
			console.log(
				`${userName} dengan antrian ${userId} selesai dalam ${detikTampilan} detik`
			);
		} catch (err) {
			console.log("salah");
		}
	};

	setTimeout(prosesData, detik);
}
// function setQueue() {}

// let detik = Math.floor(Math.random() * 11) * 1000;
// console.log(detik);
