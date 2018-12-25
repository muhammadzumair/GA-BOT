import React, { Component } from 'react';
import { View, FlatList, Dimensions, Text, Image, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import SelectBox from '../components/SelectBox';

const DATA = [
    {
        title: "Business Strategy",
        width: 80,
        height: 80,
        borderRadius: "50%",
        top: 0,
        left: 0,
        colors: ['#6ce9ee', '#1e45f9']
    },
    {
        title: "In-app purchases",
        width: 100,
        height: 100,
        borderRadius: "50%",
        colors: ['#6ce9ee', '#1e45f9'],
        top: 10,
        left: 5,
    },
    {
        title: "Followers",
        width: 80,
        height: 80,
        borderRadius: "50%",
        colors: ['#6ce9ee', '#1e45f9'],
        top: -10,
        left: 6,
    },
    {
        title: "Digital Marketing",
        top: 0,
        left: 5,
        width: 140,
        colors: ['#6ce9ee', '#6ce9ee'],
        height: 140
    },
    {
        title: "Marketing",
        top: -55,
        left: 20,
        width: 80,
        height: 80,
        colors: ['#1e45f9', '#1e45f9'],
    },
    {
        title: "Growth",
        left: 25,
        top: -25,
        colors: ['#1e45f9', '#b66aff'],
        width: 60,
        height: 60
    },
    {
        title: "eCommerce",
        left: 35,
        top: -60,
        width: 100,
        height: 100,
        colors: ['#1e45f9', '#6ce9ee'],
    },
    {
        title: "startup",
        left: 35,
        top: 5,
        width: 60,
        height: 60,
        colors: ['#1e45f9', '#6ce9ee'],
    },
    {
        title: "content",
        left: 40,
        top: -5,
        width: 60,
        height: 60,
        colors: ['#6ce9ee', '#1e45f9'],
    },
    {
        title: "leads",
        left: 0,
        top: -40,
        width: 80,
        height: 80,
        colors: ['#1e45f9', '#1e45f9'],
    },
    {
        title: "Beads",
        left: 0,
        top: -30,
        width: 60,
        height: 60,
        colors: ['#6ce9ee', '#1e45f9'],
    },
    {
        title: "B2B",
        left: 0,
        top: -35,
        width: 60,
        height: 60,
        colors: ['#6ce9ee', '#1e45f9'],
    },
    {
        title: "Branding",
        left: 0,
        top: -20,
        width: 80,
        height: 80,
        colors: ['#b66aff', '#1e45f9'],
    },
    {
        title: "Revenue",
        left: 5,
        top: 5,
        width: 65,
        height: 65,
        colors: ['#1e45f9', '#6ce9ee'],
    },
    {
        title: "Followers",
        left: 15,
        top: -25,
        width: 110,
        height: 110,
        colors: ['#1e45f9', '#1e45f9'],
    },
    {
        title: "Social Media",
        left: 20,
        top: -25,
        width: 100,
        height: 100,
        colors: ["#6ce9ee", "#6ce9ee"],
    },
    {
        title: "Customer Insights",
        left: 35,
        top: 5,
        width: 110,
        height: 110,
        colors: ["#6ce9ee", "#6ce9ee"],
    },
]


class Intro extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        checked: [],
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
                <View style={styles.row}>
                    {console.log(this.state.checked)}
                    <Text
                        onPress={() => this.props.navigation.navigate('login')}
                        style={styles.text}>
                        Cancel
                    </Text>

                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/logo_small.png')} />

                    <Text
                        onPress={() => this.props.navigation.navigate('intro2', { goals: this.state.checked })}
                        style={styles.text}>
                        Next
                    </Text>
                </View>

                <Text style={styles.title}>Tell us what you're into</Text>
                <Text style={styles.subtitle}>
                    Tap once on the categories you're interested in
                    </Text>

                <ScrollView>
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
                                checked={this.state.checked.includes(item.title)}
                                onPress={() => this.checkItem(item.title)}
                                title={item.title}
                            />
                        )}
                    />
                </ScrollView>

                <View style={styles.bottomRow}>
                    <Text style={styles.resetBtn}>Reset</Text>
                    <Image style={{ alignItems: "center", width: 90, height: 90 }} resizeMode="contain" source={require('../assets/Progress.png')} />
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
        marginTop: 10,
        paddingBottom: 10
    },
    wrap: {
        marginVertical: 30,
        position: "relative",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
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
        backgroundColor: "transparent"
    },
    bottomLine: {
        borderBottomWidth: 5,
        width: 100,
        alignSelf: "center",
        borderColor: "#fff",
        marginTop: 10
    }

}

function mapStateToProps({ auth }) {
    const { selectedData } = auth
    return { selectedData }
}


export default connect(mapStateToProps)(Intro);