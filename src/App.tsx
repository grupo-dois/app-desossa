import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, System } from './views';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/system" element={<System />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
