
/** Lavet af Cathrine*/

/** Ikoner bund footer*/
let scriptElement = document.createElement('script');

scriptElement.src = 'https://kit.fontawesome.com/e55ea91b63.js';

scriptElement.crossOrigin = 'anonymous';

document.head.appendChild(scriptElement);




//Quiz
let myQuestions = [
  {
      question: "1: Vil du ALTID opleve symptomer ved klamydia?",
      answers: {
          A: 'Ja',
          B: 'Nej'
      },
      correctAnswer: 'b'
  },
  {
      question: "2: Kan du blive infertil som komplikation af ubehandlet klamydia?",
      answers: {
          A: 'Ja',
          B: 'Nej'
      },
      correctAnswer: 'a'
  },
  {
      question: "3: Hvordan behandles klamydia?",
      answers: {
          A: 'Antibiotika',
          B: 'Det kan ikke behandles'
      },
      correctAnswer: 'a'
  },
  {
      question: "4: Hvordan overføres HIV? ",
      answers: {
          A: 'Væsker',
          B: 'Hudkontakt'
      },
      correctAnswer: 'a'
  },
  {
      question: "5: Findes der en kur imod HIV?",
      answers: {
          A: 'Ja',
          B: 'Nej'
      },
      correctAnswer: 'b'
  },
  {
      question: "6: Hvilken sygdom kan HIV udvikle sig til?",
      answers: {
          A: 'AIDS',
          B: 'Kræft'
      },
      correctAnswer: 'a'
  },
  {
      question: "7: Er gonoré kønsbestemt? ",
      answers: {
          A: 'Ja',
          B: 'Nej'
      },
      correctAnswer: 'a'
  },
  {
      question: "8: Er udslæt et symptom på gonoré?",
      answers: {
          A: 'Ja',
          B: 'Nej'
      },
      correctAnswer: 'a'
  },
  {
      question: "9: Hvilken komplikation kan du opleve ved ubehandlet gonoré?",
      answers: {
          A: 'AIDS',
          B: 'Kræft'
      },
      correctAnswer: 'a'
  },
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        let output = [];

        questions.forEach(function (question, i) {
            let answers = [];
            for (let letter in question.answers) {
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + question.answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<fieldset>'
                + '<legend class="question">' + question.question + '</legend>'
                + '<div class="answers">' + answers.join('') + '</div>'
                + '</fieldset>'
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        let answerContainers = quizContainer.querySelectorAll('.answers');
        let userAnswer = '';
        let numCorrect = 0;

        questions.forEach(function (question, i) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            userAnswer = userAnswer ? userAnswer.toLowerCase() : '';

            let correctAnswer = question.correctAnswer.toLowerCase();

            if (userAnswer === correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            } else {
                answerContainers[i].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = numCorrect + ' ud af ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    };
}

  