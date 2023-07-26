var arr=Array["rock","paper","scissor"];
var random=Math.random()*arr.length;
random=Math.floor(random);
var computerchoice=arr[random];
var numberofEvents =document.querySelectorAll(".button").length;
for (var i=0;i<numberofEvents;i++){
    document.querySelectorAll(".button")[i].addEventListener("click",function (){

        var buttonInnerHTML=this.innerHTML;
        giveWinner(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        
});
}
var playercount=0;
var computercount=0;
function giveWinner(event){
    if((event=="rock" && computerchoice=="scissor")||(event=="paper" && computerchoice=="rock")||(event=="scissor" && computerchoice=="paper")){
        playercount++;
    }
    else if(event===computerchoice){

    }
    else{
        computercount++;
    }
}









function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}