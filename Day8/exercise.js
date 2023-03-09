// Buatlah sebuah class bernama Person dengan properties name, age, dan gender. 
// Buatlah method greet() yang akan mencetak "Halo, nama saya [name], dan saya berusia [age] tahun".
// Tambahkan access modifier private pada property gender. Tambahkan static method createPerson()
//  untuk membuat instance dari class Person dengan mengambil input nama, umur, dan jenis kelamin. 
//  Tambahkan getter dan setter untuk property gender. Buatlah subclass Employee yang mewarisi class Person. 
//  Tambahkan properties salary dan position. Tambahkan method work() yang akan mencetak "Saya sedang
//   bekerja sebagai [position] dan gaji saya adalah [salary]". Buatlah instance dari class Person dan Employee,
//    lalu panggil method greet(), work(), dan setter untuk property gender

class Person{
    #gender;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Halo, nama saya ${this.name}`;
    }
    birthday(){
        let add = this.age + 1;
        return add;
    }
    static createPerson(nama, umur){
        this.nama = nama;
        this.umur = umur;
        // this.#gender = jenisKelamin;
        return `ini adalah methode static createPerson dengan nama ${this.nama}, 
        umur ${this.umur}`;
    }

    get genderPerson(){
        return this.#gender;
    }

    set genderPerson(value){
        this.#gender = value;
    }
}

class Emoloyee extends Person{
    constructor(name, age, position, salary){
        super(name, age);
        this.position = position;
        this.salary = salary;
    }
    work(){
        return `Saya sedang berkerja sebagai ${this.position} dan salary saya adalah ${this.salary}`;
    }
}

let person1 = new Person("sasuke", 15);
console.log(person1.greet());

console.log(Person.createPerson("naruto",16));

person1.genderPerson = "Laki-laki";
console.log(person1.genderPerson);





