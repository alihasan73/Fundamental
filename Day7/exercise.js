let obj1 = {
    // nama : "Naruto",
    // asal : "Konoha",
    a: 1, 
    b: 2,
    d: 4
}

let obj2 = {
    // nama : "Sasuke",
    // asal : "Konoha",
    // age : 20
    a: 1,
    b: 3,
    d: 4

}

function checkObj(obj1, obj2){

    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);
    // let result = key.includes(...key2);
    if (arr1.length != arr2.length){
        return false
    }
    for(let i in arr1){
        if(obj1[arr1[i]] != obj2[arr2[i]]){
            console.log("beda");
            return false;
        }
    }
    return true
}

// console.log(checkObj(obj1,obj2));


function interSection(obj1, obj2){
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);
    let result = {};
    for(let i in arr1){
        if(arr1[i] === arr2[i] && obj1[arr1[i]] === obj2[arr2[i]]){
            result[arr1[i]] = obj1[arr1[i]];
        }
    }
    return result;
}
// console.log(interSection(obj1,obj2));

let data1 = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 2', email : 'student2@mail.com' }
    ]

let data2 = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 3', email : 'student3@mail.com' }
]
let result = [];
for(let i in data1){
    for (let j in data1[i]){
        // console.log(data1[i]);
        // console.log(data2[i][j]);
        if(data2[i][j] != data1[i][j]){
            data1.push(data2[i]);
        }
    }
}
console.log(result);