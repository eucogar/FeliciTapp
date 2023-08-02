import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '426388272963-809a7iqjd02qtabq2995npclhr9cvgeu.apps.googleusercontent.com',
});

type userCredencial = Promise<FirebaseAuthTypes.UserCredential | undefined>;

export default function () {
  const {currentUser} = auth();

  const singInAnonimous: () => userCredencial = async () => {
    try {
      console.log('sing in anoninous');
      return await auth().signInAnonymously();
    } catch (error: any) {
      if (error.code === 'auth/operation-not-allowed') {
      }
      return undefined;
    }
  };

  const RegisterEmailAndPassword: ({
    email,
    password,
  }: any) => userCredencial = async ({email, password}: any) => {
    try {
      console.log('sigIn Email And Password');
      return await auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.log('Error');
      let content = '';
      switch (error.code) {
        case 'auth/email-already-in-use':
          content = 'That email address is already in use!';
          break;
        case 'auth/invalid-email':
          content = 'That email address is invalid!';
          break;
        default:
          content = error;
          break;
      }

      return undefined;
    }
  };

  const signInGoogle: () => userCredencial = async () => {
    try {
      console.log('sing in google');
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return await auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      let content = '';
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          content = 'SIGN IN CANCELLED';
          break;
        case statusCodes.IN_PROGRESS:
          console.log('IN_PROGRESS');
          content = 'IN PROGRESS';
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('PLAY_SERVICES_NOT_AVAILABLE');
          content = 'PLAY SERVICES NOT AVAILABLE';
          break;
        default:
          console.log(error);
          break;
      }

      return undefined;
    }
  };

  const signOut = async () => {
    console.log('Saliendo ');
    await auth().signOut();
  };

  return {
    singInAnonimous,
    RegisterEmailAndPassword,
    signInGoogle,
    signOut,
    auth,
    currentUser,
  };
}
