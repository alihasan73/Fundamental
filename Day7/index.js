class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Transaction extends Product{
    #total;
    constructor(name, price,Qty){
        super(name, price);
        this.qty = Qty;
    }
    addProduct(){
        let totalProduct = [this.name, this.price, this.qty];
        let idx = totalProduct.length - 1;
        let result = [];
        // totalProduct.forEach((element) => {
        //     for(let i in element){
        //         console.log(i);
        //     }
        // });
        for(let i in totalProduct){
            console.log(i);
            // if( idx === i){
            //     for( let j in totalProduct[i]) {
            //         // console.log(totalProduct[i][j]);
            //         result.push(totalProduct[i][j]);
            //     }
            // }
        }
        // return i;
    }
}


let nama = {
    alatMandi1 : 'sabun',
    alatMandi2 : 'shampo'
}
let harga = {
    price1 : 3000,
    price   : 10000
}
let jumlah = {
    qty1 : 1,
    qty2 : 2
}

let transaction1 = new Transaction(nama,harga,jumlah);
console.log(transaction1.addProduct());