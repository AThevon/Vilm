import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/film" element={<Single />} />
    </Routes>
  );
}

export default App;
