//variables
//
//
const possibleCards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
var pickedCards =[]
var myCards = document.getElementsByClassName('cardBack')
console.log(myCards)
//functions
//
//
//shows cards then flips upside down
// function showCards() {
//     for (i = 0; i < myCards.length; i++) {
//         myCards[i].className = 'cardFront'
//     }
// }
// setTimeout(() => {
//     myCards.forEach(element => {
//         element.className = 'cardBack'
//     });
// }, 2000);
//gives each card the game mechanics 
function setCardFunctionality() {
    for (i=0; i < myCards.length; i++){
        myCards[i].addEventListener('click', function(){
            //This if statement checks to make sure your not clicking an already flipped card
            if (this.className == 'cardBack'){
                //This if statement checks to make sure only 2 cards can be picked at one time
                if (pickedCards.length < 2){ 
                    this.className = 'cardFront'
                    pickedCards.push(this.innerHTML)
                    //This if statement checks to make sure 2 are flipped before flipping back or disposing
                    if (pickedCards.length > 1){
                        //checks to make sure they match
                        if (pickedCards[0] == pickedCards[1]){
                            disposeOfCards()
                        }else{
                            flipBack()
                        }
                    // need to move this up into the flip and dispose functions
                    // pickedCards = []  
                    }
                }    
            }
        })
    }
}
//makes cards disappear if they match
function disposeOfCards() {
    var disposed = document.getElementsByClassName('cardFront')
    // setTimeout causes a delay in milliseconds so that you can see the card does not match
    setTimeout(function() {
        disposed[0].className = 'cardDisposed'
        disposed[0].className = 'cardDisposed'
        pickedCards = []
    }, 750)
}
//makes the cards flip back if they don't match
function flipBack() {
    disposed = document.getElementsByClassName('cardFront')
    // setTimeout causes a delay in milliseconds so that you can see the card does not match
    setTimeout(function(){ 
        disposed[0].className = 'cardBack'
        disposed[0].className = 'cardBack'
        pickedCards = []
    }, 750)
}
//assigns cards random values
function shuffleDeck(){
    for (i=0; i < myCards.length; i++) {
        // myCards[i].className = 'cardBack'
        var deckCopy = possibleCards
        var random = Math.floor(Math.random() * deckCopy.length)
        myCards[i].innerHTML = deckCopy[random]
        deckCopy = deckCopy.splice(random,1)
    }
}
//sets up first game
//
//
setCardFunctionality()
shuffleDeck()