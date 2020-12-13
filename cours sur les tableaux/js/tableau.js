

let persoMangas = ['Son Goku', 'Jotaro Joestar',"Gojo Satoru","Naruto Uzumaki","Itadori Yuji","Ichigo Kurosaki","Monkey D.Luffy"];

// function direBonjour(personage,personage2){ // fonction a plusieurs arguments
//     console.log( "bonjour " + personage + " et toi " + personage2 + " comment vas-tu ?")
// }
// const name = 2020
// console.log(name )


const direBonjour = (personage, personage2) =>{  // on met la valeur d' un call back dans une constante pour creer une fonction
    console.log( "bonjour " + personage + " et toi " + personage2 + " comment vas-tu ?")
};


direBonjour(persoMangas[0],persoMangas[3]) // execution de la fronction défini plus haut 
console.log(persoMangas.length); // affiche le nombre d'élément du tableau avec .lenght = longueur



persoMangas.forEach((value, index)=>{
    value = "saitama" 
    // console.log(value, index)  
});
console.log(persoMangas)
console.log( persoMangas.indexOf('Naruto Uzumaki')); // renvoi le numéro d'index de la valeur  si renvoi -1 la valeur n' existe pas dans le tableau


(arg1, arg2)=>{
    console.log("callback")
}


