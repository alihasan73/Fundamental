let h = '';
for(let i = 0; i < 10; i++){
    for(let j = 0; j < i; j++){
        h += ' 0' + i;
    }   
        h += '\n';
}
console.log(h);
// Membuat looping
function looping(n){
    for(let i = 1; i <= n; i++){
        if( i % 3 == 0){
            console.log("fizz");
        } else if (i % 5 == 0){
            console.log("Buzz")
        } else if ( i % 3 == 0 && i % 5 == 0){
            console.log("fizzBuzz")
        } else {
            console.log(i);
        }
    }
    return 'Akhir dari pembagian';
}

console.log(looping(20));

// Calculate body mask

function Count(weight , height){
    let w = weight;
    let h = height;
    let result = Math.round( w / (h**2));
    if(result <= 18.5){
        return "less weight";
    } else if ( result >= 18.5 && result <= 24.9) {
        return "ideal";
    } else if ( result >= 25.0 && result <= 29.9 ){
        return "overweight";
    } else if ( result >= 30.0 && result <= 39.9 ) {
        return "very overweight";
    } else {
        return "obesity";
    }
}
console.log(Count(52, 1.70))

// even number in array

// let arr = [1,2,3,4,5,6,7,8,9,10];
function evenNumber(...n){
    let arr = n;
    let newArr = [];
    for(let i of arr){
        if( i % 2 == 0 ){
        newArr.push(i)
        }
    }
    return newArr;
}


console.log(evenNumber(1,2,3,4,5,6,7,8,9,10));

function converStirng(n){
    let char = n.toString();
    let result = char.split(' ');
    return result;
}

// console.log("Hallo World");
// convert text to array
function converString(n){
    let i = n;
    let j = i.split(' ');
    // console.log(j)
    return j
}


console.log(converString("Hello World"));