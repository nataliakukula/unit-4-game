$(document).ready(function() {

    //initilize variables
    var wins = 0;
    var losses = 0;
    var result = 0;
    var computerRandom;
    var randomBtn1;
    var randomBtn2;
    var randomBtn3;
    var randomBtn4;
    var randomBtn5;

    //create a game start function: goal result, assigning numbers to buttons
    function gameReset() {
        result = 0;
        randomNumber();
        randomButtons();
        $("#result").empty();
        };

        //call gameRest function to set the state of the app
        gameReset();

    //have the computer choose a number at random
    function randomNumber() {
        computerRandom = Math.floor(Math.random() * 65 + 35);
        $("#computer-random").text(computerRandom);
        console.log("Computer Random: ", computerRandom);
    };
    
    //set up a function to be called to generate a random number for all buttons
    function randomButtons() {
        randomBtn1 = Math.floor(Math.random() * 19 + 1);
        randomBtn2 = Math.floor(Math.random() * 19 + 1);
        randomBtn3 = Math.floor(Math.random() * 19 + 1);
        randomBtn4 = Math.floor(Math.random() * 19 + 1);
        randomBtn5 = Math.floor(Math.random() * 19 + 1);
        };

        //call the randomButtons function to set the number values for each button
        randomButtons();

    //set up a function to be called whenever the user wins or loses
    function results() {

        if (result === computerRandom) {
            wins++;
            $("#result-message").text("You won 🤙🏼  - Play again!");
            $("#wins").text(wins);
            gameReset();

        } else if (result > computerRandom) {
            losses++;
            $("#result-message").text("You lost 👅  - Play again!");
            $("#losses").text(losses);
            gameReset();
        };
        };

    //set up the on click event that adds button values and displays the result
    $("#button1").on("click", function() {
        result+= parseInt(randomBtn1);
        $("#result").text(result);
        results()
        console.log("button 1: ", randomBtn1, "result: ", result);
    });

    $("#button2").on("click", function() {
        result+= parseInt(randomBtn2);
        $("#result").text(result);
        results()      
        console.log("button 2: ", randomBtn2, "result: ", result);
    });

    $("#button3").on("click", function() {
        result+= parseInt(randomBtn3);
        $("#result").text(result);
        results()
        console.log("button 3: ", randomBtn3, "result: ", result);
    });

    $("#button4").on("click", function() {
        result+= parseInt(randomBtn4);
        $("#result").text(result);
        results()
        console.log("button 4: ", randomBtn4, "result: ", result);
    });

    $("#button5").on("click", function() {
        result+= parseInt(randomBtn5);
        $("#result").text(result);
        results()
        console.log("button 5: ", randomBtn5, "result: ", result);
    });

    //create an additional on click event for a reset button
    $("#reset").on("click", function() {
        
        // Call gameReset function to reset the state of our app
        gameReset();
      });
      
    });