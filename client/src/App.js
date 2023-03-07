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
        <Route exact path='/Home/:id' element={<PokeDetaild/>} />
        <Route exact path='/Home' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div> 
  );
}

export default App;
