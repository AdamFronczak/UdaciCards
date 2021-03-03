import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Card from './Card'
import Score from './Score'
import { recreateNotification } from '../services/notifications'

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { questionIndex: 0, correct: 0, incorrect: 0, isQuestion: true };
    }

    answerCorrect = () => {
        this.setState(state => ({ correct: state.correct + 1 }));
        this.advanceQuiz();
    }

    answerInCorrect = () => {
        this.setState(state => ({ incorrect: state.incorrect + 1 }));
        this.advanceQuiz();
    }

    advanceQuiz = () => {
        if (this.state.questionIndex + 1 >= this.props.deck.questions.length) {
            recreateNotification();
        }

        this.setState(state => ({ questionIndex: state.questionIndex + 1, isQuestion: true }));
    }

    setIsQuestion = (isQuestion) => {
        this.setState({ isQuestion: isQuestion });
    }
    
    restartQuiz = () => {
        this.setState({
            questionIndex: 0, 
            correct: 0, 
            incorrect: 0, 
            isQuestion: true
        });
    }

    render() {
        return (
            this.state.questionIndex <  this.props.deck.questions.length
            ?
            <View>
                <Text style={{margin: 5}}>{this.state.questionIndex + 1} / {this.props.deck.questions.length}</Text>
                <Card question={this.props.deck.questions[this.state.questionIndex].question}
                    answer={this.props.deck.questions[this.state.questionIndex].answer}
                    isQuestion={this.state.isQuestion}
                    setIsQuestion={this.setIsQuestion} />
                <View style={{marginBottom: 10}}>
                    <Button onPress={this.answerCorrect} title="Correct" color="green" />
                </View>
                <Button onPress={this.answerInCorrect} title="Incorrect" color="red" />
            </View>
            :
            <Score correct={this.state.correct} total={this.props.deck.questions.length} onRestart={this.restartQuiz} onFinish={this.props.navigation.goBack} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    deck: state.decks[ownProps.route.params.deckId]
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
