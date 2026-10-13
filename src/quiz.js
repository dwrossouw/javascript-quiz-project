class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    this.questions.sort(() => Math.random() - 0.5);
  }

  checkAnswer(answer) {
    if (answer === this.getQuestion().answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficultyLevel) {

    if (difficultyLevel >= 1 && difficultyLevel <= 3) {
      this.questions = this.questions.filter((element) => {
        return element.difficulty === difficultyLevel;
      });
    } 
  }

  averageDifficulty() {
    const arrLength = this.questions.length;
    if (arrLength === 0) {
      return 0;
    }
    const total = this.questions.reduce((acc, element) => {
      return acc + element.difficulty;
    }, 0);

    const avg = total / arrLength;
    return avg;
  }
}
