import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusSearch from './Component/BusSearch';
import { locations } from './Utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusLayout from './Component/BusLayout';

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState({
    from: locations[0],
    to: locations[2],
    date: "",
  });

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BusSearch searchState={searchState} setSearchState={setSearchState} />} />
          <Route path="/bus/:id" element={<BusLayout selectedSeats={selectedSeats} setSelectedseats={setSelectedSeats} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
