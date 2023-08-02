import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  texto: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  fondo: {
    width: '100%',
    height: '100%',
  },
  posicion: {
    padding: 10,
    alignSelf: 'center',
    marginVertical: 150,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
