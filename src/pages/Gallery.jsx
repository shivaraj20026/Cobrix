import { useState, useEffect } from 'react';
import '../styles/Gallery.css';

// Import all images
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';
import image11 from '../assets/image11.jpeg';
import image12 from '../assets/image12.jpeg';
import image13 from '../assets/image13.jpeg';
import image14 from '../assets/image14.jpeg';
import image15 from '../assets/image15.jpeg';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});

  // Gallery data
  const galleryItems = [
    { id: 1, category: 'construction', image: image1 },
    { id: 2, category: 'construction', image: image2 },
    { id: 3, category: 'construction', image: image3 },
    { id: 4, category: 'construction', image: image4 },
    { id: 5, category: 'renovation', image: image5 },
    { id: 6, category: 'construction', image: image6 },
    { id: 7, category: 'construction', image: image7 },
    { id: 8, category: 'construction', image: image8 },
    { id: 9, category: 'industrial', image: image9 },
    { id: 10, category: 'construction', image: image10 },
    { id: 11, category: 'construction', image: image11 },
    { id: 12, category: 'interior-design', image: image12 },
    { id: 13, category: 'interior-design', image: image13 },
    { id: 14, category: 'renovation', image: image14 },
    { id: 15, category: 'industrial', image: image15 }
  ];

  useEffect(() => {
    // Reset loaded state when filter changes
    setLoadedImages({});
    
    // Preload images for current filter
    const itemsToLoad = filter === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === filter);

    itemsToLoad.forEach(item => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [item.id]: true
        }));
      };
      img.src = item.image;
    });
  }, [filter]);

  const renderGalleryItem = (item) => (
    <div key={item.id} className="gallery-item">
      <div className="gallery-image">
        {!loadedImages[item.id] && (
          <div className="image-loading">Loading...</div>
        )}
        <img
          src={item.image}
          alt=""
          className={loadedImages[item.id] ? 'loaded' : ''}
          onLoad={() => {
            setLoadedImages(prev => ({
              ...prev,
              [item.id]: true
            }));
          }}
        />
      </div>
    </div>
  );

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filter">
            <h2>OUR PROJECTS</h2>
            <div className="buttons-container">
              <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button
                className={filter === 'construction' ? 'active' : ''}
                onClick={() => setFilter('construction')}
              >
                Construction
              </button>
              <button
                className={filter === 'renovation' ? 'active' : ''}
                onClick={() => setFilter('renovation')}
              >
                Renovation
              </button>
              <button
                className={filter === 'industrial' ? 'active' : ''}
                onClick={() => setFilter('industrial')}
              >
                Industrial
              </button>
            </div>
          </div>

          <div className="gallery-grid">
            {filteredItems.map(renderGalleryItem)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
