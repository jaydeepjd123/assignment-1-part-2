"use strict";

// get  scores from user and add them together
const score1 = parseInt(prompt("Enter test score" , 80 ));

const score2 = parseInt(prompt("Enter test score" , 75 ));

const score3 = parseInt(prompt("Enter test score" , 90 ));

const score4 = parseInt(prompt("Enter test score" , 90 ));

const total = score1 + score2 + score3 + score4;

// calculate the average
const average = parseInt(total/4);

// display in browser page
const Alert = alert( `Score 1 = ${score1}
    Score 2 = ${score2}
    Score 3 = ${score3}
    Score 4 = ${score4}
    Average score = ${average}`);
document.write(`<p id ="qw">Score 1 = ${score1}</p>
<p id ="qw">Score 2 = ${score2}</p>
<p id ="qw">Score 3 = ${score3}</p>
<p id ="qw">Score 4 = ${score4}</p>
<p id ="qw">Average score = ${average}</p>`);
   
