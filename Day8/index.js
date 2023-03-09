class Emoloyee {
    constructor(nama, jabatan, age){
        this.nama = nama;
        this.jabatan = jabatan;
        this.age = age;
    }
}

class Salary extends Emoloyee{
    #hour ;
    constructor(nama,jabatan,age,type){
        super(nama,jabatan,age);
        this.type = type;
    }
    get add(){
        return this.#hour;
    }
    set add(hour){
        this.#hour = hour;
    }
    total(){
        let rupiah = (number)=>{
            return new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR"
            }).format(number);
        }
        if(this.type === "FT"){
            if(this.#hour > 0 && this.#hour <= 6){
                return rupiah(this.#hour * 100000);
            } else if ( this.#hour > 6 ){
                let lembur = this.#hour - 6;
                let total = (6 * 100000) + (lembur * 75000);
                return rupiah(total);
            }
        } else if (this.type === "PT") {
            if(this.#hour > 0 && this.#hour <= 6){
                return rupiah(this.#hour * 75000);
            } else if (this.#hour > 6) {
                let lembur = this.#hour - 6;
                let total = (6 * 75000) + (lembur * 30000);
                return rupiah(total);
            }
        }
    }
}

let result = new Salary('udin','HRD',20,'FT');
let result2 = new Salary('ujang','Manager',30,'PT');

// result.add = 6;
// result2.add = 11;

// console.log( result2.total());


// class Player{
//     constructor(name, health = 100, power = 10){
//         this.name = name;
//         this.health = health;
//         this.power = power;
//     }
//     hit(player){
//         player.health -= this.power;
//     }
//     userItem(){

//     }
//     showStatus(){

//     }
// }

// class shootingGame {
//     max = 3;
//     constructor(player1,player2){
//         this.player1 = player1;
//         this.player2 = player2;
//     }
//     randomItem(){
//         let ranItem =  Math.floor(Math.random() * this.max);
//         if(ranItem == 0 ){
//             return this.player1.health += 0;
//         } else if (ranItem == 1){
            
//         }
//     }
//     start(){

//     }


    class Player {
        constructor(name) {
          this.name = name;
          this.health = 100;
          this.power = 10;
        }
      
        hit(power) {
          this.health -= power;
        }
      
        useItem(item) {
          if (item.health) {
            this.health += item.health;
          }
          if (item.power) {
            this.power += item.power;
          }
        }
      
        showStatus() {
          console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
        }
      }
      
      class ShootingGame {
        constructor(player1, player2) {
          this.player1 = player1;
          this.player2 = player2;
        }
      
        getRandomItem() {
          const random = Math.floor(Math.random() * 2);
          if (random === 0) {
            return { health: 10, power: 0 };
          } else {
            return { health: 0, power: 10 };
          }
        }
      
        start() {
          let currentPlayer = this.player1;
          let otherPlayer = this.player2;
          while (currentPlayer.health > 0 && otherPlayer.health > 0) {
            // Get random item for each player
            const currentItem = this.getRandomItem();
            const otherItem = this.getRandomItem();
      
            // Show each player status before shooting
            console.log("Before shooting:");
            this.player1.showStatus();
            this.player2.showStatus();
      
            // Current player shoots other player
            console.log(`${currentPlayer.name} shoots ${otherPlayer.name} with power ${currentPlayer.power}`);
            otherPlayer.hit(currentPlayer.power);
      
            // Show each player status after shooting
            console.log("After shooting:");
            this.player1.showStatus();
            this.player2.showStatus();
      
            // Apply items to players
            currentPlayer.useItem(currentItem);
            otherPlayer.useItem(otherItem);
      
            // Switch player
            [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
          }
      
          // Show winner name
          if (this.player1.health <= 0) {
            console.log(`${this.player2.name} wins!`);
          } else {
            console.log(`${this.player1.name} wins!`);
          }
        }
      }
      
      // Example usage
      const player1 = new Player("Player A");
      const player2 = new Player("Player B");
      const shootingGame = new ShootingGame(player1, player2);
      shootingGame.start();

