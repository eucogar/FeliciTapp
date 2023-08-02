/* eslint-disable prettier/prettier */
import {Button, Text, View} from 'react-native';
import { InputText } from '../components/InputText';
import { NewPassword } from '../model/NewPass';
import { useForm } from '../hook/HookForm';
import {styles} from '../themes/NewPass';


interface Props extends StackScreenProps<any, any> {}

export const NewPass = ({navigation}: Props) => {
  const {form, onChange} = useForm<NewPassword>({} as NewPassword);
  const {email} = form;
  console.log(form);
  return (
    <>
      <View style={styles.container}>

        <Text style={styles.Title}>NUEVA CONTRASEÑA</Text>

        <InputText  field={'e-mail'} onChnageText={onChange} value={email} placeholder={'Escriba su correo para recuperar contraseña'}/>

        <View style={{marginTop:15}}>
        <Button title={'Enviar'}/>
        </View>


      </View>



    </>
  );
};
