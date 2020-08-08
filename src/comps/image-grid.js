import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
function ImageGrid({ setSelectedImage }) {
  const { docs } = useFirestore('images');
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              layout
              key={doc.id}
              className="img-wrap"
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={doc.url}
                alt={`img for ${doc.url}`}
                onClick={() => setSelectedImage(doc.url)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
}
export default ImageGrid;
