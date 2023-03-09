let user = {
    nama : "Hasan",
    age : 23,
    asal : "Bogor"
};  

let data = Object.keys(user);

let kota = ['bogor', 'batam' ,'bandung'];
let [kota1 , kota2, kota3] = [...kota];

// console.log(typeof kota1);


class Student{
    constructor(name, email, age, score){
        this.name = name,
        this.email = email,
        this.age = age,
        this.score = score
    }
}

let student1 = new Student('Naruto', 'nar@email.com',  20, 90);
let student2 = new Student('Sasuke', 'sas@email.com', 21, 85);
let student3 = new Student('Sai' , 'sa@gmail.com', 22, 75);
let student4 = new Student('Boruto', 'bo@gmail.com', 15, 95);

// console.log(typeof student1);

// function score(array){
//     let scoreStudent = [];
//     for(let i in array){
//         for(let j in array[i]){
//             if(array[i][j] === array[i].score){
//                 scoreStudent.push(array[i][j])
//             }
//         }
//     }
    
//     let totalLength = scoreStudent.length;
//     let high = scoreStudent.length - 1;
//     let sortValue = scoreStudent.sort();
//     let add = (total, angka) => total + angka;
    
//     let resultHigest = sortValue[high];
//     let resultLowest = sortValue[0];
//     let sum = scoreStudent.reduce(add);
//     let resultAverage = sum / totalLength;
//     let objectScore = {
//         Max : resultHigest,
//         Min : resultLowest,
//         Avg : resultAverage
//     }
//     return objectScore;
//     // return `Score tertinggi ${resultHigest}, score terendah ${resultLowest} dan
//     // rata-ratanya adalah ${resultAverage}`;
    
// }

// function age(array){
//     let ageStudent = [];
//     for(let i in array){
//         for(let j in array[i]){
//             if(array[i][j] === array[i].age){
//                 ageStudent.push(array[i][j])
//             }
//         }
//     }
//     let totalLengthAge = ageStudent.length;
//     let highAge = ageStudent.length - 1;
//     let sortValueAge = ageStudent.sort();
//     let add = (total, angka) => total + angka;
    
//     let resultHigestAge = sortValueAge[highAge];
//     let resultLowestAge = sortValueAge[0];
//     let sumAge = ageStudent.reduce(add);
//     let resultAverageAge = sumAge / totalLengthAge;
//     let objectAge = {
//         Max : resultHigestAge,
//         Min : resultLowestAge,
//         Avg : resultAverageAge
//     }
//     return objectAge;
//     // return `Umur tertinggi ${resultHigestAge}, umur terendah ${resultLowestAge} dan 
//     // rata umurnya adalah ${resultAverageAge}`;
// }

let array = [student1, student2, student3, student4];
// console.log(score(array));
// console.log(age(array));

function ScoreAge(array){
    let scoreStudent = [];
    for(let i in array){
        for(let j in array[i]){
            if(array[i][j] === array[i].score){
                scoreStudent.push(array[i][j])
            }
        }
    }
    
    let totalLength = scoreStudent.length;
    let high = scoreStudent.length - 1;
    let sortValue = scoreStudent.sort();
    let add = (total, angka) => total + angka;
    
    let resultHigest = sortValue[high];
    let resultLowest = sortValue[0];
    let sum = scoreStudent.reduce(add);
    let resultAverage = sum / totalLength;

    let ageStudent = [];
    for(let i in array){
        for(let j in array[i]){
            if(array[i][j] === array[i].age){
                ageStudent.push(array[i][j])
            }
        }
    }
    let totalLengthAge = ageStudent.length;
    let highAge = ageStudent.length - 1;
    let sortValueAge = ageStudent.sort();
    // let add = (total, angka) => total + angka;
    
    let resultHigestAge = sortValueAge[highAge];
    let resultLowestAge = sortValueAge[0];
    let sumAge = ageStudent.reduce(add);
    let resultAverageAge = sumAge / totalLengthAge;

    let objectResult = {
        age : {
            Min : resultLowest,
            Max : resultHigest,
            Avg : resultAverage
        },
        Score : {
            Min : resultLowestAge,
            Max : resultHigestAge,
            Avg : resultAverageAge
        }
    }
    return objectResult;
}
// let array = [student1, student2, student3, student4];
console.log(ScoreAge(array));

class Student2{
    constructor(name, email, date){
        this.name = name,
        this.email = email,
        this.date = date
    }
}

let student5 = new Student2('Naruto', 'nar@email.com', "1999/09/25");
let student6 = new Student2('Sasuke', 'sas@email.com', "1998/07/27");
let student7 = new Student2('Sai' , 'sa@gmail.com', "1997/06/20");


let array2 = [student5, student6, student7];
// let date1 = new Date();
let age = [];
array2.forEach( function(element,index){
    for(let i in element){
        console.log(`${i} dan ${element[i]}`);
    }
})