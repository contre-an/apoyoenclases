import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Cocina from './pages/Cocina';
import Pecuarias from './pages/Pecuarias';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cocina" element={<Cocina />} />
      <Route path="/pecuarias" element={<Pecuarias />} />
    </Routes>
  );
}
