const card = {

   init: function()  {

// Je crée ma div de classe card
  const cardElement = document.createElement('div');

  cardElement.classList.add('card');
// Je crée ma div de classe card__inner
  const cardInnerElement = document.createElement('div');
//Je crée des écouteurs d'évènement sur mes cartes
  cardElement.addEventListener('click',card.handleCardClick);

  cardInnerElement.classList.add('card__inner');
// Je crée ma div de classe card__front
  const cardFrontElement = document.createElement('div');

  cardFrontElement.classList.add('card__front');
// Je crée ma div de classe card__back
  const cardBackElement = document.createElement('div');

  cardBackElement.classList.add('card__back');
// Je place mes div sde classe card__front et card__back comme enfant direct de ma div de classe card
  cardInnerElement.append(cardFrontElement,cardBackElement);
// Je place ma div de classe card(qui contient card__front et card__back comme enfant direct) comme enfant direct de ma div card__inner
  cardElement.append(cardInnerElement);

//Pour tester , j'ajoute une taille à ma div container principale et une couleur. Tout est ok.

/*   cardElement.style.backgroundColor = "red";
  
  cardElement.style.height = "50px"; */

 //J'ajoute au DOM l'ensemble de mes divs 
  const containerCard = document.querySelector('.container__card');

  containerCard.append(cardElement);
   },

   handleCardClick: function(){

    const cardElement = document.querySelector('.card__inner');

    cardElement.classList.add('card__inner--returned');

   }
}