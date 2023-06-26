//Récuperation des pièces dapuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json( );

//Creation des elements

for (let i = 0; i< pieces.length; i++){
const article = pieces[i];

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix : ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})` ;

const categorieElement = document.createElement("p");
categorieElement.innerText = `Catégorie : ${article.categorie}`;

const descriptionElement = document.createElement("p");
descriptionElement.innerText = `Description : (${article.description})`;

const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = `Disponibilité : (${descriptionElement==true ? Oui :"Désolé cet article n'est plus disponible"})`

//GESTION DE L'ABSANCE DE TEXTE
descriptionElement.innerText = article.description ?? "(aucune description)";
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
//Attachement au parent
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);
}