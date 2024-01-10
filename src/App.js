import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Myworks from './components/Myworks';
import Contactme from './components/Contact';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/myworks' element={<Myworks/>}/>
        <Route path='/contactme' element={<Contactme/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
