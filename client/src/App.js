import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DataDisplay from './components/DataDisplay';
import DishDetails from './components/DishDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<DataDisplay itemCount={6} />} />
          <Route path='/dishdetails' element={<DishDetails />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
