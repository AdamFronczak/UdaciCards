import { RECEIVE_ALL_DECKS, SAVE_DECK, SAVE_QUESTION } from "../actions/deck";

export default function deck(state = {}, action) {
    switch (action.type) {

        case RECEIVE_ALL_DECKS:
            return { ...state, decks: action.decks };

        case SAVE_DECK:
            var deck = { title: action.title, questions: []};
            var decks = { ...state.decks };
            decks[action.title] = deck;

            return { ...state, decks }

        case SAVE_QUESTION:
            var deck = state.decks[action.title];
            deck = { ...deck };
            deck.questions = deck.questions.concat({question: action.question, answer: action.answer});

            var decks = { ...state.decks };
            decks[action.title] = deck;

            return { ...state, decks };

        default:
            return state;
    }
}
