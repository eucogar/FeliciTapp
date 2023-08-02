import {Image, Text, View} from 'react-native';
import {styles} from '../themes/Login';
import React from 'react';
import {InputText} from '../components/InputText';
import {useForm} from '../hook/HookForm';
import {LoginUser} from '../model/Login';
import {AuthContext} from '../context/AuthContext';
import {useContext} from 'react';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const Login = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const {form, onChange} = useForm<LoginUser>({} as LoginUser);
  const {email, password} = form;
  console.log(form);
  return (
    <>
      <View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../img/Logo.png')} />
        </View>
        <View style={styles.container2}>
          <Text style={styles.bigBlue}>Sign In</Text>
          <InputText
            placeholder={'email'}
            onChnageText={onChange}
            value={email}
            field={'email'}
          />
          <InputText
            placeholder={'password'}
            value={password}
            onChnageText={onChange}
            field={'password'}
            secureTextEntry={true}
          />
          <View style={{marginVertical: 20}}>
            <Button
              onPress={() => signIn(form)}
              mode={'elevated'}
              textColor={'white'}
              buttonColor={'#51A8AF'}>
              Sign In
            </Button>
            <Button
              style={{marginTop: 5}}
              mode={'elevated'}
              textColor={'white'}
              buttonColor={'#51A8AF'}>
              {<Icon name={'logo-google'} size={17} />}oogle
            </Button>
          </View>
          <View style={styles.position}>
            <Button
              onPress={() => navigation.navigate('NewPass')}
              mode={'elevated'}
              textColor={'white'}
              buttonColor={'#51A8AF'}>
              NewPass
            </Button>
            <Button
              onPress={() => navigation.navigate('Register')}
              mode={'elevated'}
              textColor={'white'}
              buttonColor={'#51A8AF'}>
              Register
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};
