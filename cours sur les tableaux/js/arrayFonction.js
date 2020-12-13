console.log("Fichier js chargé !")

let tableauChiffres= [2 ,5 ,8 , 54 , 2019]
let tableauPrenom = ["Zohra" ,"Hicham" ,"Lenny" , "Neo" , "Oscar" , "Safia"]

let tableau2 = ["goku" ,"jotaro" ,"Lenny"]
affichageTableau(tableauPrenom) // execution de fonction 

function miseAjourTableau(texte, array){
    if (texte == ""){
        array.push(texte) // ajoute un element a la fin du tableau 
        console.log("le tableau a été mis à jour" + array)
        affichageTableau(array)
    }
}



function affichageTableau(array){
    let text = "<ul>"      
    array.forEach((prenom, index, tableau ) => {
        console.log(prenom )
        text += " <li>" + prenom +  " <button  onclick='deleteItem(" + '"' + prenom  +'"'+"," + index +",tableauPrenom)'> delete </button></li>";
    });
  
    text += "</ul>"  
    document.getElementById("arrayList").innerHTML = text ;
}

function deleteItem( valeur,index, array ){
    array.splice(index, 1);
    console.log('on supprime ' + valeur )
    affichageTableau(array)
}
