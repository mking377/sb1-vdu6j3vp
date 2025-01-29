import React from 'react';

interface GalleryProps {
  category: string;
}

const Gallery: React.FC<GalleryProps> = ({ category }) => {
  // Generate 15 placeholder images for each category
  const images = Array(15).fill(null).map((_, index) => ({
    id: index + 1,
    url: `https://source.unsplash.com/800x600/?door,security&sig=${category}-${index}`,
    alt: `${category} - صورة ${index + 1}`
  }));

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;