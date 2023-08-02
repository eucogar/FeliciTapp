import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 10,
    margin: 10,
    marginVertical: 30,
  },
  position: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foto: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    height: 200,
    width: 200,
  },
  imgp: {
    height: 350,
    width: 350,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  fondo: {
    width: '100%',
    height: '100%',
  },
  text: {
    margin: 10,
    fontSize: 20,
    color: 'white',
  },
  texto: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  hiddenElements: {
    position: 'absolute',
    alignSelf: 'center',
    top: 600,
  },
  heartIcon: {
    left: 16,
    top: 500,
  },
  shareIcon: {
    right: 16,
    top: 500,
  },
  happyIcon: {
    bottom: 16,
    alignSelf: 'center',
  },
  felici: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
