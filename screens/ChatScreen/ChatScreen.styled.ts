import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  heading: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  subHeading: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  search: {
    marginTop: 10,
    borderWidth: 0.7,
    borderColor: '#0002',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  recent: {
    marginBottom: 10,
  },
  recentChat: {
    alignItems: 'center',
    marginBottom: 15,
  },
  recentChatInnerStyles: {
    gap: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tags: {
    width: '50%',
    textAlign: 'center',
    paddingBottom: 5,
  },
  selectedTag: {
    borderBottomColor: '#5b6df3',
    borderBottomWidth: 2,
  },
});
