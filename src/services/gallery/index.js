import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export const openCamera = (callback) => {
  launchCamera(options, (response) => {
    callback(response)
  })
}

export const openGallery = (callback) => {
  launchImageLibrary(options, (response) => {
    callback(response)
  })
}
