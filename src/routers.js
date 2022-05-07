import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanetScreen from "./screens/planets";

const Rotas = () =>(
    <Router>
        <Routes>
            <Route path='/' element={<PlanetScreen />} />
        </Routes>
    </Router>
  );
;
 
export default Rotas;