import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import PostList from './pages/PostList';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Navigation>
    </>
  );
}

export default App;
