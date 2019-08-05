// Code your solutions in this file

// writeCards(["Ada", "Brendan", "Ali"], "birthday");



// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);

// const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, occasion) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++ ) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return thankYouCards;
}

writeCards(names);

function countdown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
}
