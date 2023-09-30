import './App.css'
import FlowerFinal from './Components/FlowerFinal/FlowerFinal';
import Home from './Components/Home/Home';
import {Route , Routes } from 'react-router-dom';
function App() {

  return (
    < >
  
   <Routes>
<Route path="/" element={ <Home />} />
 <Route path='/flowers' element={ <FlowerFinal/>} />
</Routes>

    </>
  )
}

export default App
