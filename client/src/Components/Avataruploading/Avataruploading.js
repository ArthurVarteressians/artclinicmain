
import { useState } from 'react';

function AvatarUploader({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    onImageSelect(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageSelect} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />}
    </div>
  );
}
