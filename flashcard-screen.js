// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields

var wrongCards = [];
var totalCard = 0;
//上面兩個是宣告全域變數，方便計算答題的正確數

class FlashcardScreen {
  constructor(containerElement) {
  this.containerElement = containerElement;
  this.deckNum = -1;
  this.cardValues = [];
  }


  show() { 
    const flashcardContainer = document.querySelector('#flashcard-container');
    flashcardContainer.innerHTML = "";
    new Flashcard(flashcardContainer, this.cardValues[0][totalCard], this.cardValues[1][totalCard]);
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  makeCards(deckNum){
    this.deckNum = deckNum;
    this.cardValues = [Object.keys(FLASHCARD_DECKS[deckNum].words), Object.values(FLASHCARD_DECKS[deckNum].words)];
  }
}
