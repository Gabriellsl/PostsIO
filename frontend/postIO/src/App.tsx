import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation/Navigation';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Navigation>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Navigation>
    </>
  );
}

export default App;
