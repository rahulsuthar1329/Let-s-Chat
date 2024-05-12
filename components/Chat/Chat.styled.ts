import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#0002',
    paddingVertical: 12,
    position: 'relative',
  },
  image: {
    borderRadius: 30,
    width: 40,
    height: 40,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: '#919191',
  },
  info: {
    position: 'absolute',
    right: 0,
    rowGap: 5,
    paddingTop: 10,
    alignItems: 'center',
  },
  time: {
    fontSize: 12,
  },
  countContainer: {
    backgroundColor: '#5b6df3',
    width: 20,
    height: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageCount: {
    color: 'white',
    fontSize: 12,
  },
});
