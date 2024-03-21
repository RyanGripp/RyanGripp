import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Erro from './pages/Erro';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            <Route path="/RyanGripp" element={<Home/>} />
            <Route path='*' element={<Erro/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
