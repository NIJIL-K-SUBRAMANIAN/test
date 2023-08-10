import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';






function OrganicProducts() {

  const [apiImage,setApiImage] = useState([]);

  useEffect(() => {
    axios.get('https://api.unsplash.com/search/photos?page=1&query=oil&client_id=gMxi3sjwT4j1qTG24nNDHjjqNtvisrDaoyAtv9nPs2I')
      .then((response) => {
       
        setApiImage(response.data.results);
      })
        
  }, []);

  return (
    <div className='organicproducts'>
      <div>
      <h1 style={{textAlign:'center'}}>BOUTIQUE & SPA PRODUCTS</h1>
     <div className='wrapper'>
     {
          apiImage.map((itm,key)=>{
            return (
              <div className=''>
                <img src={itm.urls.raw} alt="" style={{width:"15rem",height:"15rem"}} />
                <p style={{fontSize:"small"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas accusantium inventore, quis neque </p>
                <button className='button' style={{marginLeft:"4px"}}>ADD TO CART</button>
              </div>
            )
          })
     }
     </div>
     </div>
    </div>
  )
}

export default OrganicProducts
