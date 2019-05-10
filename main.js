// TODO(you): Modify the file in whatever ways necessary to implement
// the flashcard app behavior.
const app = new App();

var id;
let midpoint = [null,null]; 
let change = [0,0]; 
let translate = [0,0];
let total_translate = [0,0];
let dragging = false;
let rotate_angle = 0;



function begin(event) {
  midpoint[0] = event.clientX; 
  midpoint[1] = event.clientY;
  console.log("X " + midpoint[0]);
  console.log("Y " + midpoint[1]);

  dragging = true; 
  event.currentTarget.setPointerCapture(event.pointerId);
  clearInterval(id); 
}

function drag(event) {
  if (dragging == false) {
    return;
  }
  event.preventDefault();
  translate[0] = change[0] + event.clientX - midpoint[0]; 
  translate[1] = change[1] + event.clientY - midpoint[1]; 
  total_translate[0] += translate[0];
  total_translate[1] += translate[1];
  event.currentTarget.style.transform = 'translate(' +  translate[0] + 'px,' +  translate[1] + 'px) ' ;
  rotate_angle = 0.2*(event.clientX - midpoint[0]);
  event.currentTarget.style.transform += 'rotate(' + rotate_angle + 'deg)'; 
  
  if (event.clientX - midpoint[0] > 150||event.clientX - midpoint[0] < -150) {
  	document.body.style.backgroundColor = '#97b7b7';
  } 
  else {
  	document.body.style.backgroundColor = '#d0e6df';
  }
}

function end(event) {//計算答題正確
	dragging = false;
	if (event.clientX - midpoint[0] > 150||event.clientX - midpoint[0] < -150){
    let ans;
		totalCard ++;
	  if (event.clientX - midpoint[0] > 150){
			ans = document.querySelector(".correct");
      console.log("correct");
    } 
    else if (event.clientX - midpoint[0] < -150) {
	  	ans = document.querySelector(".incorrect");
	  	wrongCards.push([app.flashcards.cardValues[0][totalCard-1],app.flashcards.cardValues[1][totalCard-1]]);
		}
		let ansNum = ans.textContent;
		ans.textContent=Number(ansNum)+1;
		if (totalCard === app.flashcards.cardValues[0].length) {
			app.flashcards.hide();
			app.results.show(Number(document.querySelector(".correct").textContent), Number(document.querySelector(".incorrect").textContent));

    } 
    else {
			app.flashcards.show();
		}

  } 
  else { 
   
    console.log("less than 150px move");
    let backX = translate[0]*-1; 
    let backY = translate[1]*-1;
    let backAngle = rotate_angle*-1;
    event.currentTarget.style.transform = "translate(0px,0px)"; 
    console.log("X moved back by: "+backX);
    console.log("Y moved back by: "+backY);
    event.currentTarget.style.transform += 'rotate(0 deg)'; 
    console.log("Rotated back by:"+backAngle+"degrees");
  }

}
