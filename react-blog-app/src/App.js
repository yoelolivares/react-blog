import { Routes, Route } from 'react-router-dom';
import AboutusPage from './pages/AboutusPage';
import Homepage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} exact/>
        <Route path='/about-us' element={<AboutusPage />} />
      </Routes>

    </div>
  );
}

export default App;
