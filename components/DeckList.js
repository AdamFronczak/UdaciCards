import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions/deck'

class DeckList extends Component {
    componentDidMount() {
        this.props.getAllDecks();
    }

    deckPressed = (title) => {
        console.log(title);
        this.props.navigation.navigate('DeckPreview', { deckId: title });
    }

    render() {
        return (
            <View>
                <FlatList data={Object.values(this.props.decks)}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => 
                        <TouchableHighlight onPress={() => this.deckPressed(item.title)}>
                            <View style={{alignItems: "center", padding: 20, borderBottomWidth: 1}}>
                                <Text style={{color: "blue", margin: 5, fontSize: 30}}>
                                    {item.title}
                                </Text>
                                <Text>{item.questions.length} {item.questions.length === 1 ? "card" : "cards"}</Text>
                            </View>
                        </TouchableHighlight>
                    } />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    decks: state.decks || {}
})

const mapDispatchToProps = {
    getAllDecks
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
