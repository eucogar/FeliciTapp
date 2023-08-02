import {View} from 'react-native';
import {InputText} from './InputText';

interface StepsProps {
  key1: string;
  value1: any;
  text1: string;
  key2?: string;
  value2?: any;
  text2?: string;
  onChange: Function;
}

export default function Steps(props: StepsProps) {
  const {value1, value2, text1, text2, key1, key2, onChange} = props;

  return (
    <View>
      <InputText
        placeholder={text1}
        value={value1}
        field={key1}
        onChnageText={onChange}
      />
      <InputText
        placeholder={text2}
        value={value2}
        field={key2}
        onChnageText={onChange}
      />
    </View>
  );
}
