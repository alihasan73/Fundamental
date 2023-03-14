const list = {
	head: {
		value: 6,
		next: { value: 10, next: { value: 12, next: { value: 3, next: null } } },
	},
};
// console.log(list);

// console.log("coba" + "1");

class ListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	size() {
		let count = 0;
		let node = this.head;
		// console.log(typeof this.head);
		while (node) {
			// console.log(node);
			count++;
			node = node.next;
		}
		return count;
	}
	clear() {
		this.head = null;
		return `Data telah terhapus`;
	}
}
// let number = 1000000;
// console.log(number.toLocaleString("id-ID"));
let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(7);
let node4 = new ListNode(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
let list2 = new LinkedList(node1);
console.log(node1);
console.log(list2);
console.log(list2.head);
// console.log(list2.head.next.data);

console.log(list2.clear());
console.log(list2);

// function size() {
// 	let count = 0;
// 	let node = this.head;
// 	while (node) {
// 		count++;
// 		node = node.next;
// 	}
// 	return count;
// }
function recur(a) {
	let hasil;
	hasil = +a;
	// console.log(hasil);
	if (a == 20) {
		return hasil;
	}
	return recur(a + 1);
}
console.log(recur(8));
if (null === true) {
	console.log(true);
} else {
	console.log(false);
}

// if (a.length === 1) {
// 	if (val === huruf) {
// 		console.log(`${idx + 1}`);
// 	}
// }
