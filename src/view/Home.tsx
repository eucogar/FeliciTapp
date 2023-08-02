import React, {useContext, useEffect, useRef} from 'react';
import {
  View,
  Button,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewShot, {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import {Camera, Galery} from '../services/Fotos';
import {useForm} from '../hook/HookForm';
import {imagenes} from '../model/Imagenes';
import {consejos} from '../database/Consejos';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/Home';
import {StackScreenProps} from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  const {form, onChange} = useForm<imagenes>({} as imagenes);
  const {Imagen} = form;
  const {Imagenes} = useContext(AuthContext);
  const viewShotRef = useRef<ViewShot>(null);

  const NewImagen = (index: number) => {
    const imagenes = [...Imagen];
    imagenes.splice(index, 1);
    onChange(imagenes, 'Imagen');
  };

  const fotos = () => {
    Imagen && Imagen.length === 7
      ? Alert.alert('Limite', 'Borra la imagen para seleccionar otra', [
          {
            text: 'cancelar',
            style: 'cancel',
          },
        ])
      : Alert.alert('Foto', 'Selecciona la cámara o la galería', [
          {
            text: 'Galería',
            onPress: () => Galery(Imagen, onChange),
          },
          {
            text: 'Cámara',
            onPress: () => Camera(Imagen, onChange),
          },
        ]);
  };

  const {img} = useContext(AuthContext);

  useEffect(() => {
    obtenerConsejoAleatorio();
  }, []);

  const obtenerConsejoAleatorio = () => {
    const consejoAleatorio =
      consejos[Math.floor(Math.random() * consejos.length)];
    return consejoAleatorio;
  };
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

  const consejo = obtenerConsejoAleatorio();

  return (
    <View>
      <ViewShot ref={viewShotRef} options={{format: 'jpg', quality: 0.9}}>
        <ImageBackground
          style={styles.fondo}
          source={require('../img/fondo.jpg')}
          resizeMode="cover">
          <View style={styles.position}>
            <Text style={styles.text}>Recuerda...</Text>
            <Icon name={'brush-outline'} size={30} color={'white'} />
          </View>

          <Text style={styles.texto}>{consejo}</Text>
          <View style={{marginVertical: 30}}>
            <ScrollView horizontal={true}>
              <View style={styles.position}>
                {!Imagen || Imagen.length < 7 ? (
                  <TouchableOpacity style={styles.foto}>
                    <Icon name={'camera'} onPress={fotos} size={45} />
                    <Text style={{fontSize: 16, textAlign: 'center'}}>
                      Selecciona 7 fotos de tus momentos más felices
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
              <View style={{flexDirection: 'row'}}>
                {Imagen?.map((item, index) => (
                  <TouchableOpacity style={{alignItems: 'center'}} key={index}>
                    <Image style={styles.imgp} source={{uri: item}} />
                    <Icon
                      onPress={() => NewImagen(index)}
                      name={'trash-outline'}
                      size={30}
                      color={'white'}
                    />
                  </TouchableOpacity>
                ))}
                {Imagen && Imagen.length > 0 ? (
                  <TouchableOpacity
                    style={styles.foto}
                    onPress={() => Imagenes(form)}>
                    <Icon name={'save-outline'} size={45} />
                    <Text style={{fontSize: 16, textAlign: 'center'}}>
                      Guardar las imágenes
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </ScrollView>
          </View>
          <View style={styles.hiddenElements}>
            <Text style={styles.felici}>FeliciTapp</Text>
          </View>
        </ImageBackground>
      </ViewShot>
      <View style={[styles.hiddenElements, styles.heartIcon]}>
        <Icon
          name={'heart-outline'}
          size={50}
          color={'white'}
          onPress={() => navigation.navigate('Frases', {consejo})}
        />
      </View>
      <View style={[styles.hiddenElements, styles.shareIcon]}>
        <Icon
          name={'share-outline'}
          onPress={captureScreen}
          size={50}
          color={'white'}
        />
      </View>
    </View>
  );
};
