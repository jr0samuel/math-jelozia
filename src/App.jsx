import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Gelosia } from './components/app-gelosia.jsx';
import GelosiaExplicada from './components/GelosiaExplicada.jsx';

export default function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gelosia />} />
          <Route path="/gelosia-explicada" element={<GelosiaExplicada />} />
        </Routes>
      </BrowserRouter>
    </>

  );

};
