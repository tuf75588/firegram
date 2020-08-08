import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/upload-form';
import ImageGrid from './comps/image-grid';
function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
