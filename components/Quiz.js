import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Card from './Card'
import Score from './Score'

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
                <Text>{this.state.questionIndex + 1} / {this.props.deck.questions.length}</Text>
                <Card question={this.props.deck.questions[this.state.questionIndex].question}
                    answer={this.props.deck.questions[this.state.questionIndex].answer}
                    isQuestion={this.state.isQuestion}
                    setIsQuestion={this.setIsQuestion} />
                <Button onPress={this.answerCorrect} title="Correct" />
                <Button onPress={this.answerInCorrect} title="Incorrect" />
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
