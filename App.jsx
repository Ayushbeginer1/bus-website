import Cuserr from './component/customerr.jsx';
import './App.css'
import Navbar from './component/navbar'
import Map from './component/map'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/map' Component={Map}/>
        <Route path='/'   errorElement = {Cuserr}/>

      </Routes>
    </>
  )
}

export default App