import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reducers from './reducers/deck'
import Home from './components/Home';
import AddCard from './components/AddCard';
import DeckPreview from './components/DeckPreview';
import Quiz from './components/Quiz';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk, logger))}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                                name="Home"
                                component={Home}
                                options= {{title: 'Home'}} />
                        <Stack.Screen
                                name="DeckPreview"
                                component={DeckPreview}
                                options= {{title: 'Deck'}} />
                        <Stack.Screen
                                name="Quiz"
                                component={Quiz}
                                options= {{title: 'Quiz'}} />
                        <Stack.Screen
                                name="AddCard"
                                component={AddCard}
                                options= {{title: 'AddCard'}} />
                    </Stack.Navigator>
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
