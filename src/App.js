import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/home';
import Article from './pages/article';
import Help from './pages/help';
import LastWords from './pages/lastwords';
import Call from './pages/call';

function App()
{
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="article/" element={<Article
            headerImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ski_Famille_-_Family_Ski_Holidays.jpg/1200px-Ski_Famille_-_Family_Ski_Holidays.jpg"
            title="Đi dạo với cháu ngoại ở công viên bl bla bla"
            numberOfCompletion="500"
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin mauris non magna congue pretium"
          />} />
          <Route path="help/" element={<Help />} />
          <Route path="lastwords/">
            <Route index element={<LastWords />} />
            <Route path="call/" element={<Call />} />
          </Route>
        </Route>
      </Routes >


    </BrowserRouter >
  );
}

export default App;
