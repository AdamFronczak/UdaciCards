import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { saveQuestion } from '../actions/deck'

class AddCard extends Component {
    state = { question: '', answer: '' }

    submitDeck = () => {
        if (this.state.question && this.state.answer) {
            this.props.saveQuestion(this.props.route.params.deckId, this.state.question, this.state.answer);
            this.setState({ question: '', answer: '' });
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
                <Button onPress={this.submitDeck} title="Submit" />
            </View>
        )
    }}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    saveQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
