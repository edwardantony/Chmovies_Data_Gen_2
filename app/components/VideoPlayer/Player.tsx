"use client";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  subtitles?: { src: string; lang: string; label: string }[];
  audioTracks?: { src: string; lang: string; label: string }[];
  adTagUrl?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, subtitles = [], audioTracks = [], adTagUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      responsive: true,
      fluid: true,
      autoplay: false,
      preload: "auto",
      playbackRates: [0.5, 1, 1.5, 2],
    });

    // Add Ads if available
    if (adTagUrl) {
      player.ima({ adTagUrl });
    }

    return () => {
      player.dispose();
    };
  }, [adTagUrl]);

  return (
    <div className="video-container">
      <video ref={videoRef} className="video-js vjs-default-skin" poster={poster}>
        <source src={src} type="application/x-mpegURL" />
        
        {/* Subtitles */}
        {subtitles.map((sub, index) => (
          <track key={index} src={sub.src} kind="subtitles" srcLang={sub.lang} label={sub.label} default />
        ))}

        {/* Audio Tracks */}
        {audioTracks.map((audio, index) => (
          <track key={index} src={audio.src} kind="descriptions" srcLang={audio.lang} label={audio.label} />
        ))}
      </video>
    </div>
  );
};

export default VideoPlayer;
