import React from 'react';

function UploadForm() {
  function handleFileUpload(event) {
    // grab the first file from our upload (only allowing one at a time)
    const input = event.currentTarget.files[0];
    console.log(input);
  }
  return (
    <form>
      <input type="file" onChange={handleFileUpload} />
    </form>
  );
}
export default UploadForm;
