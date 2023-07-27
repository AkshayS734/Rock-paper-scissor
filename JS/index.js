var numberofEvents =document.querySelectorAll(".buttons").length;
for (var i=0;i<numberofEvents;i++){
    document.querySelectorAll(".buttons")[i].addEventListener("click",function (){

        var buttonInnerHTML=this.innerHTML;
        giveWinner(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        
});
}

function giveWinner(event){
    var playercount=0;
    var computercount=0;
    var arr=Array["rock","paper","scissor"];
    var random=Math.random()*arr.length;
    random=Math.floor(random);
    var computerchoice=arr[random];
    if((event=="rock" && computerchoice=="scissor")||(event=="paper" && computerchoice=="rock")||(event=="scissor" && computerchoice=="paper")){
        playercount++;
    }
    else if(event===computerchoice){

    }
    else{
        computercount++;
    }
    var score1=document.querySelector(".player");
    score1.textContent=playercount;
    var score2=document.querySelector(".computer");
    score2.textContent=computercount;

}










function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}