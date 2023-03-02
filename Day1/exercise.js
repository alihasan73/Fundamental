function luasPersegiPanjang(p, l){
    let result = p * l;
    return result;
}

function kelilingPersegiPanjang(p, l){
    let result = 2 * (p + l) ;
    return result ;
}

function luasLingkaran(r){
    let p = 3.14;
    let result = p * r**2;
    return result;
}

function kelilingLingkaran(r){
    let p = 3.14;
    let result = 2 * p *  r;
    return result;
}

function diameterLingkaran(r){
    let p = 3.14;
    let result = 2 * r;
    return result;
}
function sudutSegita(s , l){
    let result = 180 - s - l;
    return result;
}
function jumlahHari(p , a){
    let result = p - a;
    if (result % 2 == 0 ){
        return "Hari Genap";
    } else {
        return "Hari Ganjil";
    }
}

function convert(n){
    let sisaTahun = n % 365; 
    let sisaBulan = sisaTahun % 12;
    let sisaHari = sisaBulan % 30;
    // let tahun = Math.floor(n / 365);
    // let bulan = Math.floor(sisaHari / 30);
    // let hari = Math.floor()
    let result = sisaTahun + " Tahun " + sisaBulan + " bulan " + sisaHari + " hari";
    return result;
}
console.log(convert(1200));