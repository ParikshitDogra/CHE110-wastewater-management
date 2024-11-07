let currentExampleIndex = 0;
const examples = document.querySelectorAll('.example-item');
const indicatorsContainer = document.getElementById('carousel-indicators');
let carouselInterval;

examples.forEach((_, index) => {
  const indicator = document.createElement('button');
  indicator.addEventListener('click', () => showExample(index));
  indicatorsContainer.appendChild(indicator);
});
updateIndicators();

function showExample(index) {
  currentExampleIndex = index;
  examples.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - index)}%)`;
  });
  updateIndicators();
}

function updateIndicators() {
  const indicators = indicatorsContainer.children;
  Array.from(indicators).forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentExampleIndex);
  });
}

function prevExample() {
  currentExampleIndex = (currentExampleIndex - 1 + examples.length) % examples.length;
  showExample(currentExampleIndex);
}

function nextExample() {
  currentExampleIndex = (currentExampleIndex + 1) % examples.length;
  showExample(currentExampleIndex);
}

function startAutoplay() {
  carouselInterval = setInterval(nextExample, 3000);
}

function stopAutoplay() {
  clearInterval(carouselInterval);
}
window.addEventListener('load', startAutoplay);
document.querySelector('.example-carousel').addEventListener('mouseover', stopAutoplay);
document.querySelector('.example-carousel').addEventListener('mouseout', startAutoplay);

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    setupFeedbackForm();
  });
  
  function loadQuiz() {
    const questions = [
      { question: "What is the primary purpose of wastewater treatment?", options: ["To clean water", "To remove contaminants", "For aesthetics", "To save water"], answer: "To remove contaminants" },
      { question: "Which method is used in preliminary treatment?", options: ["Filtration", "Screening", "Sedimentation", "Disinfection"], answer: "Screening" },
      { question: "What does secondary treatment use to break down waste?", options: ["Chemicals", "Heat", "Biological organisms", "None of these"], answer: "Biological organisms" },
      { question: "Why is nutrient removal important?", options: ["To prevent eutrophication", "To improve color", "To increase odor", "For better taste"], answer: "To prevent eutrophication" },
      { question: "What is the final step before discharge?", options: ["Filtration", "Screening", "Aeration", "Disinfection"], answer: "Disinfection" }
    ];
  
    const quizContainer = document.getElementById('quiz-questions');
    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.innerHTML = `<p>${q.question}</p>` +
        q.options.map(option => `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label><br>`).join('');
      quizContainer.appendChild(questionDiv);
    });
  }
  
  function submitQuiz() {
    const answers = ["To remove contaminants", "Screening", "Biological organisms", "To prevent eutrophication", "Disinfection"];
    let score = 0;
    answers.forEach((answer, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected && selected.value === answer) {
        score++;
      }
    });
    document.getElementById('quiz-result').innerText = `You scored ${score} out of 5`;
  }

const stages = ["Preliminary Treatment", "Primary Treatment", "Secondary Treatment", "Tertiary Treatment", "Disinfection"];
let currentStageIndex = 0;
let simulationInterval;

function startSimulation() {
  simulationInterval = setInterval(() => {
    document.getElementById('current-stage').innerText = stages[currentStageIndex];
    currentStageIndex = (currentStageIndex + 1) % stages.length;
  }, 2000);
}

function pauseSimulation() {
  clearInterval(simulationInterval);
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('quiz-result').innerText = "Thank you for taking the quiz!";
});

function setupFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('feedback-message').innerText = "Thank you for your feedback!";
      form.reset();
    });
  }
  
