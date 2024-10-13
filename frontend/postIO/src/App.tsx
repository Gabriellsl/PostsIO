import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
