import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Specification from './components/Specification';
import Conclusion from './components/Conclusion';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Calculator />
      <Specification />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;
