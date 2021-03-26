import { StyleSheet } from 'react-native'
import { Colors } from './Colors'

export const GlobalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  fillandCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  floatActionButton: {
    backgroundColor: Colors.primary,
    width: 54,
    height: 54,
    borderRadius: 27,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    bottom: 16,
    right: 16
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: Colors.inputTextBackground,
    borderColor: Colors.ligthGray,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginHorizontal: 16,
    borderRadius: 20
  },
  searchBarInputText: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16
  },
  clearSearchBar: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    padding: 4,
    borderRadius: 20,
    marginRight: 8
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    width: '100%',
    height: 56,
    alignItems: 'center',
    elevation: 3
  },
  headerIcon: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  headerLogoContainer: {
    flex: 1,
    alignItems: 'center'
  },
  headerLogo: {
    width: 24,
    height: 20
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerChildren: {
    flex: 1,
    paddingVertical: 8
  },
  circleAvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  avatarImage: {
    resizeMode: 'stretch'
  },
  circleAvatarText: {
    color: Colors.background,
    fontWeight: 'bold',
    fontSize: 18
  },
  actionButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: Colors.transparentBg,
    padding: 4,
    borderRadius: 26
  },
  followingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 12
  },
  followingNumber: {
    fontSize: 16,
    color: Colors.secondary,
    fontWeight: 'bold'
  },
  followingText: {
    fontSize: 16,
    color: Colors.darkGray,
    paddingHorizontal: 4
  },
  dividerLine: {
    marginVertical: 8,
    width: '100%',
    height: 0.8,
    backgroundColor: Colors.xligthGray
  }
})
