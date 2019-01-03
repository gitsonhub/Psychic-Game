    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;

    var instructionText = document.getElementById("instruction-text");
    var userGuessText = document.getElementById("userGuess-text");
    var computerGuessText = document.getElementById("computerGuess-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    
    //selects a random letter from a to z
    function random_character() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr(Math.floor(Math.random() * 26) +1, 1);
    }
    
    document.onkeyup = function(event) 
    {
    //records user input
        var userGuess = event.key;
        //converts user intput into lowercase
        var userGuessLower = userGuess.toLowerCase();

        var rchar = random_character();
       
        if (rchar===userGuessLower) 
        {
            wins++;
    
            if (guessesLeft === -1) 
            {
                wins = 0;
                losses = 0;
                guessesLeft = 10;
                userGuessText.textContent = "Press any letter key to play again !";
                computerGuessText.textContent = "";
                winsText.textContent = "";
                lossesText.textContent = "";
                guessesLeftText.textContent = "";   
            }
            else
            {
                userGuessText.textContent = "You guessed: " + userGuessLower;
                computerGuessText.textContent = "The computer guessed: " + rchar;
                winsText.textContent = "wins: " + wins;
                lossesText.textContent = "losses: " + losses;
                guessesLeftText.textContent = "guesses left: " + guessesLeft;
            }

        }
        else 
        {
            losses++;
            guessesLeft--;
            if (guessesLeft === -1) 
            {
                wins = 0;
                losses = 0;
                guessesLeft = 10;
                userGuessText.textContent = " Press any letter key to play again !";
                computerGuessText.textContent = "";
                winsText.textContent = "";
                lossesText.textContent = "";
                guessesLeftText.textContent = "";
            }
            else 
            {
                userGuessText.textContent = "You guessed: " + userGuessLower;
                computerGuessText.textContent = "The computer guessed: " + rchar;
                winsText.textContent = "wins: " + wins;
                lossesText.textContent = "losses: " + losses;
                guessesLeftText.textContent = "guesses left: " + guessesLeft;
            }
        }
    };
