var choices=document.querySelectorAll(".choice")
var para=document.getElementById("para")
var choice=["rock","paper","scissors"]
// var userwin=true
var compScore=0
var userScore=0
var comp_html_score=document.getElementById("compscore")
var user_html_score=document.getElementById("userscore")



var compchoice=()=>{
    var comp=choice[Math.floor(Math.random()*3)]
    return comp
}


var drawgame=()=>{
  para.innerText="It's a draw"
  para.style.backgroundColor="black"

}

var winner=(userwin,comp,id)=>{
   if (userwin==true) {
    user_html_score.innerText=userScore
    para.innerText=`You WIN! ${id} beats ${comp}`
    para.style.backgroundColor="green"

   } else {
    comp_html_score.innerText=compScore
    para.innerText=`You Lose! ${comp} beats ${id}`
    para.style.backgroundColor="red"
   }
}


choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
    var id=choice.getAttribute("id")
    var comp=compchoice()
    if (comp==id) {
        drawgame()
    }
    else{
        console.log("compchoice",comp);
        console.log("userchoice",id);
        var userwin=true
        
        if (comp=="paper" && id=="rock") {
            compScore++
            userwin=false
        }
        else if (comp=="rock"&& id=="paper") {
            userScore++
            userwin=true
        } 
        else if (comp=="scissors"&& id=="paper") {
            compScore++
            userwin=false
        } else if (comp=="paper"&& id=="scissors") {
             userScore++
             userwin=true
        } else if (comp=="rock"&& id=="scissors") {
            compScore++
            userwin=false
        } else if (comp=="scissors"&& id=="rock") {
             userScore++
             userwin=true
        } 
        
        
        winner(userwin,comp,id)
        
        
    }
    
    
   })
    
})
