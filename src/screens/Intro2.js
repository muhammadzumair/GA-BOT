import React, { Component } from 'react';
import { View, FlatList, Text, Image, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import SelectBox from '../components/SelectBox';






const DATA = [
    {
        title: "Youtube",
        width: 80,
        height: 80,
        borderRadius: "50%",
        top: 10,
        left: 20,
        colors: ['#6ce9ee', '#1e45f9'],
    },
    {
        title: "Instagram",
        width: 80,
        height: 80,
        borderRadius: "50%",
        top: -20,
        left: 30,
        colors: ['#1e45f9', '#6ce9ee'],
    },
    {
        title: "Google Analytics",
        top: 20,
        left: 20,
        width: 120,
        height: 120,
        colors: ['#6ce9ee', '#1e45f9'],
    },
    {
        title: "Amazon",
        left: 0,
        top: -15,
        width: 60,
        height: 60,
        colors: ['#1e45f9', '#6ce9ee'],
    },
    {
        title: "SEO",
        left: 35,
        top: -20,
        width: 60,
        height: 60,
        colors: ["#6ce9ee", "#6ce9ee"],
    },
    {
        title: "iTunes",
        left: 45,
        top: -50,
        width: 60,
        height: 60,
        colors: ["#1e45f9", "#6ce9ee"],
    },
    {
        title: "Google Ads",
        left: 20,
        top: 10,
        width: 100,
        height: 100,
        colors: ['#1e45f9', '#6ce9ee'],
    },
    {
        title: "Twitter",
        left: 40,
        top: 10,
        width: 80,
        height: 80,
        colors: ["#6ce9ee", "#1e45f9"],
    },
    {
        title: "Facebook",
        left: 40,
        top: -60,
        width: 100,
        height: 100,
        colors: ['#1e45f9', '#6ce9ee'],
    },
    {
        title: "Linkedin",
        left: 40,
        top: 10,
        width: 80,
        height: 80,
        colors: ['#6ce9ee', '#1e45f9'],
    },
    {
        title: "Salesforce",
        left: 50,
        top: -10,
        width: 80,
        height: 80,
        colors: ['#6ce9ee', '#1e45f9']
    },
]


class Intro2 extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        checked: [],
        goals: this.props.navigation.getParam('goals')

    };


    checkItem = item => {
        const { checked } = this.state;
        if (!checked.includes(item)) {
            this.setState({ checked: [...checked, item] });
        } else {
            this.setState({ checked: checked.filter(a => a !== item) });
        }
    };


    render() {
        return (
            <ImageBackground source={require('../assets/Intro_bg.png')} style={styles.container}>
                {
                    console.log(this.state.goals, "goals")
                    // console.log(this.state.checked, "checked");
                }
                <View style={styles.row}>
                    <Text onPress={() => this.props.navigation.navigate('login')} style={styles.text}>Cancel</Text>

                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/logo_small.png')} />

                    <Text
                        onPress={() => this.props.navigation.navigate('login', {
                            goals: this.state.goals,
                            platforms: this.state.checked
                        })}
                        style={styles.text}>Next</Text>
                </View>

                <Text style={styles.title}>Tell us what you're into</Text>
                <Text style={styles.subtitle}>
                    Tap once on the categories you're interested in
                    </Text>

                <ScrollView style={{ width: "100%", marginTop: 20 }}>
                    <View style={styles.wrap}>
                        <FlatList
                            numColumns={3}
                            horizontal={false}
                            keyExtractor={item => item.title}
                            contentContainerStyle={styles.wrap}
                            data={DATA}
                            extraData={this.state}
                            renderItem={({ item }) => (
                                <SelectBox
                                    colors={item.colors}
                                    key={item.title}
                                    checked={this.state.checked.includes(item.title)}
                                    onPress={() => this.checkItem(item.title)}
                                    title={item.title}
                                />
                            )}
                        />
                    </View>
                </ScrollView>

                <View style={styles.bottomRow}>
                    <Text style={styles.resetBtn}>Reset</Text>

                    <Image style={{ alignItems: "center", width: 90, height: 90 }} resizeMode="contain" source={require('../assets/Progress_full.png')} />
                </View>

                <View style={styles.bottomLine} />
            </ImageBackground>
        )
    }
}

const styles = {
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        width: "100%",
    },
    logo: {
        width: 45,
        height: 45
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: "#fff"
    },
    title: {
        fontSize: 28,
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 15
    },
    subtitle: {
        fontSize: 13,
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 25,
        marginTop: 10
    },
    wrap: {
        position: "relative",
        width: "100%",
        alignItems: "center"
    },
    resetBtn: {
        position: "absolute",
        left: "20%",
        fontSize: 15,
        top: "40%",
        color: "#fff"
    },
    bottomRow: {
        paddingTop: 10,
        alignItems: "center",
        marginBottom: 20
    },
    bottomLine: {
        borderBottomWidth: 5,
        width: 100,
        alignSelf: "center",
        borderColor: "#fff"
    },
    addBtn: {
        position: "absolute",
        right: "20%",
        fontSize: 15,
        top: "40%",
        color: "#fff"
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps)(Intro2);