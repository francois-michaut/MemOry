const gamePlan = {

init: function() {

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

const cardOneId = cards[0]['id'];

const cardTwoId = cards[1]['id'];

const newId1 = cardOneId.slice(0, -2);

const newId2 = cardTwoId.slice(0, -2);

if (newId1 === newId2 ) {


    const playerMessage = document.createElement('h2');

    playerMessage.innerHTML = 'Bien joué !';

    playerMessage.classList.add('playerMessage');

    const headerElement = document.querySelector('.header');

    headerElement.append(playerMessage);



} else {

    const playerMessage = document.createElement('h2');

    playerMessage.innerHTML = 'Perdu!';
    
    playerMessage.classList.add('playerMessage');
    
    const headerElement = document.querySelector('.header');

    headerElement.append(playerMessage);

};

console.log(newId1);
console.log(newId2);
},

}