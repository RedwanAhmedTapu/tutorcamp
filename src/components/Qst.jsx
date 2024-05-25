import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const LLMApp = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspectRatio: 16 / 9 });
  const [qstn, setQstn] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  const handleImageCrop = async () => {
    if (image) {
      const canvas = document.createElement('canvas');
      const img = new Image();
      img.src = image;
      img.onload = () => {
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(
          img,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height
        );
        const croppedImage = canvas.toDataURL('image/jpeg');
        Tesseract.recognize(croppedImage, 'eng')
          .then(({ data: { text } }) => {
            const lines = text.split('\n');
            if (lines.length > 0) {
              setQstn(lines[0]);
              setAnswer(lines.slice(1).join('\n'));
            }
          })
          .catch((err) => {
            console.error(err);
            setError('Error reading image. Please try again.');
          });
      };
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <ReactCrop
            src={image}
            crop={crop}
            onChange={handleCropChange}
          />
          <button onClick={handleImageCrop}>Crop and Read Text</button>
        </div>
      )}
      {qstn && (
        <div>
          <h2>Question:</h2>
          <p>{qstn}</p>
        </div>
      )}
      {answer && (
        <div>
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LLMApp;
