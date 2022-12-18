const quizData = [
{
        question : "Grand Central Terminal, Park Avenue, New York is the world's",
            a:"largest railway station",
            b:"higthest railway station",
            c:"longest railway station",
            d:"none of the above",
            correct: "a" 
},
{
       
        question : "who is the priminister of Ethiopia",
            a: "Trump",
            b:"Gudeta",
            c: "abiy ahemed ali",
            d: "tayer erdogan",
            correct: "c"
},
{
        question: "etormology is the science that studies?",
            a: "behaviour of human beings",
            b: "insects",
            c: "the origin and history of technical and scientific terms",
            d: "the formation of rocks",
            correct:"b"
},
 {
            question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
            a: "Asia",
            b: "Africa",
            c: "Europe",
            d: "Australia",
            correct: "b"
  },  
 {
           question : "Where were Gudeta Born?",
    
            a: "Shashemene",
            b: "Jigjiga",
            c: "bale",
            d: "samera",
            correct: "a"
},
 {
    question : "for which of the following disciplines is Nobel Prixe awarded?",
 
         a: "physics and chemistry",
         b: "psychology or Medicine",
         c: "Literature,Peace and Economics",
         d: "All of the above",
         correct:"d"
 },
 {
    question : "Hitler party Which came i power in 1933 is known as? ",

     a: "Labour party",
     b: "Nazi party",
     c: "Ku-Klux-Klan",
     d: "Democratic Party",
     correct: "b"
},
{
    question : "Who is the president of America?",

     a: "Donald trump",
     b: "joe Biden",
     c: "helari clinton",
     d: "abiy",
     correct: "b"
},
{
    question : "css literally stands for?",

     a: "Cascading style sheet",
     b: "hyperlink",
     c: "hyper text mark up language",
     d: "javascript",
     correct: "a"
},
{
    question : "HTML stands for?",

     a: "hyper text mark up language",
     b: "cascading style sheet",
     c: "mark up language",
     d: "unknown",
     correct: "a"
}, {
    question : "Who is the priminister of israel?",
     a: "tayer erdogan",
     b: "yair lapid",
     c: "yusuf erdogan",
     d: "gudeta",
     correct: "b"
}
    

];
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn = document.getElementById('submit');
const count = document.getElementById('count');



let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz()

{    
     //calling the deselect function
    deselectAnswers();
  
 const currentQuizData =  quizData[currentQuiz]; // Math.floor(Math.random()*
  questionEl.innerHTML = currentQuizData.question;
   a_text.innerHTML = currentQuizData.a;
   b_text.innerHTML = currentQuizData.b;
   c_text.innerHTML = currentQuizData.c;
   d_text.innerHTML = currentQuizData.d;
  
}
function getSelected()
{
    
    let answer = undefined; 
    answersEls.forEach(answersEls =>
    {
     if(answersEls.checked)
     {
        answer=answersEls.id;
     }
    
    });
    return answer;
   
}
function deselectAnswers () 
{
  
    answersEls.forEach(answersEls => {
      answersEls.checked = false;
});
}

submitBtn.addEventListener('click',() =>
{

    const answer = getSelected();

    
if(answer)
{
    if(answer === quizData[currentQuiz].correct)
    {
         score++;
    }
    currentQuiz++;

    if(currentQuiz < quizData.length)
    {
        loadQuiz();
    }
    else{
       quiz.innerHTML = `<h2>You answered correctlly ${score} / out of ${quizData.length} Questions
       <button onclick="location.reload()">Reload</button>`;
       
    if(score>5)
    {
      clap();
    }
    else{
      lose();
    }
   }
    
    
}
  
    
});
  function clap()
    {
        const cla = new Audio('sound.wav');
        cla.play();
    }
   function lose()
   {
    const los = new Audio('second.wav');
    los.play();
   }
