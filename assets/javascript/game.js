//Jquery here
$(document).ready(function() {

    // 1. Variables Here for my geode button classes - hidden value is between 1 - 12.
    var purpleAmnt = Math.floor((Math.random() * 12) + 1);
    var whiteAmnt = Math.floor((Math.random() * 12) + 1);
    var greenAmnt = Math.floor((Math.random() * 12) + 1);
    var blueAmnt = Math.floor((Math.random() * 12) + 1);



    // 2. Random Number of computerNumber - set between 19-120
    computerNumber = Math.floor((Math.random() * 120) + 19);
    //  console log the computerNumber to see that it works
    console.log(computerNumber);

    // 3. Variable for wins and losses - which needs to be set at 0 plus to be reset.
    var wins = 0;
    var losses = 0;

    // 4. Variable for all the numbers added - make it clickNo
    var clickNo = 0;

    // JQuery

    // J.1 Need to send number to Div - Number to Guess
    $("#computerGuess").html(computerNumber);

    // J.2 Click on each Div - Geode Buttons class="img imgButtons"
     $("#purple").click(function() {
        clickNo += purpleAmnt;
        console.log(purpleAmnt);
    });

    $("#white").click(function() {
        clickNo += whiteAmnt;
        console.log(whiteAmnt);
    });

    $("#green").click(function() {
        clickNo += greenAmnt;
        console.log(greenAmnt);
    });

    $("#blue").click(function() {
        clickNo += blueAmnt;
        console.log(blueAmnt);
    });



    // When each geode image is clicked, it generates a random number, hide it from the user
    $(".imgButtons").on("click", function() {

        $("#userGuess").html(clickNo);

        // Compared to auto random number and compares - alert them
        if (clickNo == computerNumber) {
            console.log(wins++);
            wins = wins++;
            $('#wins').html(wins);
            alert("Congrats!! You Win A Geode!")
            reset();
            $("#userGuess").html(clickNo);
        }
         else if (clickNo >= computerNumber) {
            console.log(losses++);
            losses = losses++;
            $('#loss').html(losses);
            alert("Sorry, You Lost. But Keep Trying!")
            reset();
            $("#userGuess").html(clickNo);
        }
    });

    // Function to reset
    function reset() {

      // Reset score counter.
        clickNo = 0;

        // Reset for Variables - computerNumber and geodes
        computerNumber = Math.floor((Math.random() * 120) + 19);

        blueAmnt = Math.floor((Math.random() * 12) + 1);

        greenAmnt = Math.floor((Math.random() * 12) + 1);

        whiteAmnt = Math.floor((Math.random() * 12) + 1);

        purpleAmnt = Math.floor((Math.random() * 12) + 1);


        // Need to send number back into Div - Number to Guess
        $("#computerGuess").html(computerNumber);


    }
});
