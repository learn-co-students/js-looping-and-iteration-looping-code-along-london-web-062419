// Code your solutions in this file

const bday = "surprise"
const cards = ['Lisa', 'Kaitlin', 'Jan']


function writeCards(cards, bday ){
    const results = []
    for (let i = 0; i < cards.length; i++ ){
     results.push(`Thank you, ${cards[i]}, for the wonderful ${bday} gift!`)
 }
 return results
}


function countdown(num){
while (num >= 0){
    console.log( num--)
}

}


// cards.forEach(card => {
//     console.log(`Thank you, ${card}, for the wonderful ${bday} gift.`)
// })



