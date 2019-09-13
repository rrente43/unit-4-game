//variables
var wins = 0;
var losses =   0;
var goal = 0;
var currentTotal = 0;
var gemValues =[];



var goalbox= document.getElementById('goalnumber');
function gemClick(gemnumber){
    //add the correct gems value to the currenttotal
    currentTotal=currentTotal+gemValues[gemnumber];
console.log(currentTotal);
updateScreen();
if(goal===currentTotal){
    alert('Nice!');
    wins++;
    newGame();
}else if(goal<currentTotal){
        oof.play();
        losses++;
        alert('oof');
        newGame();
    }










}
// //on CLick Events
// $(document).ready(function(){
//     $("#gem").on('click',function(){
//         oof.play();

//     })
// })
// $(document).ready(function(){
//     $("#white").on('click',function(){
//         oof.play();

//     })
// })
// $(document).ready(function(){
//     $("#blue").on('click',function(){
//         oof.play(); 
             

//     })
// })
// $(document).ready(function(){
//     $("#purple").on('click',function(){
//         oof.play();

//     })
// })

//audio
var oof = new Audio();
oof.src = "roblox.mp3";

//
function newGame(){
    for(var i = 1; i<= 4;i++){
        gemValues[i]= (Math.floor(Math.random()*12)+1);
    }
    currentTotal = 0;
    goal =(Math.floor(Math.random()*100)+19);

 updateScreen();

}
function updateScreen(){
    document.getElementById('goalnumber').textContent=goal;
    document.getElementById('totalscore').textContent=currentTotal;
    document.getElementById('wins').textContent='Wins: '+wins;
    document.getElementById('losses').textContent='Losses: '+losses;


}

newGame();