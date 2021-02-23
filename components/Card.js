import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class Card extends Component {
    render() {
        return (
            <View>
                { this.props.isQuestion 
                ?
                <View>
                    <Text>{this.props.question}</Text>
                    <TouchableOpacity onPress={() => this.props.setIsQuestion(false)}><Text>Answer</Text></TouchableOpacity>
                </View>
                :
                <View>
                    <Text>{this.props.answer}</Text>
                    <TouchableOpacity onPress={() => this.props.setIsQuestion(true)}><Text>Question</Text></TouchableOpacity>
                </View>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
