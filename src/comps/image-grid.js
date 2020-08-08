import React from 'react';
import useFirestore from '../hooks/useFirestore';
function ImageGrid() {
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div key={doc.id} className="img-wrap">
              <img src={doc.url} alt={`img for ${doc.url}`} />
            </div>
          );
        })}
    </div>
  );
}
export default ImageGrid;
