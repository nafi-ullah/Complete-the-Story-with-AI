
import wall from '../assets/wall.gif';

import InputText from './InputText';
import OutputText from './OutputText';
import React, { useState } from 'react';

const HomePage = () => {

  const [showButton, setShowButton] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [value, setValue] = useState(null);
  

  return (
    <div class="h-screen flex flex-col">
    <div class="flex-1 bg-white"></div>
    <div class="flex-1 bg-gray-300"></div>
    
    <div class="absolute top-48 left-[400px]  space-x-72 flex">
    
    <div class="w-[500px] h-[750px] ">
    <img src={wall} alt="wallpaper"/>
       </div>
       
       {showButton && <InputText 
       setShowButton = {setShowButton}
       setShowImage = {setShowImage}
       setValue= {setValue}
       />}
      {showImage && (
        <OutputText 
        value = {value}
        />
      )}
     
    </div>
  </div>
  )
}

export default HomePage;