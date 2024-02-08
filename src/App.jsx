import './App.css'
import { Home,AboutUs,Models,TestimonialsPage,Contact } from './pages';
import NavBar from './components/navbar/NavBar';
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
