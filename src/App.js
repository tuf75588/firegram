import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/upload-form';
import ImageGrid from './comps/image-grid';
import Modal from './comps/modal';
function App() {
  const [selected, setSelected] = React.useState(null);
  const reset = () => setSelected(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelected} />
      {selected && <Modal selected={selected} reset={reset} />}
    </div>
  );
}

export default App;
