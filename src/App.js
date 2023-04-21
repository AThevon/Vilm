import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Single from './pages/Single';
import Search from './pages/Search';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Single type='movie' />} />
          <Route path="/tv/:id" element={<Single type='tv' />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
