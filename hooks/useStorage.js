import { UserAuth } from "@/lib/Context";
import { db, storage } from "@/lib/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
export default function useStorage() {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { user } = UserAuth();
  const startUpload = (file) => {
    if (!file) {
      return;
    }
    const fileId = crypto.randomUUID();
    const formatFile = file.type.split("/")[1];
    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        const progress = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(downloadURL);
        setProgress(0);
        await addDoc(collection(db, "images"), {
          imageUrl: downloadURL,
          createAt: new Date(),
          userEmail: user?.email,
        });
      }
    );
  };
  return {
    progress,
    error,
    startUpload,
  };
}
