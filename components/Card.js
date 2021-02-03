import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { isQuestion: true };
    }

    render() {
        return (
            <View>
                { isQuestion 
                ?
                <View>
                    <Text>{this.props.question}</Text>
                    <TouchableOpacity onPress={this.setState({isQuestion: false})}>Answer</TouchableOpacity>
                </View>
                :
                <View>
                    <Text>{this.props.answer}</Text>
                    <TouchableOpacity onPress={this.setState({isQuestion: true})}>Question</TouchableOpacity>
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
