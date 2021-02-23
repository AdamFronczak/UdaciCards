import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckPreview extends Component {
    addCard = () => {
        this.props.navigation.navigate('AddCard', { deckId: this.props.deck.title });
    }

    startQuiz = () => {
        this.props.navigation.navigate('Quiz', { deckId: this.props.deck.title });
    }

    render() {
        return (
            <View>
                <Text>{this.props.deck.title}</Text>
                <Text>{this.props.deck.questions.length} {this.props.deck.questions.length === 1 ? "card" : "cards"}</Text>
                <Button onPress={this.addCard} title="Add Card" />
                <Button onPress={this.startQuiz} title="Start Quiz" />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    deck: state.decks[ownProps.route.params.deckId]
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckPreview)
