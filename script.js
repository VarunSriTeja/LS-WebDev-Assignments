document.addEventListener('DOMContentLoaded', () => {
    const pieceElements = document.querySelectorAll('.piece1');
    const pieceImage = document.getElementById('piece-image1');
    
  
    pieceElements.forEach(piece => {
      piece.addEventListener('click', () => {
        const imageSrc = piece.getAttribute('data-image');
        pieceImage.src = imageSrc;
      });
    });
  });
  document.getElementById("redirectButton1").addEventListener("click", function() {
    window.location.href = "https://youtu.be/AaKWUiiEHgA";
});
document.getElementById("redirectButton2").addEventListener("click", function() {
    window.location.href = "https://youtu.be/Z-2FpiEzeYI";
});
document.getElementById("redirectButton3").addEventListener("click", function() {
    window.location.href = "https://youtu.be/tsDJLUL-vo4";
});
document.getElementById("redirectButton4").addEventListener("click", function() {
    window.location.href = "https://youtu.be/mX_fQyxKiPQ";
});
document.addEventListener('DOMContentLoaded', () => {
  const pieceElements = document.querySelectorAll('.piece2');
  const pieceImage = document.getElementById('piece-image2');
  

  pieceElements.forEach(piece => {
    piece.addEventListener('click', () => {
      const imageSrc = piece.getAttribute('data-image');
      pieceImage.src = imageSrc;
    });
  });
});

const quizData = [
  {
      question: "How many squares are there on a standard chessboard?",
      options: ["64", "72", "56", "60"],
      answer: "64"
  },
  {
      question: "Which piece can move in an L-shape?",
      options: ["Pawn", "Knight", "Rook", "Bishop"],
      answer: "Knight"
  },
  {
      question: "What is the ultimate goal in chess?",
      options: ["Capture the opponent's queen", "Checkmate the opponent's king", "Promote a pawn", "Stalemate the opponent"],
      answer: "Checkmate the opponent's king"
  }
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;

  optionsElement.innerHTML = "";
  currentQuizData.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("option-btn");
      button.addEventListener("click", selectOption);
      optionsElement.appendChild(button);
  });

  nextButton.style.display = "none";
}

function selectOption(e) {
  const selectedOption = e.target.innerText;
  const currentQuizData = quizData[currentQuestion];

  if (selectedOption === currentQuizData.answer) {
      score++;
  }

  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach(button => {
      button.disabled = true;
      if (button.innerText === currentQuizData.answer) {
          button.classList.add("correct");
      } else {
          button.classList.add("incorrect");
      }
  });

  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  quiz.style.display = "none";
  resultElement.innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score} out of ${quizData.length}</p>`;
  resultElement.style.display = "block";
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();
