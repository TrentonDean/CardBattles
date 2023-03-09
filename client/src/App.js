import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Welcome from './components/Welcome';
import GameStart from './components/GameStart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>} default />
          <Route path='/start' element={<GameStart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
