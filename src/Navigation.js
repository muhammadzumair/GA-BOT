import React, { Component } from 'react';
import { Image, Animated, Easing } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { zoomIn, zoomOut, fromLeft, fadeIn } from 'react-navigation-transitions';

import NavigationService from './NavigationService';

import Login from './screens/Login';
import Home from './screens/Home';
import Intro from './screens/Intro';
import Intro2 from './screens/Intro2';
import Insight from './screens/Insight';
import Me from './screens/Me';
import MoreInsights from './screens/MoreInsights';
import Analytics from './screens/Analytics';
import Chat from './screens/Chat';
import Launch from './screens/Launch';


export default class Navigation extends Component {
    render() {

        const transitionConfig = () => {
            return {
                transitionSpec: {
                    duration: 750,
                    easing: Easing.in, //out(Easing.poly(4)),
                    timing: Animated.timing,
                    useNativeDriver: true,
                },
                screenInterpolator: sceneProps => {
                    const { position, layout, scene, index, scenes } = sceneProps

                    const thisSceneIndex = scene.index
                    const height = layout.initHeight
                    const width = layout.initWidth

                    // We can access our navigation params on the scene's 'route' property
                    var thisSceneParams = scene.route.params || {}

                    const translateX = position.interpolate({
                        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                        outputRange: [width, 0, 0]
                    })

                    const translateY = position.interpolate({
                        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                        outputRange: [height, 0, 0]
                    })

                    const opacity = position.interpolate({
                        inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
                        outputRange: [0, 1, 1],
                    })

                    const scale = position.interpolate({
                        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                        outputRange: [1, 1, 4]
                    })

                    const slideFromRight = { transform: [{ translateX }] }
                    const scaleWithOpacity = { opacity, transform: [{ scaleX: scale }, { scaleY: scale }] }
                    const slideInFromBottom = { transform: [{ translateY }] }

                    if (thisSceneParams.plain) return slideFromRight
                    else if (index == 2 ) return slideInFromBottom
                    else return scaleWithOpacity
                },
            }
        }


        const InsightStack = createStackNavigator({
            intro: {screen: Intro},
            intro2: {screen: Intro2},
            login: {screen: Login},
            home: {screen: Home},
            insightStack: { screen: Insight },
            analytics: { screen: Analytics },
            moreInsights: { screen: MoreInsights },
        }, {
                headerMode: "none",

                transitionConfig: () => transitionConfig(),
            })

        const MeStack = createStackNavigator({
            meStack: { screen: Me }
        }, {
                headerMode: "none"
            })

        const ChatStack = createStackNavigator({
            chatStack: { screen: Chat }
        })

        const LaunchStack = createStackNavigator({
            launchStack: { screen: Launch }
        })



        //Tab Navigation Config


        LaunchStack.navigationOptions = {
            tabBarLabel: "Launch",
            tabBarIcon: ({ focused }) => focused ?
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/launch_active.png')} />
                :
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/launch_icon.png')} />
        }

        ChatStack.navigationOptions = {
            tabBarLabel: "Chat",
            tabBarVisible: false,
            tabBarIcon: ({ focused }) => focused ?
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/chat_active.png')} />
                :
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/chat_icon.png')} />
        }

        InsightStack.navigationOptions = {
            tabBarLabel: "Insights",
            tabBarIcon: ({ focused }) => focused ?
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/insights_active.png')} />
                :
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/insights_icon.png')} />
        }

        MeStack.navigationOptions = {
            tabBarLabel: "Me",
            tabBarIcon: ({ focused }) => focused ?
                < Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/me_active.png')} />
                :
                < Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('./assets/me_icon.png')} />
        }

        const TopLevelNavigator = createBottomTabNavigator({
            insight: { screen: InsightStack },
            chat: { screen: ChatStack },
            launch: { screen: LaunchStack },
            me: { screen: MeStack },
            // intro: { screen: Intro },
            // login: { screen: Login },
            // home: { screen: Home },
            // intro2: { screen: Intro2 },
        }, {
                tabBarOptions: {
                    style: { height: 70, paddingBottom: 15 },
                    activeTintColor: "#000",
                    labelStyle: { marginTop: -15 }
                },
                lazy: false,
                removeClippedSubviews: false,
                animationEnabled: true,
                swipeEnabled: false

            })

        return (
            <TopLevelNavigator
                ref={
                    navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }
                } />
        )
    }
}

const styles = {
    icon: {
        width: 20,
        height: 20,
        // paddingVertical: 5
    }
}