// Perkalian 
function perkalian(n){
    for(let i = 1; i <= 10; i++){
        let result = `${n} x ${i} = ${i * n}`; 
        console.log(result);
    }
    return `Perkalian ${n} Selesai`;
}

console.log(perkalian(9));

// 