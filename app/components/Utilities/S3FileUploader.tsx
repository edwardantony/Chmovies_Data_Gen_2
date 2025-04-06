import { useState } from "react";

interface UploadProps {
  presignedUrl: string;
  file: File;
  key: string;
  type: "image" | "subtitle" | "audiotrack" | "video";
  onUploadComplete: (success: boolean, url?: string) => void;
  onProgressUpdate: (progress: number) => void; // Callback to return progress
}

const S3FileUploader = ({ presignedUrl, file, key, type, onUploadComplete, onProgressUpdate }: UploadProps) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadFileToS3 = async (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", presignedUrl, true);
      xhr.setRequestHeader("Content-Type", file.type);

      // Track upload progress
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
          onProgressUpdate(progress); // Send progress to parent
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log(`✅ ${type} uploaded successfully!`);
          const fileUrl = `https://your-s3-bucket.s3.amazonaws.com/${key}`;
          onUploadComplete(true, fileUrl);
          resolve(true);
        } else {
          console.error(`❌ Error uploading ${type}:`, xhr.statusText);
          onUploadComplete(false);
          reject(false);
        }
      };

      xhr.onerror = () => {
        console.error(`❌ Network error while uploading ${type}`);
        onUploadComplete(false);
        reject(false);
      };

      xhr.send(file);
    });
  };

  return { uploadFileToS3, uploadProgress };
};

export default S3FileUploader;
