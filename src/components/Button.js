import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Button extends Component {
    render() {
        const styles = {
            container: {
                width: "85%",
                borderRadius: 30,
                padding: 12,
                marginVertical: 10,
                backgroundColor: this.props.backgroundColor || "#fff"
            },
            wrap: {
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            },
            title: {
                fontSize: 18,
                color: "#000"
            },
            icon: {
                width: 20,
                height: 20,
                marginRight: 10
                // position: "absolute",
                // left: 20,
            }
        }

        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={.8} style={styles.container}>
                <View style={styles.wrap}>
                    {
                        this.props.leftIcon ?
                            <Image style={styles.icon} source={this.props.leftIcon} />
                            : null
                    }
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}