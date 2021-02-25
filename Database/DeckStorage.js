import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getDecks() {
    //AsyncStorage.removeItem('decks');
    const jsonDecks = await AsyncStorage.getItem('decks');
    return jsonDecks != null ? JSON.parse(jsonDecks) : {};
}

export async function saveDeckTitle(title) {
    const decks = await getDecks();

    decks[title] = { title: title, questions: [] };
    AsyncStorage.setItem('decks', JSON.stringify(decks));
}

export async function addCardToDeck(title, question, answer) {
    const decks = await getDecks();

    decks[title].questions = decks[title].questions.concat({question: question, answer: answer});
    AsyncStorage.setItem('decks', JSON.stringify(decks));
}
