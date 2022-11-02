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

   handleCardClick: function(event){

    // On récupère la carte ciblée au click (on récupère card__front)
    const cardElement = event.target;

    // De là, on récupère le parent de card__front == card__inner
    const divCard = cardElement.parentNode;
    // On ajoute la classe --returned qui permet à la carte ciblée d'être retournée
    divCard.classList.add('card__inner--returned');
    
    const cards = document.querySelectorAll('.card__inner--returned :nth-child(2)');
   
    if (cards.length === 2) {
    // Erreur setTimeout(gamePlan.checkCards(cards),4000); car "() acts as an invocation operator here"

    // Solution 1
    //
    //    setTimeout(() => {gamePlan.checkCards(cards);}, 1000);
    // ou
    //
    // https://stackoverflow.com/questions/7137401/why-is-the-method-executed-immediately-when-i-use-settimeout
    //

    setTimeout(gamePlan.checkCards,4000,cards);


    }

   },

}