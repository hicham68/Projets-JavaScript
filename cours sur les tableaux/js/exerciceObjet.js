
class Voiture {
    constructor(model, marque, prix, image) {
      this.model = model
      this.marque = marque
      this.prix = prix
      this.image = image
    }
    information() {
      return " model :  " + this.model + " marque : " + this.marque + " prix :  " + this.prix
    }
  }

let voiture1 = new Voiture("twingo", "Renault", 8014, "https://images.elite-auto.fr/visuel/RENAULT/renault_19twingoedn1plushb3fbc_angularfront.png")
let voiture2 = new Voiture("Karrera S","Porche",80000,"https://www.automobile-magazine.fr/asset/cms/840x394/154416/config/107902/la-nouvelle-generation-de-911-est-baptisee-type-992.jpg")
let voiture3 = new Voiture("La Ferrarie","Ferrarie",1660000, "https://i.gaw.to/content/photos/41/89/418925-une-ferrari-laferrari-aperta-debarque-au-quebec.jpg" )
voiture2.prix = 5145

let listeVoitures = [voiture2,voiture1,voiture3]

function affichageTableau(){
  let text = " <table><tr><th>Model</th><th>Marque</th><th>Prix</th><th>Image</th></tr>"

  listeVoitures.forEach(voiture => {
      text+="<tr><td>" + voiture.model + "</td><td>"+ voiture.marque+ "</td><td>" +voiture.prix +"  €</td> <td><img src='" +voiture.image +"'  width = '200px' height = '165px' ></td></tr>"
      console.log(voiture.information())
  });
  text+="</table>"
  let website = document.getElementById("voitures")
  website.innerHTML= text

}

affichageTableau()



// console.log( listeVoitures[1].information())
// console.log( typeof(voitures) )
function addNewCar(){
  var model = document.forms["modelForm"]["Model"].value;
  var marque = document.forms["modelForm"]["Marque"].value
  var prix = document.forms["modelForm"]["Prix"].value
  var image = document.forms["modelForm"]["Image"].value
  let newCar = new Voiture(model,marque,prix,image)
  listeVoitures.push(newCar)
  affichageTableau()
}
let nombreCochon = 5
