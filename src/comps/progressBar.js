import React from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  React.useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    />
  );
}

export default ProgressBar;
