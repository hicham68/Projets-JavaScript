/////////////////////////  JEU DE COMBAT MANGA //////
let Hero = "Hicham"
let enemyList = ["Dio Brando" , "Aizen sosuke", 'Madara Uchiwa'] 


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)); // revenvoi un chiffre entre max et 0
}
  


function gameLevel(nameHero){
    let niveau = 1 
    for (let enemi of enemyList){ // le break marche pas avec le forEach
        console.log( nameHero + " Rencontre " + enemi )
        var combatResultat= getRandomInt(10)
        console.log(combatResultat)
        if (0 <= combatResultat && combatResultat <= 5){
            setTimeout(()=>{ 
                console.log(nameHero + " a gagné contre " + enemi)
             }, 2000);
            
        }
        else{ 
            setTimeout(()=>{ 
                console.log(nameHero + " a perdu contre " + enemi) 
                console.log( " Vous avez perdu  au niveau " + niveau)
             }, 2000);
            
            break
        }
        
        console.log( "le niveau atteint est : "+ niveau)
        if (niveau == 3){
            setTimeout(()=>{ 
                console.log( " Bravo" + nameHero + " tu les à tous battu")
             }, 2000);
            
        }
        niveau+= 1
    }
    
}

gameLevel(Hero)