import React from 'react'
import { NavLink } from 'react-router-dom'

function Errorpage() {
  return (
    <>
    <div className="" id="notfound">
<div className="notfound">
<div className="notfound-404">
<h1  style={{color: 'gray'}} >
    404 ERROR
</h1>
</div>

<NavLink to="/home">
Back To HomePage
</NavLink>
</div>
    </div>
      
    </>
  )
}

export default Errorpage
