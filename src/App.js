
import Header from "./pages/header";
import Block from "./pages/block";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Loader from './loader';
import useLoader from './useLoader';

function App() {
  let{loading}=useLoader()
  if(loading){
    return <Loader/>
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Block />} />;
        <Route path="about" element={<About />} />;
        <Route path="contact" element={<Contact />} />;
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
