import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/home';

function App()
{
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
