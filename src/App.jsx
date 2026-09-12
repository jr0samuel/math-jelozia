import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Gelosia } from './components/app-gelosia.jsx';
import GelosiaExplicada from './components/GelosiaExplicada.jsx';

export default function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/versao-um" replace />} />
          <Route path="/versao-um" element={<Gelosia variant="um" />} />
          <Route path="/versao-dois" element={<Gelosia variant="dois" />} />
          <Route path="/gelosia-explicada" element={<GelosiaExplicada />} />
        </Routes>
      </BrowserRouter>

    </>

  );

};
