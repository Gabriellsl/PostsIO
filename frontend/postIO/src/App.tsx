import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NotFound from './pages/NotFound';
import Navigation from './components/navigation/Navigation';
import Homepage from './pages/Homepage';
import Category from './pages/Category';
import { CategoryProvider } from './contexts/CategortyContext';
import { ParamsProvider } from './contexts/ParamsContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <ParamsProvider>
          <CategoryProvider>
            <Navigation>
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/category/:categoryId/" element={<Category />}></Route>
                <Route path="/category/:categoryId/posts" element={<Category />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </Navigation>
          </CategoryProvider>
        </ParamsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
