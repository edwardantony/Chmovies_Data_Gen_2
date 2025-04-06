import React, { useState } from 'react';

interface VideoData {
  video: {
    videoFile: File | null;
    videoUrl?: string;
  }
}

interface VideoUploadProps {
  onVideoDataChange: (newVideoData: VideoData) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoDataChange }) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newVideoUrl = URL.createObjectURL(file);
      setVideoFile(file);
      setVideoUrl(newVideoUrl);

      // Update formData with the video file
      onVideoDataChange({
        video: {
          videoFile: file,
          videoUrl: newVideoUrl,
        }
      });
    }
  };

  return (
    <div className="mb-8">
      {/* Video Upload Section */}
      <div className="flex-1 border-b-2 border-gray-300 p-2 mb-4">
        <label className="block text-sm font-medium text-gray-700">Upload Video File</label>
      </div>

      <div className="mt-1">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="mt-1 block w-full p-2 border rounded bg-white"
        />
      </div>
    </div>
  );
};

export default VideoUpload;