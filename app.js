//Enpêcher que le formulaire soit envoyer
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit".function(e)) {
        e.preventDefault()
}

//Récupération des données saisies
const prenom = document.getElementById("prenom").value;
const nom = document.getElementById("nom").value;
const sujet = document.getElementById("sujet").value;
const message = document.getElementById("message").value;

//Validation

if (prenom===" || nom===" || sujet===" || message==="){
        alert("Veuillez bien remplir tous les champs.");
        return;
      
}

console.log(document.getElementById("prenom :" + prenom));
console.log(document.getElementById("nom :" + nom));
console.log(document.getElementById("sujet :" + sujet));
console.log(document.getElementById("message :" + message));

//Réinitialisation du formulaire.

document.getElementById("contacForm").reset();
alert("Votre message a été bien envoyé avec succès!");

function redirigerVersProjets() {
        Window.location.href Id="#projets";
}

