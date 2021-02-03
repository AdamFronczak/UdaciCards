import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { questionIndex: 0, correct: 0, incorrect: 0 };
    }

    answerCorrect = () => {
        this.setState(state => ({correct: state.correct + 1}));
        this.advanceQuiz();
    }

    answerInCorrect = () => {
        this.setState(state => ({incorrect: state.incorrect + 1}));
        this.advanceQuiz();
    }

    advanceQuiz = () => {
        const newQuestionIndex = this.state.questionIndex + 1;

        if (newQuestionIndex < this.props.deck.questions.length) {
            this.setState(state => ({questionIndex: questionIndex + 1}));
        } else {
            // nav out
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.questionIndex + 1} / {this.props.deck.questions.length}</Text>
                <Card question={this.props.deck.question[this.state.questionIndex]} />
                <Button onPress={this.answerCorrect}>Correct</Button>
                <Button onPress={this.answerInCorrect}>Incorrect</Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
