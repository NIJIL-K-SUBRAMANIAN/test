import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';






function OrganicProducts() {

  const [apiImage,setApiImage] = useState();
  useEffect(() => {
    axios.get('https://api.unsplash.com/search/photos?page=1&query=spa&client_id=gMxi3sjwT4j1qTG24nNDHjjqNtvisrDaoyAtv9nPs2I')
      .then((response) => {
       
        setApiImage(response.data.results);
      })
      
  }, []);
  console.log(apiImage);
  return (
    <div className='organicproducts'>
      <h1 style={{textAlign:'center'}}>BOUTIQUE & SPA PRODUCTS</h1>
      
    </div>
  )
}

export default OrganicProducts
