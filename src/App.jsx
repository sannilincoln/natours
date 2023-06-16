import { useState } from 'react'
import './Style.css'
import Logo from './assets/img/logo-white.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="header">
       <div className="logo-box">
        <img src={Logo} alt="log" className='logo' />
       </div>

       <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
           
       </h1>
  </div>
    </>
  )
}

export default App
