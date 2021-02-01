import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions/deck'

class DeckList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        this.props.getAllDecks();
    }

    render() {
        return (
            <View>
                <Text> this.state.decks </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    getAllDecks
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
