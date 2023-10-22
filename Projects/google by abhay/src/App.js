import './App.css';
// import Search from './Search';
import SearchPage from './SearchPage';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;