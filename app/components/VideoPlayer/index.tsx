import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">OTT Video Player</h1>
      <VideoPlayer
        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        poster="https://your-thumbnail-url.com/poster.jpg"
        subtitles={[
          { src: "/subtitles/english.vtt", lang: "en", label: "English" },
          { src: "/subtitles/hindi.vtt", lang: "hi", label: "हिन्दी" },
        ]}
        audioTracks={[
          { src: "/audio/english.mp3", lang: "en", label: "English Audio" },
          { src: "/audio/hindi.mp3", lang: "hi", label: "हिन्दी Audio" },
        ]}
        adTagUrl="https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/123456789/video_ad&impl=s&gdfp_req=1&env=vp&output=vast"
      />
    </div>
  );
}
