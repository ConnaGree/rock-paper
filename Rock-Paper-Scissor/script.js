 
let choiceName = ['Rock','Paper','Scissor'];
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex];
    return item;
}

let computerSelection = getComputerChoice(choiceName);

let compWin = 0, useWin = 0 , match = 0, playerSelection, res="" ,reset= false;
    
    
    

       
        
        
function compareWinner(){
if (useWin < compWin){
    return "***************** You Lose the Game! ************************";
} else if (useWin > compWin){
    return "***************** You Win the Game! ************************";
}else {
    return "***************** Tie! Play Again ************************"
}
}

function showWinner(){
    if (useWin == 5 || compWin == 5)  {
        res=compareWinner();
        reset=true
    }
    
    } 
function resetValues(){
 if(reset){
        useWin = 0;
        compWin = 0;
        match = 0
        res = ''
        reset = false;
 }
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id
        matchWinner= playRound(button.id,computerSelection)
        
        displayResult()
        resetValues()
        
        showWinner()
        

        
        computerSelection = getComputerChoice(choiceName)

    })
})
function displayResult(){
    const div = document.createElement('div') 
    document.getElementById('one').innerText = `Match: ${++match}`
    document.getElementById('two').innerText = `playerSelection: ${playerSelection}`
    document.getElementById('three').innerText = `computerSelection: ${computerSelection}`
    document.getElementById('four').innerText = `${matchWinner}`
    document.getElementById('five').innerText = `playerScore: ${useWin}      computerScore: ${compWin}`
    document.getElementById('res').innerText = `${res}`
   
    const body = document.querySelector('body')
    body.append(div)
}




function playRound(playerSelection,computerSelection) {

     if (playerSelection == "Rock" && computerSelection == "Paper"){
        ++compWin;
      
        return 'You Lose! Paper beats Rock';
     }
     else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        ++useWin;
        return 'You Win! Scissor beats Paper';
     }
     else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return 'Tie! Play again!';
     }
     else if (playerSelection == "Paper" && computerSelection == "Rock") {
        ++useWin;
        return 'You Win! Paper beats Rock';
     }

     else if (playerSelection == "Scissor" && computerSelection == "Rock") {
        ++compWin;
        return 'You Lose! Rock beats Scissor';
     }
     else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return 'Tie! Play again!';
     }

     else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        ++compWin;
        return 'You Lose! Scissor beats Paper';
    }
    else if (playerSelection == "Scissor" && computerSelection == "Scissor") {
        
        return 'Tie! Play again!';
    }
    else {
        ++useWin;
        return 'You Win! Rock beats Scissor';
    }
   

}





