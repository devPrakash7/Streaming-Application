
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Room from './components/Room/Room';


function App() {
  return (
   
     <BrowserRouter>
     <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/room/:roomId'  element={<Room />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
