import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FormspreeProvider } from "@formspree/react";
function App() {
  return (
    
    <FormspreeProvider project="2212965856730676598" >
      <div className='Home bg-[#B9BAA3]'>
        <Header />
        <Project />
        <Contact />
        <Footer />
      </div>
    </FormspreeProvider>
    
  );
}

export default App;
