import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions/deck'

class AddCard extends Component {
    state = { question: '', answer: '' }

    submitDeck = () => {
        if (this.state.question && this.state.answer) {
            addCardToDeck(this.props.deckId, this.state.question, this.state.answer);
            // nav out
        }
    }

    render() {
        return (
            <View>
                <Text>Question:</Text>
                <TextInput onChangeText={text => this.setState({question: text})}
                    value={this.state.question} />
                <Text>Answer:</Text>
                <TextInput onChangeText={text => this.setState({answer: text})}
                    value={this.state.answer} />
                <Button onPress={this.submitDeck}>Submit</Button>
            </View>
        )
    }}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    addCardToDeck
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
