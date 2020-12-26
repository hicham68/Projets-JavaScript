class Perso{
    constructor(name,powers,mana,damage,life){
        this.name = name
        this.powers = powers
        this.mana = mana
        this.damage = damage
        this.life = life
    }
    information() {
        return " Prénom :  " + this.name + "<br> Pouvoirs : " + this.powers + "<br> Mana :  " + this.mana + "<br> Dégats : " + this.damage + "<br> Vie : " + this.life
      }
}

function createCharacter(){
    console.log("hello")
    let name = document.forms["PERSO MANGAS"]["name"].value
    let powers = document.forms["PERSO MANGAS"]["powers"].value
    let mana = document.forms["PERSO MANGAS"]["mana"].value
    let damage= document.forms["PERSO MANGAS"]["damage"].value
    let life = document.forms["PERSO MANGAS"]["life"].value
    let personnage = new Perso(name,powers,mana,damage,life)
    document.getElementById("persocréer").innerHTML = personnage.information()
}

let tableau2 = ["richard", ['john', 450]]// tableau associatif
let tableau = [   tableau2   , "hello"]
console.log(tableau[0][1][1])




// function myFunction() {
//     var txt = "";
//     if (document.getElementById("id1").validity.rangeOverflow) {
//       txt = "Value too large";
//     } 
//     else if (document.getElementById("id1").validity.rangeUnderflow){
//         txt = "trop petite valeur OK";
//     }
//     else {
//       txt = "Input OK";
//     } 
//     document.getElementById("demo").innerHTML = txt;
//   }