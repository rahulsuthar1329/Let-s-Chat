import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    rowGap: 20,
  },
  header: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
  },
  img: {
    resizeMode: 'contain',
    height: 'auto',
    width: 392 - 40,
    aspectRatio: 16 / 9,
  },
  inputs: {
    rowGap: 10,
  },
});
