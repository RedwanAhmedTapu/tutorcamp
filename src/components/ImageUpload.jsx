import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Cropper from 'react-easy-crop';
import Webcam from 'react-webcam';

const ImageUpload = ({ setSolution }) => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = React.useRef(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));
    setShowCropper(true);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const uploadImage = async (imageBlob) => {
    const formData = new FormData();
    formData.append('file', imageBlob, 'cropped-image.png');

    try {
      const response = await axios.post('/api/upload', formData);
      setSolution(response.data.solution);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const getCroppedImage = async () => {
    const canvas = document.createElement('canvas');
    const imageElement = document.createElement('img');
    imageElement.src = image;

    const scaleX = imageElement.naturalWidth / imageElement.width;
    const scaleY = imageElement.naturalHeight / imageElement.height;

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      imageElement,
      croppedAreaPixels.x * scaleX,
      croppedAreaPixels.y * scaleY,
      croppedAreaPixels.width * scaleX,
      croppedAreaPixels.height * scaleY,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    canvas.toBlob((blob) => {
      uploadImage(blob);
    });
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setShowWebcam(false);
    setShowCropper(true);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-md shadow-md">
      {!image && (
        <>
          <div {...getRootProps()} className="p-4 bg-white border border-dashed border-gray-300 rounded-md cursor-pointer">
            <input {...getInputProps()} />
            <p>Drag & drop an image here, or click to select one</p>
          </div>
          <button
            onClick={() => setShowWebcam(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Take a Photo
          </button>
        </>
      )}

      {showWebcam && (
        <div className="relative">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full rounded-md"
          />
          <button
            onClick={capturePhoto}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Capture
          </button>
        </div>
      )}

      {image && showCropper && (
        <>
          <div className="relative w-full h-64">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <button
            onClick={getCroppedImage}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Crop & Upload
          </button>
        </>
      )}
    </div>
  );
};

export default ImageUpload;
