import React, { Component } from 'react';
import { Text, TouchableOpacity, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

// import { GoogleSignin, statusCodes } from 'react-native-google-signin'
import { googleLogin, fbLogin } from '../store/actions/authActions'
import Button from '../components/Button';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';

class Login extends Component {
    static navigationOptions = {
        header: null
    }
    // async componentDidMount() {
    //     GoogleSignin.configure({
    //         webClientId: '58189084231-ta7lrh7j5iep8m9qbqsl6fsq795nfa53.apps.googleusercontent.com',
    //         offlineAccess: false
    //     });
    // }

    _fbLogin = () => {
        const goals = this.props.navigation.getParam('goals');
        const platforms = this.props.navigation.getParam('platforms');
        this.props.fbLogin(goals, platforms)
    }

    _handleGoogleLogin = () => {
        const goals = this.props.navigation.getParam('goals');
        const platforms = this.props.navigation.getParam('platforms');
        this.props.googleLogin(goals, platforms);
    }

    render() {
        return (
            <ImageBackground source={require('../assets/Login_bg.jpg')} style={styles.container}>
                <TouchableOpacity style={styles.crossWrap}>
                    <Image style={styles.crossIcon} source={require('../assets/cross.png')} />
                </TouchableOpacity>

                <Image
                    resizeMode="contain"
                    source={require('../assets/logo.png')}
                    style={styles.logo} />

                {
                    this.props.loading ? <ActivityIndicator /> :
                        <Button
                            onPress={this._handleGoogleLogin}
                            leftIcon={require('../assets/google_icon.png')}
                            title="Continue with Google" />
                }


                <Button
                    onPress={() => this._fbLogin()}
                    leftIcon={require('../assets/facebook_icon.png')}
                    title="Continue with Facebook" />


                <Text style={styles.text}>Skip ></Text>

                <Text style={styles.text}>{this.props.error}</Text>
            </ImageBackground>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    input: {
        width: "95%",
        backgroundColor: "#fff",
        marginVertical: 10,
        padding: 10,
        borderRadius: 5
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: "60%"
    },
    text: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        marginTop: 20
    },
    crossIcon: {
        width: 17,
        height: 17
    },
    crossWrap: {
        position: "absolute",
        top: 20,
        left: 15,
    }
}

const mapStateToProps = ({ auth }) => {
    const { isLogin, userData, error, loading } = auth;
    return { isLogin, userData, error, loading };
}

export default connect(mapStateToProps, { googleLogin, fbLogin })(Login);