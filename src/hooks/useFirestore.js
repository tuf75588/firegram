import React, { useState, useEffect } from 'react';
import { firestore as projectFirestore } from '../firebase/config';
function useFirestore(collection) {
  useEffect(() => {
    // reach into a collection, listen for changes
    const unsubscribe = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        // callback fires once initially, and on collection changes
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id() });
        });
        setDocs(documents);
      });
    return () => unsubscribe();
  }, [collection]);

  const [docs, setDocs] = useState([]);
  return { docs };
}

export default useFirestore;
