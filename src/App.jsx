import { useState, useRef, useEffect } from "react"
import MosqueDoorPage from "./components/MosqueDoorPage"
import MainPage from "./components/MainPage"
import musicFile from "./assets/music/Al Hijrotu - By Adzando Davema ( Cover ) (320).mp3"

export default function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Autoplay dicegah browser:", e))
    }
  }, [isOpened])

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="min-h-screen relative">
      <audio ref={audioRef} src={musicFile} loop />
      
      {isOpened && (
        <button 
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-[#d4af37] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          style={{ width: "50px", height: "50px" }}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 pl-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          )}
        </button>
      )}

      {!isOpened ? (
        <MosqueDoorPage onOpen={() => setIsOpened(true)} />
      ) : (
        <MainPage />
      )}
    </div>
  )
}