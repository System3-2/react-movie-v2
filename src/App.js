import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import Footer from './pages/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
      <Nav />
      <Footer />    
    </BrowserRouter>
  )
}

export default App;
