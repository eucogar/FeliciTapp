import authService from '../services/authService';
import {useDispatch} from 'react-redux';
import {setUser, unSetUser} from '../reducer/user/AuthReducer';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function () {
  const dispatch = useDispatch();

  const {
    singInAnonimous,
    signInGoogle,
    sigInEmailAndPassword,
    signOut,
    currentUser,
  } = authService();

  const dispatchUser = (user: FirebaseAuthTypes.User) => {
    const {
      displayName,
      email,
      emailVerified,
      isAnonymous,
      phoneNumber,
      photoURL,
      uid,
    } = user;
    dispatch(
      setUser({
        displayName,
        email,
        emailVerified,
        isAnonymous,
        phoneNumber,
        photoURL,
        uid,
      } as FirebaseAuthTypes.User),
    );
  };

  const checkSession = async () => {
    currentUser !== null ? dispatchUser(currentUser) : dispatch(unSetUser());
  };

  const Anonimous = async () => {
    const user = await singInAnonimous();
    user && dispatchUser(user.user);
  };

  const Google = async () => {
    const user = await signInGoogle();
    user && dispatchUser(user.user);
  };

  const EmailAndPassword = async ({email, password}: any) => {
    console.log(email, password);
    const user = await sigInEmailAndPassword({email, password});
    user && dispatchUser(user.user);
  };

  const Out = async () => {
    signOut().then(() => {
      dispatch(unSetUser());
    });
  };

  return {
    Anonimous,
    Google,
    EmailAndPassword,
    Out,
    checkSession,
  };
}
