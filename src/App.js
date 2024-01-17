
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Room from './components/Room/Room';
import Play from './components/playvideo/play';


function App() {
  return (
   
     <BrowserRouter>
     <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/room/:roomId'  element={<Room />} />
      <Route path='/play'  element={<Play />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
