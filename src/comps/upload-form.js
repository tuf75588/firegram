import React, { useState, useEffect } from 'react';

function UploadForm() {
  function handleFileUpload(event) {
    const allowedTypes = ['image/png', 'image/jpeg'];
    // grab the first file from our upload (only allowing one at a time)
    const input = event.currentTarget.files[0];
    console.log(input);
    if (!input || !allowedTypes.includes(input.type)) {
      // if they hit cancel
      setFile(null);
      setError('Please select an image file (png or jpg)');
    } else {
      setFile(input);
      setError(null);
    }
  }
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="file" onChange={handleFileUpload} />
      <div className="output">
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
        {file && <p>the file you chose was {file.name} </p>}
      </div>
    </form>
  );
}
export default UploadForm;
