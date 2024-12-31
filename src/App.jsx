import { useState } from 'react'

import './App.css'
import Nav from './Components/Nav'
import First from './Components/First'
import Second from './Components/Third'
import HorizontalScroll from './Components/HorizontalScroll'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Second1 from './Components/Second1'
import Third from './Components/Third'
import Fourth from './Components/Fourth'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Nav/>
   <First/>
   <Second1/>
   <Third/>
   <Fourth/>
   <Blogs/>
   
   <Footer/>
 
   </>
  )
}

export default App
