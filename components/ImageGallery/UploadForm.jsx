"use client";

import useStorage from "@/hooks/useStorage";
import { useState } from "react";

export default function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const {startUpload}= useStorage();
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      //start uploading
      startUpload(selectedFile);
    }
    setSelectedFile(null);
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center  gap-8">
      <input type="file" name="upload" onChange={handleChange} className="" />
      <button className=" bg-white p-5" type="submit">Upload</button>
    </form>
  );
}
