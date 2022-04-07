import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Myprofile from './pages/Myprofile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="*" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;
