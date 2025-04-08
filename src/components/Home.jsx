import React, { useState } from 'react'
import UploadImage from './UploadImage'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI} from '../utils/enhanceImageApi';

const Home = () => {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [enchancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false)

  const uploadedImageHandler = async(file) => {

    setUploadedImage(URL.createObjectURL(file)); // This will create a local URL for the uploaded image
    setloading(true);

    try {
      const enhancedURL= await enhancedImageAPI(file); //fetching enhanced image from api
      setEnhancedImage(enhancedURL.image);
      console.log(enhancedURL.image)
      setloading(false);
    } catch (error) {
      if (error.response) {
        setloading(false);
        alert("Error: " + error.message);
      }
    }

  }
  return (
    <>
      <UploadImage uploadedImageHandler={uploadedImageHandler} />
      <ImagePreview loading={loading} upload={uploadedImage} enchance={enchancedImage} />
    </>
  )
}

export default Home