import {ScrollView, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useForm} from '../hook/HookForm';
import {Preguntas} from '../model/preguntas';
import {InputText} from '../components/InputText';
import {styles} from '../themes/Diario';
interface Props extends StackScreenProps<any, any> {}
export const Diario = ({navigation}: Props) => {
  const {form, onChange} = useForm<Preguntas>({} as Preguntas);
  const {pregunta1, pregunta2, pregunta3} = form;
  return (
    <ScrollView>
      <View style={styles.conatiner}>
        <Text style={styles.titulo}>Diario Gratitud</Text>
        <Text>Hoy me encuentro agradecido por:</Text>
        <InputText
          placeholder={'cuentanos'}
          value={pregunta1}
          field={'pregunta1'}
          onChnageText={onChange}
          multiline={true}
        />
        <Text>Que hare para que sea un dia grandioso eh increible:</Text>
        <InputText
          placeholder={'cuentanos'}
          value={pregunta2}
          field={'pregunta2'}
          onChnageText={onChange}
          multiline={true}
        />
        <Text>Caul fue el mejor momento del dia:</Text>
        <InputText
          placeholder={'cuentanos'}
          value={pregunta3}
          field={'pregunta3'}
          onChnageText={onChange}
          multiline={true}
        />
      </View>
    </ScrollView>
  );
};
