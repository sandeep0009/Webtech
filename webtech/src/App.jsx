
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Plans from './components/Plans'

function App() {

  return (
    <>
      <div className='bg-[#0E2954] p-5'>
      <Header/>
      <Banner/> 
      
      </div>
      <Courses/>
      <Plans/>
      <Contact/>

    </>
  )
}

export default App
