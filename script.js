let score = 0;
let display = "Your score is " + score + " out of 5";

function submitAnswers(){
   

    if(document.getElementById('correct1').checked){
        document.getElementById('result1').innerHTML = "Correct!";
    }
    else if(document.getElementById('result1')){
        document.getElementById('result1').innerHTML = "Incorrect!";
    }

    if(document.getElementById('correct2').checked){
        document.getElementById('result2').innerHTML = "Correct!";
    }
    else if(document.getElementById('result2')){
        document.getElementById('result2').innerHTML = "Incorrect!";
    }

    if(document.getElementById('correct3').checked){
        document.getElementById('result3').innerHTML = "Correct!";
    }
    else if(document.getElementById('result3')){
        document.getElementById('result3').innerHTML = "Incorrect!";
    }
}



