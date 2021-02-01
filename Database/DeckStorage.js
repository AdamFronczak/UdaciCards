decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function getDecks() {
    return decks;
}

export function getDeck(id) {
    return decks[id];
}

export function saveDeckTitle(title) {
    decks[title] = { title: title, questions: [] };
}

export function addCardToDeck(title, question, answer) {
    decks[title].questions.concat({question: question, answer: answer});
}
