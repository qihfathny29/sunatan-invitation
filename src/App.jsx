import { useState } from "react"
import MosqueDoorPage from "./components/MosqueDoorPage"
import MainPage from "./components/MainPage"

export default function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="min-h-screen">
      {!isOpened ? (
        <MosqueDoorPage onOpen={() => setIsOpened(true)} />
      ) : (
        <MainPage />
      )}
    </div>
  )
}