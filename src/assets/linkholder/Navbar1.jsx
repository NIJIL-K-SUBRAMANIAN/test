import { useState } from 'react'
import { Link } from 'react-router-dom'




function Navbar1() {
 

  return (
   <div className='navbar'>
<ul className="ul">
            <li className='li'>
                <Link className='li' to="/">HOME</Link>
            </li>
            
            <li>
                <Link className='li' to="/organicproducts">ORGANIC PRODUCTS</Link>
            </li>
 </ul>
 <ul className='ul'>
    <li>   
        <Link className='li' to="/members">MEMBERS //REGISTER HERE</Link>
    </li>
 </ul>
   </div>
  )
}

export default Navbar1
