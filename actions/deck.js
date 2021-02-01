import { getDecks, getDeck, addCardToDeck, saveDeckTitle } from "../Database/DeckStorage"

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const SAVE_DECK = 'SAVE_DECK'
export const SAVE_QUESTION = 'SAVE_QUESTION'

function receiveAllDecksAction(decks) {
    return {
        type: RECEIVE_ALL_DECKS,
        decks: decks
    }
}

function receiveDeckAction(deck) {
    return {
        type: RECEIVE_DECK,
        deck: deck
    }
}

function saveNewDeckAction(title) {
    return {
        type: SAVE_DECK,
        title: title
    }
}

function saveQuestionAction(title, question, answer) {
    return {
        type: SAVE_QUESTION,
        title: title,
        question: question,
        answer: answer
    }
}

export function getAllDecks() {
    return dispatch => {
        decks = getDecks();
        dispatch(receiveAllDecksAction(decks));
    }
}

export function getDeckByTitle(title) {
    return dispatch => {
        deck = getDeck(title);
        dispatch(receiveDeckAction(deck));
    }
}

export function saveNewDeck(title) {
    return dispatch => {
        saveDeckTitle(title);
        dispatch(saveNewDeckAction(title));
    }
}

export function saveQuestion(title, question, answer) {
    return dispatch => {
        addCardToDeck(title);
        dispatch(saveQuestionAction(title, question, answer));
    }
}