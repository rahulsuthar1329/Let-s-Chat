import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ececec',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    columnGap: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  leftPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  rightPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  image: {
    borderRadius: 30,
    width: 35,
    height: 35,
  },
  back: {
    height: 20,
    width: 15,
    resizeMode: 'contain',
  },
  camera: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  more: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  send: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  message: {
    color: '#919191',
    fontSize: 13,
  },
  chatArea: {
    paddingHorizontal: 10,
    flex: 1,
  },
  tooltip: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 12,
    marginVertical: 2,
    fontWeight: 'bold',
  },
  sentMessage: {
    alignSelf: 'flex-end',
  },
  receiveMessage: {
    alignSelf: 'flex-start',
  },
  pending: {
    backgroundColor: '#8694fa',
  },
  received: {backgroundColor: '#596cfc'},
  seen: {backgroundColor: '#2740f8'},
  msgSent: {
    backgroundColor: '#7283ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 3,
    borderRadius: 10,
    maxWidth: '80%',
    color: 'white',
  },
  msgReceive: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 3,
    borderRadius: 10,
    maxWidth: '80%',
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
    height: 55,
  },
  inputMessage: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  msgBar: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  emojiSearchBar: {
    paddingVertical: 15,
  },
  containerStyle: {
    borderRadius: 0,
    height: '100%',
    justifyContent: 'space-between',
  },
});
