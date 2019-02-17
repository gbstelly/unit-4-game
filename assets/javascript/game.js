
  $(document).ready(function() {
    var randomResult;
    var losses= 0;
    var wins= 0;
    var winsG;
    var lossG;
    var score = 0;
    var randomCrystalNumber;
  
    $("#yourScoreTotal").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
    
    function reset(){
      $(".crystals").empty();
      //set inital values   
      randomResult = Math.floor((Math.random() * 101)+19);
      score = 0;
      $("#randomNumber").html(randomResult);

      for (var i = 0; i < 4; i++){
          var random = Math.floor((Math.random() * 12) +1);
          
        // console.log(random);
          var image = "./assets/images/crystal" + [i] + ".jpg";
          // Each crystal image (with all it classes and attributes) will get added to the page.
          
          var crystal = $("<img>");
              crystal.attr({
                  "class":"crystal",
                  "src": image,
                  "id" : [i],
                  "random":random});
          $(".crystals").append(crystal);
      }
    } 

    reset();
    
    $(document).on('click', ".crystal", function(){
        //console.log($(this).attr('random'));
        randomCrystalNumber = $(this).attr('random');
        parseInt(score);
        parseInt(randomCrystalNumber);
        score = +randomCrystalNumber + +score;

        $("#yourScoreTotal").html(score);
       //console.log(score);
       if (score > randomResult){
          alert("You lost!!!")
          losses++;
          //console.log("Loses: " + losses);
          $("#losses").html(losses);
          score = 0;
          $("#yourScoreTotal").html(score);
          reset();
       } else if (score === randomResult) {
          wins++;
          //console.log("Wins: " + wins);
          score = 0;
          $("#yourScoreTotal").html(score);
          $("#wins").html(wins);
          alert("You Win!!!")
          reset();
        
       }
          
        
    });
  });

