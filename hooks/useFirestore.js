import { db } from "@/lib/Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function useFirestore(collectionName) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const getData = () => {
      try {
        const q = query(
          collection(db, collectionName),
          orderBy("createAt", "desc")
        );
        const unsub = onSnapshot(q, (querySnapshot) => {
          const images = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createAt = doc.data().createAt.toDate();
            const userEmail = doc.data().userEmail;
            images.push({ imageUrl, createAt, userEmail });
          });
          setDocs(images);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [collectionName]);
  return {
    docs,
  };
}

export default useFirestore;
