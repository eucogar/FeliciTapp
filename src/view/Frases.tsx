import React, {useRef} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/Frases';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewShot, {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';

interface Props extends StackScreenProps<any, any> {}

export const Frases = ({route: {params}, navigation}: Props) => {
  const viewShotRef = useRef(null);

  const captureScreen = async () => {
    try {
      if (viewShotRef.current) {
        const uri = await captureRef(viewShotRef.current, {
          format: 'jpg',
          quality: 0.9,
        });
        shareImage(uri);
      }
    } catch (error) {
      console.error('Error al capturar la pantalla:', error);
    }
  };

  const shareImage = async (uri: string) => {
    try {
      await Share.open({
        url: uri,
        message: 'Hola, te invito a ser feliz descarga la app',
      });
    } catch (error) {
      console.error('Error al compartir la imagen:', error);
    }
  };

  return (
    <>
      <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 0.9}}>
        <ImageBackground
          style={styles.fondo}
          source={require('../img/fondo.jpg')}
          resizeMode="cover">
          <View style={styles.posicion}>
            <Text style={styles.texto}>{params.consejo}</Text>
          </View>
        </ImageBackground>
      </ViewShot>
      <View style={[styles.hiddenElements, styles.heartIcon]}>
        <Icon name={'heart-outline'} size={50} color={'white'} />
      </View>
      <View style={[styles.hiddenElements, styles.shareIcon]}>
        <Icon
          name={'share-outline'}
          onPress={captureScreen}
          size={50}
          color={'white'}
        />
      </View>
    </>
  );
};
