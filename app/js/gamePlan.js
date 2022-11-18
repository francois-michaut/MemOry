const gamePlan = {

currentPlayer: 'Joueur 1',
playerOneScore : 0 ,
playerTwoScore : 0 ,


init: function() {

    const scoreOne = document.querySelector('.scoring__player--one');

    const scoreTwo = document.querySelector('.scoring__player--two');

    scoreOne.innerHTML = 'Score: 0';

    scoreTwo.innerHTML = 'Score: 0';

    const playerMessage = document.createElement('h2');

    playerMessage.innerHTML = 'Joueur 1, c\'est à vous !';
    
    playerMessage.classList.add('playerMessage');
    
    const headerElement = document.querySelector('.header');

    headerElement.append(playerMessage);

    const imagesArray= [
        'airplane-1',
        'airplane-2',
        'basket-1',
        'basket-2',
        'bus-1',
        'bus-2',
        'carrot-1',
        'carrot-2',
        'cow-1',
        'cow-2',
        'dog-1',
        'dog-2',
        'firefighter-1',
        'firefighter-2',
        'fir-1',
        'fir-2',
        'foot-1',
        'foot-2',
        'giraffe-1',
        'giraffe-2',
        'helicopter-1',
        'helicopter-2',
        'lego-1',
        'lego-2',
        'lion-1',
        'lion-2',
        'pinata-1',
        'pinata-2',
        'pokemon-1',
        'pokemon-2',
        'rocket-1',
        'rocket-2'
    ];
    
    this.randomizeCard(imagesArray);

    for (const image of imagesArray ) {
        
         card.init();
// Récupération du dernier élément d'un tableau   
//https://bobbyhadz.com/blog/javascript-get-last-element-with-class
         const cardBackElement = Array.from(document.querySelectorAll('.card__back')).pop();

         cardBackElement.style.backgroundImage = `url(../assets/images/${image}.png)`; 

         cardBackElement.id = `${image}`;


        // card.init();
         // Récupération du dernier élément d'un tableau   
         //https://bobbyhadz.com/blog/javascript-get-last-element-with-class
       //  const cardBackElement2 = Array.from(document.querySelectorAll('.card__back')).pop();
         
        // cardBackElement2.style.backgroundImage = `url(../assets/images/${image}.png)`; 
         
        //  cardBackElement2.id = `${image}-2`;

         
         
    }

},

//https://www.astucesmobiles.com/comment-melanger-un-tableau-en-javascript/
randomizeCard: function(array){
// renvoie la longeur du tableau , soit 32 images
    let i = array.length;
// Ont commence notre itération à la fin du tableau
    while (--i > 0) {
// Math.floor renvoie à l'entier le plus proche (vers le bas)
// Math.random renvoie un nombre flottant compris entre 0 et 1
        let randIndex = Math.floor(Math.random() * (i+1));
// pour l'exemple, on se retrouve avec un index = à 17        
        [array[randIndex],array[i]] = [array[i], array[randIndex]];
       
    }
    return array;
},

checkCards : function(cards){

let cardOneId = cards[0]['id'];

let cardTwoId = cards[1]['id'];

const newId1 = cardOneId.slice(0, -2);

const newId2 = cardTwoId.slice(0, -2);

if (newId1 === newId2 ) {

    const playerMessage = document.querySelector('.playerMessage');

    playerMessage.innerHTML = 'Bien joué !';

   /*  setTimeout(() => {playerMessage.innerHTML =  ` ${this.currentPlayer} c\'est à vous !`},1000); */

    if(this.currentPlayer == 'Joueur 1 ') {

        gamePlan.playerOneScore ++ ;
        
        const scoreOne = document.querySelector('.scoring__player--one');

        scoreOne.innerHTML = `Score: ${gamePlan.playerOneScore}`;

    } else {

        gamePlan.playerTwoScore ++ ;
        
        const scoreTwo = document.querySelector('.scoring__player--two');

        scoreTwo.innerHTML = `Score: ${gamePlan.playerTwoScore}`;

    }

    /* setTimeout(() => {playerMessage.innerHTML =  ` ${this.currentPlayer} c\'est à vous !`},1000); */

    gamePlan.checkScore(gamePlan.playerOneScore, gamePlan.playerTwoScore,this.currentPlayer);

    const cardsReturned = document.querySelectorAll('.card__inner--returned');

    cardsReturned.forEach(card => {

    setTimeout(() => {card.classList.remove('card__inner--returned')}, 1000);
    setTimeout(() => {card.classList.add('card__inner--returned--find')}, 1000);
    card.parentNode.classList.remove('card');
    card.parentNode.classList.add('card--found');
  

   });

} else {

   const playerMessage = document.querySelector('.playerMessage');

    playerMessage.innerHTML = 'Perdu! ';

    this.currentPlayer = this.currentPlayer === 'Joueur 2 ' ? 'Joueur 1 ' : 'Joueur 2 ' ; 
    
    // équivlalent de :
    /* if( this.currentPlayer === 'Joueur 2') {
        this.currentPlayer = 'Joueur 1';
    } else {
        this.currentPlayer = 'Joueur 2';
    }   */

    setTimeout(() => {playerMessage.innerHTML =  ` ${this.currentPlayer} c\'est à vous !`},1000);
    console.log(cards);

    const cardsReturned = document.querySelectorAll('.card__inner--returned');

    for (let card of cardsReturned) {

        setTimeout(() => {card.classList.remove('card__inner--returned')}, 1000);
    };
    

};
    // On retire les écouteurs d'évènements des cartes ayant la classe card--found
    const cardsFound = document.querySelectorAll('.card--found');
  
    setTimeout(() => {cardsFound.forEach(cards => { cards.removeEventListener('click',card.handleCardClick)})},2000);

    //On remet les écouteurs d'évènements sur les cartes non trouvées
    const allCardElement = document.querySelectorAll('.card');
    
    setTimeout(() => {allCardElement.forEach(cards => { cards.addEventListener('click',card.handleCardClick)})},2000);
    
},

checkScore: function(score1, score2,currentPlayer){
    if( score1 + score2 === 16 ) {
        if(score1 < score2 ) {
            const playerMessage = document.querySelector('.playerMessage');

            playerMessage.innerHTML = "Bravo, joueur 2 vous avez gagné !!!";
        } else if(score1 > score2) {
            const playerMessage = document.querySelector('.playerMessage');

            playerMessage.innerHTML = "Bravo, joueur 1 vous avez gagné !!!";
        } else {
            const playerMessage = document.querySelector('.playerMessage');

            playerMessage.innerHTML = "Egalité, vous pouvez rejouer !!!";
        }

        const buttonElement = document.createElement('button');

        buttonElement.classList.add('refresh__button');

        buttonElement.innerHTML = 'Relancer une partie';

        const containerCard = document.querySelector('.container__card');

        setInterval(() =>containerCard.append(buttonElement) , 1500);

        setInterval(()=> buttonElement.addEventListener('click',() => window.location.reload()),1500);

    } else {

        const playerMessage = document.querySelector('.playerMessage');

        setTimeout(() => {playerMessage.innerHTML =  ` ${currentPlayer} c\'est à vous !`},1000);
    }
}

}