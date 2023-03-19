import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SeeAll from './pages/SeeAll';
import ResturantDetail from './pages/ResturantDetail';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/see-all" element={<SeeAll />} />
        <Route exact path="/detail" element={<ResturantDetail />} />
      </Routes>
    </>
  );
}

export default App;
