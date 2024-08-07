import axios from 'axios';

const IMAGE_UPLOAD_URL = 'https://your-image-upload-url.com';

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append('file', image);

  const response = await axios.post(IMAGE_UPLOAD_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.url;
};
