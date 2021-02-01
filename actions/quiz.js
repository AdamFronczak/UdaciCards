import { resetAnswers, correct, incorrect } from "../Database/Quiz"

export const ANSWER_CORRECT = 'ANSWER_CORRECT'
export const ANSWER_INCORRECT = 'ANSWER_INCORRECT'
export const RESET_ANSWERS = 'RESET_ANSWERS'

function answerCorrectAction() {
    return {
        type: ANSWER_CORRECT
    }
}

function answerIncorrectAction() {
    return {
        type: ANSWER_INCORRECT
    }
}

function resetAnswersAction() {
    return {
        type: RESET_ANSWERS
    }
}

export function answerCorrect() {
    return dispatch => {
        correct();
        dispatch(answerCorrectAction());
    }
}

export function answerIncorrect() {
    return dispatch => {
        incorrect();
        dispatch(answerIncorrectAction());
    }
}

export function reset() {
    return dispatch => {
        resetAnswers();
        dispatch(resetAnswersAction());
    }
}
