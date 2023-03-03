// Perkalian 
function perkalian(n){
    for(let i = 1; i <= 10; i++){
        let result = `${n} x ${i} = ${i * n}`; 
        console.log(result);
    }
    return `Perkalian ${n} Selesai`;
}

console.log(perkalian(9));

// palindrome or not
function palindrome(n){
    let p = n;
    let r = p.split();
    let s = r.reverse();
    let t = s.toString();
    let result = (n === t ? n + " adalah palindrome" : n + "bukan palindrome");
    return result;
}

console.log(palindrome('katak'));

// convert km to cm
function convertKmToCm(n){
    let km = n ;
    let cm = km * 100000;
    return `${n} km = ${cm} cm`;
}

console.log(convertKmToCm(2));

// convert to currency
function currency(n){
    let c = new Intl.NumberFormat('id-ID', {style: 'currency',
    currency: 'IDR',});
    let d = c.format(n);
    return d;
}

console.log(currency(14340));

// remove first letter
function Removeletter(n){
    let s = n.length;
    let a = [];
    for(let i = 0 ; i < s; i++){
        a.push(n[i]);
    }
    a.splice(0,2);
    return `${a.join('')}`;
}

console.log(Removeletter("Hello Hello World World"));


// CamelCase
function CamelCase(r){
    let s = r.split(" ");
    console.log(s.length);
    for(let i = 0 ; i < s.length; i++){
        let a = s[i][0].toUpperCase();
        let b = s[i].substring(1);
        let result = a + b;   
        console.log(result);
    }
    return `${s.length} Kata`;
}
console.log(CamelCase("hello world this"));

// reverse string
function reverseString(n){
    let b = n.split('');
    let c = b.reverse();
    let d = c.join('');
    return d;
}

console.log(reverseString('world'));


let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // creating alphabets
  for (let k = 0; k < 2 * i - 1; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);
