const gamePlan = {

init: function() {

    const imagesArray= [
        'airplane',
        'basket',
        'bus',
        'carrot',
        'cow',
        'dog',
        'firefighter',
        'fir',
        'foot',
        'giraffe',
        'helicopter',
        'lego',
        'lion',
        'pinata',
        'pokemon',
        'rocket'
    ];

    for (const image of imagesArray ) {
        
         card.init();
// Récupération du dernier élément d'un tableau   
//https://bobbyhadz.com/blog/javascript-get-last-element-with-class
         const cardBackElement = Array.from(document.querySelectorAll('.card__back')).pop();

         cardBackElement.style.backgroundImage = `url(../assets/images/${image}.png)`; 

         cardBackElement.id = `${image}-1`;


         card.init();
         // Récupération du dernier élément d'un tableau   
         //https://bobbyhadz.com/blog/javascript-get-last-element-with-class
         const cardBackElement2 = Array.from(document.querySelectorAll('.card__back')).pop();
         
         cardBackElement2.style.backgroundImage = `url(../assets/images/${image}.png)`; 
         
         cardBackElement2.id = `${image}-2`;

         
         
    }

},

}