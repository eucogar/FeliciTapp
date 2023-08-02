import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {DatePicker} from '../components/DatePicker';

interface Props extends StackScreenProps<any, any> {}

export const Proposito = ({navigation}: Props) => {
  return (
    <>
      <Text>Perfil</Text>
    </>
  );
};
