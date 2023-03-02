for(let i = 1; i <= 3; i++){
    let a = ''
    for(let j = 0; j < i; j++){
        a+= 'a ';
    }
    console.log(a);
}

// Convert celcius to fahrenheit

function Fahrenheit(c){
    let fah = c * 1.8 + 32;
    return `Suhu dari celcius ${c} dikonvert fahrenheit ${fah}`;
}

console.log(Fahrenheit(20));

// Check number

function checkNumber(n){
    if( n % 2 == 0) {
        return `${n} adalah angka genap`;
    } else {
        return `${n} adalah angka ganjil`;
    }
}
console.log(checkNumber(5));

// Check number prime 
function prime(n){
    if ( n <= 1){
        return `${n} Bukan angka prima`;
    } else if ( n == 2){
        return `${n} Adalah angka prima`;
    } else if ( n % 2 == 0 || n % 3 == 0){
        return `${n} Bukan angka prima`;
    } else {
        return `${n} Adalah angka prima`;
    }
}

// sum of number
console.log(prime(6));


function sumNumber(n){
    let a = 0;
    for(let i = 1; i <= n; i++){
        a += i;
    }
    return a;
}
console.log(sumNumber(5));

// factorial number
function factorialNumber(n){
    let a = 1;
    for(let i = n; i >= 1; i--){
        a *= i;
    }
    return a;
}

console.log(factorialNumber(4));

// fibonnaci number
function fibonnaciNumber(n){
    let a = [0,1];
    for(let i = 0; i <= n; i++){
        let p1 = a.length - 2;
        let p2 = a.length - 1;
        let result = a[p1] + a[p2];
        a.push(result);
    }
    return a;
}

console.log(fibonnaciNumber(10));


// let a = [0,1];
// let r = a[0] + a[1];
// a.push(r);
// console.log(a);
// let p1 = a.length - 2;
// let p2 = a.length - 1;
// let result = a[p1] + a[p2];
// a.push(result);
// console.log(a);

