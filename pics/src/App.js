import { useState } from 'react';
import SearchBar from './component/SearchBar';
import ImageList from './component/ImageList';
import serchImages from './api';
const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await serchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
