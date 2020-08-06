import React from 'react';
import useStorage from '../hooks/useStorage';

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  React.useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
}

export default ProgressBar;