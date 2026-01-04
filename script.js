const questions = [
  // 🔹 Fáceis (1 a 10)
  {
    "question": "Um pote tinha 9 balas. Foram retiradas 4 para lanchar. Quantas balas sobraram no pote?",
    "answers": [
      { "text": "5", "correct": true },
      { "text": "6", "correct": false },
      { "text": "4", "correct": false },
      { "text": "7", "correct": false }
    ],
    "calculation": "9 - 4 = 5.",
    "level": "easy"
  },
  {
    "question": "Uma caixa tinha algumas moedas. Foram retiradas 3 e sobraram 6. Quantas moedas havia antes?",
    "answers": [
      { "text": "9", "correct": true },
      { "text": "8", "correct": false },
      { "text": "7", "correct": false },
      { "text": "10", "correct": false }
    ],
    "calculation": "6 + 3 = 9 (ou 9 - 3 = 6).",
    "level": "easy"
  },
  {
    "question": "Um prato tinha 8 biscoitos. Foram retirados 2. Quantos biscoitos sobraram?",
    "answers": [
      { "text": "6", "correct": true },
      { "text": "7", "correct": false },
      { "text": "5", "correct": false },
      { "text": "4", "correct": false }
    ],
    "calculation": "8 - 2 = 6.",
    "level": "easy"
  },
  {
    "question": "Uma sacola tinha algumas laranjas. Foram retiradas 1 e sobraram 9. Quantas laranjas havia antes?",
    "answers": [
      { "text": "10", "correct": true },
      { "text": "9", "correct": false },
      { "text": "8", "correct": false },
      { "text": "7", "correct": false }
    ],
    "calculation": "9 + 1 = 10.",
    "level": "easy"
  },
  {
    "question": "Um aquário tinha 7 peixes. Saíram 5. Quantos peixes ficaram no aquário?",
    "answers": [
      { "text": "2", "correct": true },
      { "text": "3", "correct": false },
      { "text": "1", "correct": false },
      { "text": "4", "correct": false }
    ],
    "calculation": "7 - 5 = 2.",
    "level": "easy"
  },
  {
    "question": "Uma prateleira tinha algumas revistas. Foram retiradas 6 e sobraram 3. Quantas revistas havia antes?",
    "answers": [
      { "text": "9", "correct": true },
      { "text": "8", "correct": false },
      { "text": "7", "correct": false },
      { "text": "10", "correct": false }
    ],
    "calculation": "3 + 6 = 9.",
    "level": "easy"
  },
  {
    "question": "Um cesto tinha 10 maçãs. Foram retiradas 2 para o lanche. Quantas maçãs sobraram?",
    "answers": [
      { "text": "8", "correct": true },
      { "text": "7", "correct": false },
      { "text": "9", "correct": false },
      { "text": "6", "correct": false }
    ],
    "calculation": "10 - 2 = 8.",
    "level": "easy"
  },
  {
    "question": "Uma caixa tinha algumas figurinhas. Foram retiradas 4 e sobraram 5. Quantas figurinhas havia antes?",
    "answers": [
      { "text": "9", "correct": true },
      { "text": "10", "correct": false },
      { "text": "8", "correct": false },
      { "text": "7", "correct": false }
    ],
    "calculation": "5 + 4 = 9.",
    "level": "easy"
  },
  {
    "question": "Um pote tinha 6 moedas. Foram retiradas 3 para comprar um doce. Quantas moedas sobraram?",
    "answers": [
      { "text": "3", "correct": true },
      { "text": "2", "correct": false },
      { "text": "4", "correct": false },
      { "text": "1", "correct": false }
    ],
    "calculation": "6 - 3 = 3.",
    "level": "easy"
  },
  {
    "question": "Um prato tinha alguns biscoitos. Foram retirados 3 e sobraram 7. Quantos biscoitos havia antes?",
    "answers": [
      { "text": "10", "correct": true },
      { "text": "9", "correct": false },
      { "text": "8", "correct": false },
      { "text": "7", "correct": false }
    ],
    "calculation": "7 + 3 = 10.",
    "level": "easy"
  },

  // 🔹 Difíceis (11 a 50)
  {
    "question": "Um galinheiro tinha 34 ovos. Foram retirados 12 para cozinhar. Quantos ovos sobraram no galinheiro?",
    "answers": [
      { "text": "22", "correct": true },
      { "text": "21", "correct": false },
      { "text": "23", "correct": false },
      { "text": "24", "correct": false }
    ],
    "calculation": "34 - 12 = 22.",
    "level": "hard"
  },
  {
    "question": "Uma caixa tinha algumas garrafas. Foram retiradas 15 e sobraram 25. Quantas garrafas havia antes?",
    "answers": [
      { "text": "40", "correct": true },
      { "text": "35", "correct": false },
      { "text": "45", "correct": false },
      { "text": "38", "correct": false }
    ],
    "calculation": "25 + 15 = 40.",
    "level": "hard"
  },
  {
    "question": "Um saco tinha 28 batatas. Foram retiradas 13. Quantas batatas sobraram?",
    "answers": [
      { "text": "15", "correct": true },
      { "text": "16", "correct": false },
      { "text": "14", "correct": false },
      { "text": "18", "correct": false }
    ],
    "calculation": "28 - 13 = 15.",
    "level": "hard"
  },
  {
    "question": "Um tanque tinha 45 litros de água. Foram retirados 20 para limpeza. Quantos litros sobraram?",
    "answers": [
      { "text": "25", "correct": true },
      { "text": "24", "correct": false },
      { "text": "26", "correct": false },
      { "text": "20", "correct": false }
    ],
    "calculation": "45 - 20 = 25.",
    "level": "hard"
  },
  {
    "question": "Um celeiro tinha alguns sacos de milho. Foram retirados 18 e sobraram 22. Quantos sacos havia antes?",
    "answers": [
      { "text": "40", "correct": true },
      { "text": "38", "correct": false },
      { "text": "42", "correct": false },
      { "text": "35", "correct": false }
    ],
    "calculation": "22 + 18 = 40.",
    "level": "hard"
  },
  {
    "question": "Um mercado tinha 32 garrafas de suco. Foram vendidas 11. Quantas garrafas sobraram?",
    "answers": [
      { "text": "21", "correct": true },
      { "text": "22", "correct": false },
      { "text": "20", "correct": false },
      { "text": "23", "correct": false }
    ],
    "calculation": "32 - 11 = 21.",
    "level": "hard"
  },
  {
    "question": "Um depósito tinha algumas caixas. Foram retiradas 25 e sobraram 15. Quantas caixas havia antes?",
    "answers": [
      { "text": "40", "correct": true },
      { "text": "35", "correct": false },
      { "text": "45", "correct": false },
      { "text": "30", "correct": false }
    ],
    "calculation": "15 + 25 = 40.",
    "level": "hard"
  },
  {
    "question": "Um campo tinha 36 árvores. Foram cortadas 14. Quantas árvores sobraram?",
    "answers": [
      { "text": "22", "correct": true },
      { "text": "21", "correct": false },
      { "text": "23", "correct": false },
      { "text": "24", "correct": false }
    ],
    "calculation": "36 - 14 = 22.",
    "level": "hard"
  },
  {
    "question": "Um lago tinha alguns patos. Saíram 12 e ficaram 28. Quantos patos havia antes?",
    "answers": [
      { "text": "40", "correct": true },
      { "text": "38", "correct": false },
      { "text": "35", "correct": false },
      { "text": "42", "correct": false }
    ],
    "calculation": "28 + 12 = 40.",
    "level": "hard"
  },
  {
    "question": "Um armazém tinha 50 caixas. Foram retiradas 25 para entrega. Quantas caixas sobraram?",
    "answers": [
      { "text": "25", "correct": true },
      { "text": "24", "correct": false },
      { "text": "26", "correct": false },
      { "text": "20", "correct": false }
    ],
    "calculation": "50 - 25 = 25.",
    "level": "hard"
  }
];




const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn'); // novo botão
const feedbackElement = document.getElementById('feedback');
const acertoSom = document.getElementById('acerto-som');
const erroSom = document.getElementById('erro-som');

// Referências corrigidas para os elementos do placar
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const counterTextElement = document.getElementById('counter-text');

const explanationBox = document.getElementById('explanation-box');
const calculationText = document.getElementById('calculation');

const difficultySelector = document.getElementById('difficulty');
const startButton = document.getElementById('start-btn');
const quizBox = document.getElementById('quiz-box');
let availableQuestions = []; // O array de questões filtradas que será usado no quiz.

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffleArray(availableQuestions); 
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    updateScoreAndCounter(); 
    nextButton.classList.add('hide'); 
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = availableQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    updateScoreAndCounter();

    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackElement.innerText = '';
    explanationBox.classList.add('hide'); 
    calculationText.innerText = ''; 
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const currentQuestion = availableQuestions[currentQuestionIndex];
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        selectedButton.classList.add('correct');
        feedbackElement.innerText = 'Correto! 🎉';
        correctAnswers++;
        acertoSom.play();
    } else {
        selectedButton.classList.add('wrong');
        feedbackElement.innerText = 'Ops! Tente novamente. 🤔';
        wrongAnswers++;
        erroSom.play();
    }

    calculationText.innerText = currentQuestion.calculation;
    explanationBox.classList.remove('hide');

    updateScoreAndCounter();

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.classList.remove('hide');
}

function updateScoreAndCounter() {
    correctCountElement.innerText = `Acertos: ${correctAnswers}`;
    wrongCountElement.innerText = `Erros: ${wrongAnswers}`;
    counterTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${availableQuestions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < availableQuestions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz finalizado! Você acertou <span style="color:#28a745;">${correctAnswers}</span> de ${availableQuestions.length} perguntas. Parabéns!`;
        resetState();
        nextButton.classList.add('hide');
        restartButton.classList.remove('hide-initial'); // mostra botão reiniciar
    }
});

function filterQuestions() {
    const selectedLevel = difficultySelector.value;
    if (selectedLevel === 'all') {
        availableQuestions = [...questions]; 
    } else {
        availableQuestions = questions.filter(q => q.level === selectedLevel);
    }
}

startButton.addEventListener('click', () => {
    filterQuestions();
    document.getElementById('difficulty-selector').classList.add('hide-initial');
    quizBox.classList.remove('hide-initial');
    nextButton.classList.remove('hide-initial');
    restartButton.classList.add('hide-initial'); // esconde reiniciar ao começar
    startQuiz();
});

// 🔹 Lógica do botão Reiniciar
restartButton.addEventListener('click', () => {
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestionIndex = 0;

    correctCountElement.innerText = "Acertos: 0";
    wrongCountElement.innerText = "Erros: 0";
    counterTextElement.innerText = "";

    quizBox.classList.add('hide-initial');
    restartButton.classList.add('hide-initial');
    document.getElementById('difficulty-selector').classList.remove('hide-initial');
    feedbackElement.innerText = "";
    calculationText.innerText = "";
});
