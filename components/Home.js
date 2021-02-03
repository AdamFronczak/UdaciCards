import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeckList from './DeckList'
import NewDeck from './NewDeck'

const Tab = createMaterialTopTabNavigator();

class Home extends Component {
    render() {
        return (
            <View>
                <Tab.Navigator>
                    <Tab.Screen
                        name="DeckList"
                        component={DeckList}
                        options= {{title: 'Decks'}} />
                    <Tab.Screen
                        name="AddDeck"
                        component={NewDeck}
                        options= {{title: 'New Deck'}} />
                </Tab.Navigator>
            </View>
        )
    }}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
