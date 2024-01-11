
import './App.css'
import Music from './components/Music'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import MusicItems from './components/MusicItems'
function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' index element={<Music/>}/>
    <Route path='/music/:id' element={<MusicItems/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
