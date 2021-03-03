import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

class Card extends Component {
    render() {
        return (
            <View>
                { this.props.isQuestion 
                ?
                <View>
                    <Text style={styles.text}>{this.props.question}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.setIsQuestion(false)}><Text style={{color: "#777777"}}>(Answer)</Text></TouchableOpacity>
                </View>
                :
                <View>
                    <Text style={styles.text}>{this.props.answer}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.setIsQuestion(true)}><Text style={{color: "#777777"}}>(Question)</Text></TouchableOpacity>
                </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: { margin: 5, textAlign: "center", fontSize: 20},
    button: { margin: 20, alignSelf: "center"}
});

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
