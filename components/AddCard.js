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
                <Text style={{margin: 5}}>Question:</Text>
                <TextInput onChangeText={text => this.setState({question: text})}
                    value={this.state.question}
                    style={{padding: 3, margin: 5, borderWidth: 1}}  />
                <Text style={{margin: 5}}>Answer:</Text>
                <TextInput onChangeText={text => this.setState({answer: text})}
                    value={this.state.answer}
                    style={{padding: 3, margin: 5, borderWidth: 1}}  />
                <Button onPress={this.submitDeck} title="Submit" color="green" />
            </View>
        )
    }}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    saveQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
