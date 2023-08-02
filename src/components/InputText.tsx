import {TextInput} from 'react-native-paper';

type InputProps = {
  placeholder?: string;
  defaultValue?: string;
  value: any;
  field: string;
  onChnageText: Function;
  secureTextEntry?: boolean;
  multiline?: boolean;
};
export const InputText = (props: InputProps) => {
  const {
    placeholder,
    defaultValue,
    value,
    field,
    onChnageText,
    secureTextEntry,
    multiline,
  } = props;
  return (
    <TextInput
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChangeText={value => onChnageText(value, field)}
      secureTextEntry={secureTextEntry}
      label={placeholder}
      activeOutlineColor={'#51A8AF'}
      mode={'outlined'}
      multiline={multiline}
      style={{
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 15,
      }}
    />
  );
};
