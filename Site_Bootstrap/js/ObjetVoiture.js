
class Voiture {
    constructor(model, marque, prix, image, illustration, description) {
      this.model = model
      this.illustration = illustration
      this.description = description
      this.marque = marque
      this.prix = prix
      this.image = image
    }
    information() {
      return " model :  " + this.model + " marque : " + this.marque + " prix :  " + this.prix
    }
  }

let voiture1 = new Voiture("twingo",
                           "Renault", 
                           8014, 
                           "https://images.elite-auto.fr/visuel/RENAULT/renault_19twingoedn1plushb3fbc_angularfront.png",
                           "magnifique voiture",
                           "La Twingo est un modèle d'automobile du constructeur Renault présenté au Mondial de l'automobile de Paris de septembre 1992 et lancé en 1993. L'équipe de conception était dirigée par Yves Dubreil et les dessins ont été réalisés par Jean-Pierre Ploué pour le design extérieur et par Gérard Gauvry pour le design intérieur. Son nom est la contraction des mots « twist », « swing » et « tango »2."
                           )

let voiture2 = new Voiture("Karrera S",
                          "Porche",
                          80000,
                          "https://www.automobile-magazine.fr/asset/cms/840x394/154416/config/107902/la-nouvelle-generation-de-911-est-baptisee-type-992.jpg",
                          "magnifique voiture",
                          "Un design intemporel, interprété de façon contemporaine. La silhouette incomparable de la 911 se caractérise par sa Flyline légendaire. Elle n'a pratiquement pas changé depuis 1963 et caractérise l'ADN de tous les modèles Porsche. Également celui des modèles Cabriolet et Targa de la 911."
                          )

let voiture3 = new Voiture("LaFerrari",
                            "Ferrari",
                            1660000, 
                            "https://i.gaw.to/content/photos/41/89/418925-une-ferrari-laferrari-aperta-debarque-au-quebec.jpg",
                            "magnifique voiture",
                            "La LaFerrari (également appelée F70 ou F150 en interne) est une supercar du constructeur ... la Formule 1, baptisé « Hy-Kers », qui lui octroie un supplément de puissance de 163 ch portant la puissance totale à 963 ch (949 bhp , 81 CV )." 
                            )

let listeVoitures = [voiture2,voiture1,voiture3]

function affichageVehicules(){
  let text =""
  listeVoitures.forEach(voiture => {
      text+="<h2>" +  voiture.marque + " "+voiture.model +  "</h2> <h5> " + " Prix à partir de "+ voiture.prix +"  €</h5> <div> <img src='" + voiture.image +"'  width = '400px' height = '200px' ></img> </div><p> "+ voiture.illustration + "</p><p>" + voiture.description +"</p> <br>"
  });
  let website = document.getElementById("voitures")
  website.innerHTML= text
}

affichageVehicules()



// console.log( listeVoitures[1].information())
// console.log( typeof(voitures) )
function addNewCar(){
  var model = document.forms["modelForm"]["Model"].value;
  var marque = document.forms["modelForm"]["Marque"].value
  var prix = document.forms["modelForm"]["Prix"].value
  var image = document.forms["modelForm"]["Image"].value
  let newCar = new Voiture(model,marque,prix,image)
  listeVoitures.push(newCar)
  affichageVehicules()
}
let nombreCochon = 5
