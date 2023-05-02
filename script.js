var questions = {
    question:"Qual o seu nome?",
    answer:[
        {option: "3", correct: true},
        {option: "3", correct: false},
        {option: "3", correct: false},
        {option: "3", correct: false},
    ],

    question:"Qual o seu nome?",
    answer:[
        {option: "3", correct: true},
        {option: "3", correct: false},
        {option: "3", correct: false},
        {option: "3", correct: false},
    ],

    question:"Qual o seu nome?",
    answer:[
        {option: "3", correct: true},
        {option: "3", correct: false},
        {option: "3", correct: false},
        {option: "3", correct: false},
    ],
    question:"Qual o seu nome?",
    answer:[
        {option: "3", correct: true},
        {option: "3", correct: false},
        {option: "3", correct: false},
        {option: "3", correct: false},
    ],
    question:"Qual o seu nome?",
    answer:[
        {option: "3", correct: true},
        {option: "3", correct: false},
        {option: "3", correct: false},
        {option: "3", correct: false},
    ],

}


var btn = document.querySelector(".botao");
let text ="";

function checkBoxes(){
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
  }

  questions.answer.forEach(clique);
//   questions.question.length.forEach(clicou);
// console.log(questions.question.length)
for (let index = 0; index < questions.question.length; index++) {
    text += questions.question[index];
    
}

for (let index = 0; index < questions.answer.length; index++) {
    var element = document.querySelector("body");
    var texto= document.createTextNode(questions.question[index]);
    element.appendChild(texto);
    for (let index2 = 0; index2 < index.length; index2++) {
        const element = array[index2];
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        document.body.appendChild(x);
    // document.getElementById(".opcao "+index +index2).innerHTML = textresposta;
        
    }
    
}

btn.onclick=()=> {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
  };
  

function clique(item) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
  };

function clicou(item,indice){
    text += item+ indice;
}

document.getElementById("questao").innerHTML = text;



