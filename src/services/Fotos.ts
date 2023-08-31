import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import RNImageToBase64 from 'react-native-image-base64';

export const Galery = async (image: string[], onChange: Function) => {
  try {
    await launchImageLibrary(
        { mediaType: 'photo', selectionLimit: 1 },
        async (response: any) => {
          const selectedImage = response.assets[0]?.uri;

          if (selectedImage) {
            try {
              const croppedImage = await ImagePicker.openCropper({
                path: selectedImage, mediaType: "photo",
                width: 300,
                height: 400
              });

              const base64Image = await RNImageToBase64.getBase64String(croppedImage.path);
              const imageCopy = [...image, base64Image];
              console.log(imageCopy);
              onChange(imageCopy, 'Imagen');
            } catch (error) {
              console.log(error);
            }
          }
        },
    );
  } catch (error) {
    console.log(error);
  }
};

export const Camera = async (image: string[], onChange: Function) => {
  try {
    await launchCamera({ mediaType: 'photo' }, async (response: any) => {
      const capturedImage = response.assets[0]?.uri;

      if (capturedImage) {
        try {
          const croppedImage = await ImagePicker.openCropper({
            path: capturedImage,
            width: 300, mediaType: "photo",
            height: 400
          });

          const base64Image = await RNImageToBase64.getBase64String(croppedImage.path);
          const imageCopy = [...image, base64Image];
          console.log(imageCopy);
          onChange(imageCopy, 'Imagen');
        } catch (error) {
          console.log(error);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
