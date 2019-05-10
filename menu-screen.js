// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
      for(let i=0;i<FLASHCARD_DECKS.length;i++){ 
        let option = document.createElement('div'); 
        option.className = "menu-buttons";
        let insidemap = FLASHCARD_DECKS[i]; 
        option.appendChild(document.createTextNode(insidemap.title)); 
        option.addEventListener('click', function() {
          app.flashcards.makeCards(i); 
          app.menu.hide(); 
          app.flashcards.show(); 
        }, false);
        document.getElementById("choices").appendChild(option);
      }
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
