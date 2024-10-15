import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation/Navigation';
import Homepage from './pages/Homepage';
import Category from './pages/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/category/:categoryId/" element={<Category />}></Route>
            <Route path="/category/:categoryId/posts" element={<Category />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Navigation>
      </BrowserRouter>
    </>
  );
}

export default App;
