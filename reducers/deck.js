import { RECEIVE_ALL_DECKS, SAVE_DECK, SAVE_QUESTION } from "../actions/deck";

export default function deck(state = {}, action) {
    switch (action.type) {

        case RECEIVE_ALL_DECKS:
            return { ...state, decks };

        case SAVE_DECK:
            return {
                ...state,
                [action.title]: {
                    title: title,
                    questions: []
                }
            }

        case SAVE_QUESTION:
            var deck = state[action.title];
            deck = {...deck};
            deck.questions = deck.questions.concat({question: action.question, answer: action.answer});
            
            return { ...state, [action.title]: deck };

        default:
            return state;
    }
}
