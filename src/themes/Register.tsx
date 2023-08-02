import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  imgp: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  eliminar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  posicion: {
    fontSize: 25,
    borderWidth: 3,
    borderRadius: 100,
    width: 40,
    height: 40,
    textAlign: 'center',
  },
  posicioncolor: {
    fontSize: 25,
    borderWidth: 3,
    borderRadius: 100,
    width: 40,
    height: 40,
    textAlign: 'center',
    backgroundColor: '#FFC66D',
  },
  progreso: {
    width: 50,
    height: 15,
    borderRadius: 5,
    borderWidth: 1,
  },
  progresocolor: {
    backgroundColor: '#41BDEB',
    width: 50,
    height: 15,
    borderRadius: 5,
  },
  foto: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 15,
  },
  container: {
    alignItems: 'center',
  },
  container2: {
    marginHorizontal: 50,
  },
  position: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
