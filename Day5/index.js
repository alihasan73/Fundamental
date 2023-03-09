function lowest(...v){
    let j = v.sort()[0];
    return `Nilai terendahnya adalah ${j}` ;
}

console.log(lowest(1,2,4,5,6,7,0));

function higest(...v){
    let k = v.sort();
    let i = k.length - 1;
    return `Nilai tertingginya adalah ${k[i]}`; 
}

console.log(higest(1,2,4,5,6,7,0));

function average(...v){
    let a = v;
    let b = a.length;
    let r = 0;
    for (let i of a){
        r += i;
    }
    let c = Math.floor(r / b);
    return `Rata-rata dari array tersebut adalah ${c}`;
}


console.log(average(1,2,3,4,5));

function character(v){
    let j = v;
    let k = j.pop();
    let l = j.push('and');
    let m = j.push(k);
    let n = j.join();
    let o = n.replace('and,','and'); 
    return o;
}

console.log(character(["Hello", "world", "javascript"]));


function addTwoArray(n,v){
    let a = v;
    let b = n;
    let c = [];
    for(let i = 0; i < a.length; ++i){
        c.push(a[i] + b[i]);
    }
    return c;
}
let a = [5,4,3,2,1];
let b = [1,2,3,4,5];

console.log(addTwoArray(a,b));

// 

// function addChar(n){

// }


// let e = [];

// if(c.includes(n)){
//     console.log(`Character ${n} sudah ada`);
//     console.log(c);
// } else {
//     c.push(n);
//     console.log(c);
// }

let addNumber = (n) => {
    if(c.includes(n)){
        return `Character ${n} sudah ada, Berikut isi arraynya ${c}`
    } else {
        c.push(n);
        return `Character ${n} tidak ada, sehingga perlu ditambahkan dengan hasil akhir ${c}`;
    }
}
let c = [1,2,3,4,5,6,7];
let n = 7;
console.log(addNumber(n));