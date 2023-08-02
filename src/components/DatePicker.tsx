import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../themes/Register';

type DateProps = {
  value: any;
  field: string;
  onChangeText: Function;
};

export const DatePicker = (props: DateProps) => {
  const {value, field, onChangeText} = props;
  const [showPicker, setShowPicker] = useState(false);
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());

  // Functions to handle showing and hiding the date picker
  const showDatePicker = () => {
    setShowPicker(true);
  };

  const hideDatePicker = () => {
    setShowPicker(false);
  };

  const handleDateChange = (date: any) => {
    const year = fechaNacimiento.getFullYear();
    const month = fechaNacimiento.getMonth() + 1; // Months are zero-indexed
    const day = fechaNacimiento.getDate();
    const formattedDate = `${month}-${day}-${year}`;
    onChangeText(formattedDate, field);
    hideDatePicker();
  };

  return (
    <View>
      <View style={styles.foto}>
        <Icon name={'calendar-outline'} size={30} onPress={showDatePicker} />
        {value ? <Text>{value.toString()}</Text> : <Text>Select a date</Text>}
      </View>
      {showPicker && (
        <DatePickerModal
          visible={showPicker}
          mode="single"
          onDismiss={hideDatePicker}
          date={value}
          onConfirm={handleDateChange}
        />
      )}
    </View>
  );
};
