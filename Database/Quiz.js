answers = {
    correct = 0,
    incorrect = 0
}

function resetAnswers() {
    answers = { correct = 0, incorrect = 0 }
}

function correct() {
    answers.correct++;
}

function incorrect() {
    answers.incorrect++;
}