import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from '../themes/Register';
import React, {useContext, useState} from 'react';
import {InputText} from '../components/InputText';
import {useForm} from '../hook/HookForm';
import {UserRegister} from '../model/UserRegister';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthContext';
import {Button} from 'react-native-paper';
import {DatePicker} from '../components/DatePicker';
interface Props extends StackScreenProps<any, any> {}

export const Register = ({navigation}: Props) => {
  const {form, onChange} = useForm<UserRegister>({} as UserRegister);
  const {Nombres, Genero, pais, email, password, FechaNacimiento} = form;
  console.log(form);
  const {signUp} = useContext(AuthContext);

  const [siguiente, Setsiguiente] = useState(Number);

  const Next = () => {
    Setsiguiente(siguiente + 1);
  };

  const Back = () => {
    Setsiguiente(siguiente - 1);
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../img/Logo.png')} />
        </View>
        <View style={styles.container2}>
          <Text style={styles.bigBlue}>Registrar</Text>
          {siguiente === 0 ? (
            <View>
              <View style={styles.eliminar}>
                <Text style={styles.posicioncolor}>1</Text>
                <Text style={styles.progreso} />
                <Text style={styles.posicion}>2</Text>
                <Text style={styles.progreso} />
                <Text style={styles.posicion}>3</Text>
              </View>
              <InputText
                value={Nombres}
                field={'Nombres'}
                onChnageText={onChange}
                placeholder={'Nombres y Apellido'}
              />
              <InputText
                value={Genero}
                field={'Genero'}
                onChnageText={onChange}
                placeholder={'Genero'}
              />
              <View style={styles.position}>
                <Button
                  mode={'elevated'}
                  textColor={'white'}
                  buttonColor={'#51A8AF'}
                  onPress={Next}>
                  Siguiente
                </Button>
              </View>
            </View>
          ) : siguiente === 1 ? (
            <View>
              <View style={styles.eliminar}>
                <Text style={styles.posicioncolor}>1</Text>
                <Text style={styles.progresocolor} />
                <Text style={styles.posicioncolor}>2</Text>
                <Text style={styles.progreso} />
                <Text style={styles.posicion}>3</Text>
              </View>
              <View>
                <DatePicker
                  value={FechaNacimiento}
                  field={'FechaNacimiento'}
                  onChangeText={onChange}
                />
              </View>
              <InputText
                value={pais}
                field={'pais'}
                onChnageText={onChange}
                placeholder={'Pais'}
              />

              <View style={styles.position}>
                <Button
                  mode={'elevated'}
                  textColor={'white'}
                  buttonColor={'#51A8AF'}
                  onPress={Back}>
                  Atras
                </Button>
                <Button
                  mode={'elevated'}
                  textColor={'white'}
                  buttonColor={'#51A8AF'}
                  onPress={Next}>
                  Siguiente
                </Button>
              </View>
            </View>
          ) : siguiente === 2 ? (
            <View>
              <View style={styles.eliminar}>
                <Text style={styles.posicioncolor}>1</Text>
                <Text style={styles.progresocolor} />
                <Text style={styles.posicioncolor}>2</Text>
                <Text style={styles.progresocolor} />
                <Text style={styles.posicioncolor}>3</Text>
              </View>
              <View>
                <InputText
                  placeholder={'email'}
                  value={email}
                  onChnageText={onChange}
                  field={'email'}
                />
                <InputText
                  placeholder={'password'}
                  value={password}
                  secureTextEntry={true}
                  onChnageText={onChange}
                  field={'password'}
                />
                <View style={styles.position}>
                  <Button
                    mode={'elevated'}
                    textColor={'white'}
                    buttonColor={'#51A8AF'}
                    onPress={Back}>
                    Atras
                  </Button>
                  <Button
                    mode={'elevated'}
                    textColor={'white'}
                    buttonColor={'#51A8AF'}
                    onPress={() => signUp(form)}>
                    Enviar
                  </Button>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};
