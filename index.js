let playerpoints = 0;
let comp_points = 0;

function gameplay(){
    





const buttonpaper  = document.querySelector(".paper");
const buttonstone = document.querySelector(".stone");
const buttonsissors = document.querySelector(".sissors");



const comp_options = ["stone"   , "paper" , "sissors"];
const player_options = [buttonpaper , buttonsissors , buttonstone];
let choiceNumber = 0;
let computerchoice = 0;


let moves = 0;



player_options.forEach(Option => {
    Option.addEventListener('click' , function(){


        



        choiceNumber = Math.floor(Math.random()*3);
        computerchoice = comp_options[choiceNumber];
        console.log(computerchoice);
        const computeroutput = document.querySelector('.cs_score');
        computeroutput.innerText = computerchoice;





    

        comp_choice = comp_options[choiceNumber];

        winner(this.innerText , comp_choice);


   


        
        return result;



    


    })
})

}




let result = document.querySelector(".result");

const winner = (player , computer) => {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie';
    }
    else if(player == "rock"){
        if(computer == 'paper')
        {
            result.textContent = 'Computer Won!'
            comp_points = comp_points+1;


        }
        else if(computer == "sissors"){
            result.textContent = "Player Won!!";
            playerpoints = playerpoints+1;


        }





    }
    else if(player == "paper")
    {
        if(computer == "sissors")
        {
            result.textContent = "Computer Won!";
            comp_points = comp_points+1;
        }
        else if(computer == "rock")
        {
            result.textContent == "You Won!!";
            playerpoints = playerpoints+1;
        }
    }
    else if(player == "sissors")
    {
        if(computer == "paper")
        {
            result.textContent = "You Won!!";
            playerpoints = playerpoints+1;

        }
        else if(computer == "rock")
        {
            result.textContent = "You Lost";
            comp_points = comp_points+1;
        }

    }
    const playerpointdisplay = document.querySelector('.pointofplayer');
    playerpointdisplay.innerText = playerpoints;

    const computerpointDisplay = document.querySelector('.pointsofcomputer');
    computerpointDisplay.innerText = comp_points;
    




   

  


}

gameplay();









