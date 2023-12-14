const ImageGallery = ({ imageArray }) => {
  return (
    <div className="imageWrapper">
      {imageArray.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
