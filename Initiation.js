let bonbon = "haribot" // initialisation de la variable
let nombreBonbon = 50
let perteBonbon = 20
console.log("Il y a " + nombreBonbon + " " + bonbon + " dans ma poche." )  // concatenation = fusion de differentes types de variable 
nombreBonbon -= perteBonbon


if (nombreBonbon < 50){
    console.log(" Merde j'ai perdu " + perteBonbon + " bonbons")
    console.log("Il y a " + nombreBonbon + " " + bonbon + " dans ma poche." )  // concatenation = fusion de differentes types de variable 
    
}

else if (nombreBonbon > 50){
    console.log(" Super j'ai gagné " + nombreBonbon + " bonbons")
    console.log("Il y a " + nombreBonbon + " " + bonbon + " dans ma poche." )  // concatenation = fusion de differentes types de variable 
    
}
else {
    console.log("J'ai toujours mes bonbons")
}