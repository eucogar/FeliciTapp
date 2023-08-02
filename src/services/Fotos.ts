import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNImageToBase64 from 'react-native-image-base64';

export const Galery = async (image: string[], onChange: Function) => {
  try {
    await launchImageLibrary(
      {mediaType: 'photo', selectionLimit: 1},
      async (response: any) => {
        let imageCopy: string[] = image ? image : [];

        for (let asset of response.assets) {
          try {
            // Store only the image URI instead of converting to base64
            imageCopy.push(asset.uri);
          } catch (error) {
            console.log(error);
          }
        }

        console.log(imageCopy);
        onChange(imageCopy, 'Imagen');
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const Camera = async (image: string[], onChange: Function) => {
  try {
    await launchCamera({mediaType: 'photo'}, async (response: any) => {
      let imageCopy: string[] = image ? image : [];

      for (let asset of response.assets) {
        try {
          // Store only the image URI instead of converting to base64
          imageCopy.push(asset.uri);
        } catch (error) {
          console.log(error);
        }
      }

      console.log(imageCopy);
      onChange(imageCopy, 'Imagen');
    });
  } catch (error) {
    console.log(error);
  }
};
