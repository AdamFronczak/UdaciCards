import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { saveNewDeck } from '../actions/deck'

class NewDeck extends Component {
    state = {title: ''}

    submitDeck = () => {
        if (this.state.title) {
            this.props.saveNewDeck(this.state.title);
            this.setState({title: ''});
            this.props.navigation.goBack();
        }
    }

    render() {
        return (
            <View>
                <Text style={{margin: 5}}>What is the title of your new deck?</Text>
                <TextInput onChangeText={text => this.setState({title: text})}
                    value={this.state.title}
                    style={{padding: 3, margin: 5, borderWidth: 1}} />
                <Button onPress={this.submitDeck} title="Create Deck" color="green" />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    saveNewDeck
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
