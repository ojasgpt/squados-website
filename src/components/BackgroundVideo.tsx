import Hls from 'hls.js'
import { useEffect, useRef } from 'react'

const VIDEO_URL = 'https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8'

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_URL
      return
    }

    if (!Hls.isSupported()) return

    const hls = new Hls()
    hls.loadSource(VIDEO_URL)
    hls.attachMedia(video)

    return () => hls.destroy()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
