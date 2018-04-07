// const myQuestions = [
//     {
//         1: "What color does Red and Blue make?",
//         answer: document.getElementById('correct1')
//     },
//     {
//         2: "Solve: (10 x 2) &divide; 5",
//         answer: document.getElementById('correct2')
//     },
//     {
//         3: "What is the 4th planet from the Sun?",
//         answer: document.getElementById('correct3')
//     },
//     {
//         4: "In music, what does the term 'piano' mean?",
//         answer: document.getElementById('correct4')
//     },
//     {
//         5: "What is the chemical symbol for Hydrogen?",
//         answer: document.getElementById('correct5')
//     }
// ];

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

    if(document.getElementById('correct4').checked){
        document.getElementById('result4').innerHTML = "Correct!";
    }
    else if(document.getElementById('result4')){
        document.getElementById('result4').innerHTML = "Incorrect!";
    }

    if(document.getElementById('correct5').checked){
        document.getElementById('result5').innerHTML = "Correct!";
    }
    else if(document.getElementById('result5')){
        document.getElementById('result5').innerHTML = "Incorrect!";
    }
}
//     function grade(){
//         const answers = myQuestions.answers;
//         let score = 0;

//         myQuestions.forEach( (questionNumber) => {
            
//             if(answers === answer){
//                 score++;
//                document.getElementById('score').innerHTML = "Your score is " + score + " out of 5";
//             }
//             else{
//                document.getElementById('score').innerHTML = "Your score is " + score + " out of 5";
//             }
//         });
//         grade();
//     }
// }

function grade(){

    let questions = document.getElementsByTagName('input');
    let valueList = [];
    let score = 0;
    let display = "Your score is " + score + " out of 5";

    for(let i = 0; i < questions.length; i++) {

        valueList.push(questions[i].value);

        if(questions[i].checked) {
            score += Number(questions[i].value)
        }
    }
    document.getElementById('score').innerHTML = display;
    console.log(valueList);
}