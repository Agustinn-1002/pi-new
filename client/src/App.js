import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import LandingPage from './components/LandingPage'


function App() {
  return (
    <div className="App">
      <LandingPage/>
    </div> 
  );
}

export default App;
