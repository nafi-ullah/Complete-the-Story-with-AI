import { useEffect, useState } from "react";

const OutputText = (props) => {
    const { value } = props;
    
    const [message, setMessage] = useState(null);
    var initiated = false;

    const getMessages = async () =>{
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: value,
            })
        }


        try{
            console.log(value);
            const response = await fetch('http://localhost:8000/completions', options)
            const data = await response.json()
            console.log("Frontend..........")
              console.log(data);
              setMessage(data.choices[0].message);
        }catch(error){
                console.error(error);
        }

        initiated = true;
    }

    useEffect(() => {
        if (!initiated) getMessages();
      }, []);

      useEffect(() => {
        
      }, [message]);

    

  return (
    <div class="w-[550px] h-[700px] p-12 text-xl font-serif leading-relaxed rounded-md border-4 border-black bg-gradient-to-b from-white to-gray-400 shadow-xl "> 


        {!message && <p>Thinking about your story......</p>}
        {message && <p>{message.content}</p>}

    </div>
  )
}

export default OutputText