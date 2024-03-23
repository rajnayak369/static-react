import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className='app-div'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
