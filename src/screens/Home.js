import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { GoogleSignin } from 'react-native-google-signin'
import { connect } from 'react-redux';
import { signout, fbSignout } from '../store/actions/authActions';

class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: `Hello, Muhammad `
    })
    // ${ navigation.getParam('name') }
    // async componentDidMount() {
    //     GoogleSignin.configure({
    //         webClientId: '560135643524-ok03hg4fbpfr731qld1kkgoqjg8amnam.apps.googleusercontent.com',
    //         offlineAccess: false,
    //     });
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Home Screen</Text>

                <TouchableOpacity onPress={() => this.props.signout()} style={styles.btn}>
                    <Text style={styles.btnText}>Signout</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.fbSignout()} style={styles.btn}>
                    <Text style={styles.btnText}>FB Signout</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('login')} style={styles.btn}>
                    <Text style={styles.btnText}>GO TO LOGIN</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 50
    },
    btn: {
        padding: 15,
        backgroundColor: "#333",
        borderRadius: 4,
        margin: 10
    },
    btnText: {
        textAlign: "center",
        color: "#fff"
    }
}

function mapStateToProps({ auth }) {
    const { isLogin, userData, error } = auth;
    return { isLogin, userData, error };
}


export default connect(mapStateToProps, { signout, fbSignout })(Home);