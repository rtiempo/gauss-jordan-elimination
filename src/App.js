import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Specification from './components/Specification';
import Conclusion from './components/Conclusion';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Introduction />}/>
          <Route path="/Calculator" element={<Calculator />}/>
          <Route path="/Specification" element={<Specification />}/>
          <Route path="/Conclusion" element={<Conclusion />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
