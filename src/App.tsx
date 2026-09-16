
import './App.css'
import Companies from './components/Companies'
import HeroSection from './components/HeroSection'
import MiddleComponent from './components/MiddleComponent'
import Navbar from './components/Navbar'
import Speed from './components/Speed'

function App() {
  
  return (
    <div className='flex sm:flex-col px-2 sm:px-6 md:px-4 lg:px-24 w-full overflow-x-hidden'>
  <Navbar />
  <HeroSection />
  <Companies />
  <MiddleComponent />
  <Speed />
    </div>
  )
}

export default App

