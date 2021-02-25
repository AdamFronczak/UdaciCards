import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

class Score extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.total} / {this.props.total}</Text>
                <Text>{Math.round(this.props.correct / this.props.total * 100)} % Correct</Text>

                <Button onPress={this.props.onRestart} title="Restart Quiz" />
                <Button onPress={this.props.onFinish} title="Back to Deck" />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
