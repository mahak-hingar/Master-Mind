const card = document.querySelectorAll(".card");
console.log(card);

var isflipped = false;
var firstcard;
var secondcard;
var count = 0;
card.forEach((card) => card.addEventListener("click",flip));

function flip(){
    if(secondcard != null) {
        return null;
        }
    //console.log("card flipped");
    console.log(this);
    this.classList.add("flip");
    if (!isflipped) {
        isflipped = true;
        firstcard = this;
        
    }
    else{
        secondcard = this ;
        console.log(firstcard);
        console.log(secondcard);
        check();
    }


}
function check(){
    console.log("checking");
    if(firstcard.dataset.image === secondcard.dataset.image ){
        success();
        count++;
        if(count == 8){
        console.log("you won");
        alert("HURRAH! YOU WON THE GAME 🎇 ");
        }
    }
    else{
        fail();
    }
}
function success(){

//console.log("success");
firstcard.removeEventListener("click", flip);
secondcard.removeEventListener("click", flip);
reset();
}
function fail(){
  console.log("fail");
  setTimeout(() =>{
    firstcard.classList.remove("flip");
secondcard.classList.remove("flip");

reset();

  }, 1000 );
 
 
}
function reset(){
    isflipped = false;
firstcard = null;
secondcard = null;

}

//shuffle
(function shuffle(){
    card.forEach((card) => {
        var index = Math.floor(Math.random()*16);
        card.style.order = index;
    });
})();
//window.onload
//shuffle();