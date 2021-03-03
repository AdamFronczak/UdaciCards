import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

class Score extends Component {
    render() {
        return (
            <View>
                <Text style={{margin: 5}}>{this.props.total} / {this.props.total}</Text>
                <Text style={{fontSize: 20, textAlign: "center", marginBottom: 20}}>{Math.round(this.props.correct / this.props.total * 100)} % Correct</Text>

                <View style={{marginBottom: 10}}>
                    <Button onPress={this.props.onRestart} title="Restart Quiz" color="green" />
                </View>
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
