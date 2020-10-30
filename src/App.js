import React, { useState } from 'react';
import Title from './components/Title';
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
