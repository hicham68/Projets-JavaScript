
function mensonge(menteur){
    var salade = "J'ai rien fait de mal XD" // string
    var verité = "J'ai fait du mal à frelon"
    if (menteur){ // on peut aussi mettre menteur ==  true 
        return salade
    }
    else  {
        return verité
    }
}

console.log(" Salut john ! " + mensonge(false))

