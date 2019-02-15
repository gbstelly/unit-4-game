
  $(document).ready(function() {
    var randomResult;
    var losses;
    var wins;
    var score = 0;
    var randomCrystalNumber;
    randomResult = Math.floor((Math.random() * 69)+30);
    console.log(randomResult);
    $("#randomNumber").html(randomResult);

    for (var i = 0; i <4; i++){
        var random = Math.floor((Math.random() * 20)+1);
      // console.log(random);
        var image = "./assets/images/crystal" + [i] + ".jpg";
        // Each crystal image (with all it classes and attributes) will get added to the page.
        var crystal = $("<img>");
            crystal.attr({
                "class":"crystal",
                //"src": "./assets/images/crystal1.jpg",
                "src": image,
                "data-random":random});
        $(".crystals").append(crystal);
    }

    wins = 12;
    losses = 10;
    
    $("#losses").html(losses);

    ($("#wins").html(wins));
    $(".crystal").on('click', function(){
        console.log($(this).attr('data-random'));
        randomCrystalNumber = $(this).attr('data-random');
        parseInt(score);
        parseInt(randomCrystalNumber);
        score = +randomCrystalNumber + +score;
        $("#yourScoreTotal").html(score);
       console.log(score);
       if (score > randomResult){
          alert("You lost.")
         //restartGame();
          randomResult = Math.floor((Math.random() * 69)+30);
          console.log(randomResult);
          $("#randomNumber").html(randomResult);
       }
        
        
    });
  // Game Functions, restart, reset variables, etc.
  });

//https://www.youtube.com/watch?v=4LSdLzAkK64
//Here's how the app works:

//There will be four crystals displayed as buttons on the page.

//The player will be shown a random number at the start of the game.

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. between 1-12

  //Your game will hide this amount until the player clicks a crystal.
  //When they do click one, update the player's score counter.

//The player wins if their total score matches the random number from the beginning of the game.

//The player loses if their score goes above the random number.

//The game restarts whenever the player wins or loses.

  //When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


