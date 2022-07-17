import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/home';
import Article from './pages/article';
import Help from './pages/help';
import LastWords from './pages/lastwords';
import Call from './pages/call';
import Profile from './pages/profile';
import Login from './pages/login';
import Register from './pages/register';

function App()
{
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="help/" element={<Help />} />
          <Route path="lastwords/">
            <Route index element={<LastWords />} />
            <Route path="call/" element={<Call />} />
          </Route>
          <Route path="profile/" element={<Profile />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
        </Route>
      </Routes >


    </BrowserRouter >
  );
}

export default App;
