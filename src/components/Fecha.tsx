import DatePicker from 'react-native-date-picker';

type FechatProps = {
  value: any;
  field: string;
  onChnageText: Function;
};
export const Fecha = (props: FechatProps) => {
  const {value, field, onChnageText} = props;

  return (
    <DatePicker
      date={value}
      onDateChange={value => onChnageText(value, field)}
      mode="date"
    />
  );
};
