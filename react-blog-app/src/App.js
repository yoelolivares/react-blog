import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/Aboutus';
import Homepage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} exact/>
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
