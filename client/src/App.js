import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DataDisplay from './components/DataDisplay';
import DishDetails from './components/DishDetails';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer autoClose={2000} position={'top-right'} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dishlist' element={<DataDisplay itemCount={6} />} />
          <Route path='/dishdetails' element={<DishDetails />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
