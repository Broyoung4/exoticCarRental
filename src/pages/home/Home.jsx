import './home.css'
import NavBar from '../../components/navbar/NavBar';  
import {Header,BookCar,CarPick,Banner, ChooseUs, Reviews,Download, Faq, About, Footer } from '../../containers';  



export default function Home() {
  return (
    <>
      <div className='gradient__bg'>
        <Header />
      </div>
      <BookCar />
      <About />
      <CarPick />
      <Banner />
      <ChooseUs />
      <Reviews />
      <Faq /> 
      <Download />
      <Footer />
    </>
  )
}
