import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 10,
    height: 90,
  },
  recentContainer: {
    height: 120,
    borderColor: '#ddd',
    borderBottomWidth: 0.5,
  },
  image: {
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  heading: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  subHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    paddingBottom: 5,
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 0.7,
    borderColor: '#0002',
    borderRadius: 30,
    paddingLeft: 12,
  },
  search: {
    paddingVertical: 8,
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
    paddingHorizontal: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conversationInnerStyle: {
    paddingHorizontal: 10,
  },
});
