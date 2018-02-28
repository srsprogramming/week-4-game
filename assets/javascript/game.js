$(document).ready(function(){

    $("#buttonReset").hide();


    var blueNum = 0;
    var greenNum = 0;
    var redNum = 0;
    var yellowNum = 0;
    var scoreNow = 0;
    var matchScore = 0;
    var wins = 0;
    var losses = 0;


      $("#blueGem").on("click", function(){
            if (blueNum){
                  scoreNow = scoreNow + blueNum;

                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }

                else{
                    blueNum = Math.floor((Math.random() * 11) + 1);
                }
            });

        $("#greenGem").on('click', function(){
                if (greenNum){
                    scoreNow = scoreNow + greenNum;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }

                else{
                    greenNum = Math.floor((Math.random() * 11) + 1);
                }
            });

        $("#redGem").on('click', function(){
                if (redNum){
                    scoreNow = scoreNow + redNum;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }

                else{
                    redNum = Math.floor((Math.random() * 11) + 1);
                }
            });

            $("#yellowGem").on('click', function(){
                if (yellowNum){
                    scoreNow = scoreNow + yellowNum;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }

                else{
                    yellowNum = Math.floor((Math.random() * 11) + 1);
                }
            });


        function playAgain(){

            $("#buttonReset").click(function(){
                scoreToMeet = 0;
                scoreNow = 0;
                blueNum = 0;
                greenNum = 0;
                redNum = 0;
                yellowNum = 0;
                givenScore();
                $("#buttonReset").hide();
                $("#gemRow").show();
            });
        };


        function scoreKeeper(){
            if (scoreNow > matchScore){
                losses++;
                $("#losses").html('Losses: ' + losses);
                $("#buttonReset").show();
                $("#gemRow").hide();
                playAgain();
            }

            if (scoreNow == matchScore){
                wins++;
                $("#wins").html('Wins: ' + wins);
                $("#buttonReset").show();
                $("#gemRow").hide();
                playAgain();
            };
        };


        function givenScore(){
            matchScore= Math.floor((Math.random() * 101) + 19);
            document.getElementById("scoreToMeet").innerHTML = matchScore;
        };


    givenScore();

    });
