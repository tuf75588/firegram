import React from 'react';
import {
  storage as projectStorage,
  firestore as projectFirestore,
  serverTimestamp,
} from '../firebase/config';

// this hook will handle file uploads and return metainfo about our upload.
function useStorage(file) {
  React.useEffect(() => {
    // this callback needs to be synced with the file parameter
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // mark as complete at this point.
        const url = await storageRef.getDownloadURL();
        await collectionRef.add({ url, createdAt: serverTimestamp() });
        setUrl(url);
      }
    );
  }, [file]);
  const [progress, setProgress] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [url, setUrl] = React.useState(null);
  return { progress, error, url };
}

export default useStorage;
