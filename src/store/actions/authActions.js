import firebase from 'react-native-firebase';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { FB_LOGIN_SUCCESS, LOGINSUCCESS, LOGINFAIL, LOG_OUT, LOADING } from './Types';

import NavigationService from '../../NavigationService';

export const googleLogin = (goals, platforms) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING })
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, "info")
      dispatch({ type: LOGINSUCCESS, payload: { user: userInfo.user, goals, platforms } });
      // firebase.firestore().collection('mobileUsers').doc(userInfo.user.id).set(userInfo.user)
      // firebase.firestore().collection('platforms and goals').doc(userInfo.user.id).set({ goals, platforms })
      NavigationService.navigate('home', { name: userInfo.user.name });
    }

    catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        dispatch({ type: LOGINFAIL, payload: error });
        console.log(error, "errorr")
      }
      else if (error.code === statusCodes.IN_PROGRESS) {
        dispatch({ type: LOGINFAIL, payload: error });
        console.log(error, "errorr")
      }
      else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        dispatch({ type: LOGINFAIL, payload: error });
        console.log(error, "errorr")
      }
      else {
        // dispatch({ type: LOGINSUCCESS, payload: error });
      }
    }
  }
}

export const fbLogin = (goals, platforms) => {
  return dispatch => {
    // LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
    //   function (result) {
    //     if (result.isCancelled) {
    //       console.log("Login cancelled");
    //     } else {
    //       AccessToken.getCurrentAccessToken().then((data) => {
    //         dispatch({ type: FB_LOGIN_SUCCESS });
    //         firebase.firestore().collection('platforms and goals').doc(data.userID).set({ goals, platforms })
    //         NavigationService.navigate('home');
    //         console.log(data, "data")
    //       })
    //     }
    //   },
    //   function (error) {
    //     console.log("Login fail with error: " + error);
    //   }
    // );
  }

}


// export const fbSignout = () => {
//   return (dispatch) => {
//     LoginManager.logOut();
//     dispatch({ type: LOG_OUT });
//     NavigationService.navigate('login');
//   }
// }

// export const signout = () => {
//   return async (dispatch) => {
//     console.log('aSDASD')
//     await GoogleSignin.signOut();
//     await GoogleSignin.revokeAccess();
//     dispatch({ type: LOG_OUT });
//     NavigationService.navigate('login');
//   }
// }