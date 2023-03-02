import './App.css';
import LandingPage from './components/LandingPage'
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home'
import PokeDetaild from './components/PokeDetaild'
import FormCreatePoke from './components/FormCreatePoke'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home/:id' element={<PokeDetaild/>} />
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/create' element={<FormCreatePoke/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div> 
  );
}

export default App;
