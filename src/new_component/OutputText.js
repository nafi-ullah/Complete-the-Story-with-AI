import React from 'react'
import { useEffect } from "react";

const OutputText = () => {
    var initiated = false;

    const getMessages = async () =>{
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: "how to use phone?",
            })
        }


        try{
            const response = await fetch('http://localhost:8000/completions', options)
            const data = await response.json()
            console.log("Frontend..........")
              console.log(data);
        }catch(error){
                console.error(error);
        }

        initiated = true;
    }

    useEffect(() => {
        if (!initiated) getMessages();
      }, []);
    

  return (
    <div class="w-[550px] h-[750px] bg-gray-500"> 


        Hello

    </div>
  )
}

export default OutputText