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
                <Text style={{fontSize: 40, textAlign: "center", margin: 10}}>{this.props.deck.title}</Text>
                <Text style={{textAlign: "center", margin: 10}}>{this.props.deck.questions.length} {this.props.deck.questions.length === 1 ? "card" : "cards"}</Text>
                <View style={{marginBottom: 10}}>
                    <Button onPress={this.addCard} title="Add Card" color="green" />
                </View>
                <Button onPress={this.startQuiz} disabled={this.props.deck.questions.length === 0} title="Start Quiz" />
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
