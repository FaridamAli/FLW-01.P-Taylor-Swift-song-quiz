document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score = 0;
  let q2Score = 0;
  let q3Score = 0;
  let q4Score = 0;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    userQ1 = q1.value.toLowerCase();
    userQ2 = q2.value.toLowerCase();
    userQ3 = q3.value.toLowerCase();
    userQ4 = q4.value.toLowerCase();


   // task 7: create a conditional statement for the responses to Question 1 based on the user input.
if (userQ1 === "summer")
  {
    q1Score = 1
  }
    if (userQ1 === "fall")
  {
    q1Score = 3
  }
    if (userQ1 === "spring")
  {
    q1Score = 2
  }
    if (userQ1 === "winter")
  {
    q1Score = 4
  }



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
if (userQ2 === "L.A")
  {
    q2Score = 1
  }
    if (userQ2 === "London")
  {
    q2Score = 2
  }
    if (userQ2 === "Paris")
  {
    q2Score = 3
  }
    if (userQ2 === "New York")
  {
    q2Score = 4
  }



    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
if (userQ3 === "Blue")
  {
    q3Score = 1
  }
    if (userQ3 === "Gold")
  {
    q3Score = 2
  }
    if (userQ3 === "Black")
  {
    q3Score = 3
  }
    if (userQ3 === "Red")
  {
    q2Score = 4
  }

    if (userQ4 === "1989")
  {
    q4Score = 1
  }
    if (userQ4 === "Lover")
  {
    q4Score = 2
  }
    if (userQ4 === "Reputation")
  {
    q4Score = 3
  }
    if (userQ4 === "Red")
  {
    q4Score = 4
  }


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
let totalScore = q1Score + q2Score + q3Score + q4Score



    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
 
  if (totalScore === "16")
  {
   message.innerHTML="All Too Well"
  }
if (totalScore === "4")
  {
   message.innerHTML="Shake It Off"
  }
    if (totalScore === "8")
  {
   message.innerHTML="London Boy"
  }
    if (totalScore === "12")
  {
   message.innerHTML="Delicate"
  }
};