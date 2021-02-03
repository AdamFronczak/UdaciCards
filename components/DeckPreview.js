import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckPreview extends Component {
    addCard = () => {

    }

    startQuiz = () => {

    }

    render() {
        return (
            <View>
                <Text>{this.props.deck.title}</Text>
                <Text>{this.props.deck.questions.length} {this.props.deck.questions.length === 1 ? "card" : "cards"}</Text>
                <Button onPress={this.addCard}>Add Card</Button>
                <Button onPress={this.startQuiz}>Start Quiz</Button>
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
