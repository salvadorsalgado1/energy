 
import './App.css';
import { Routes, Route  } from "react-router-dom";
import Landing from './pages/landing/Landing'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
