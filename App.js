import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeckList from './components/DeckList';
import reducers from './reducers/deck'
import NewDeck from './components/NewDeck';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk, logger))}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <NavigationContainer>
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
                </NavigationContainer>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
