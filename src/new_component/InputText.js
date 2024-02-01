
import { TypeAnimation } from 'react-type-animation';

const InputText = (props) => {
    const {  setShowImage, setShowButton , setValue} = props;

    const handleButtonClick = () => {
        const srtInput = document.getElementById('srtInput');
        const srtText = srtInput.value;

        setValue(srtText);
  
        setShowButton(false);
        setShowImage(true);
    
      };

  return (
    <div class="w-[550px] h-[750px] "> 
    <div class=" text-gray-800 text-[64px] text-center font-bold font-['Inter']">Our Story</div>
    <div class="w-[527px] h-[231px] text-center text-black text-xl font-normal font-['Inter']">
    <TypeAnimation
    sequence={[
      'Once upon a time in the whimsical town of Serenityville, there lived some idle and bad people . whenever he wiggled his nose, and then .....',
      1000, 
      'Once upon a time in the whimsical town of Serenityville, there lived a man.  He was very honest. whenever he wiggled his nose, and then .....',
      1000, 
    ]}
    wrapper="p" // use a paragraph tag as the wrapper
    speed={50} // speed of the typing animation
    style={{ whiteSpace: 'pre-line' }} // preserve line breaks and spacing
    repeat={Infinity} // repeat the animation indefinitely
  />
    </div>
    <div class=" text-gray-800 text-[40px] text-center font-bold font-['Inter'] my-8">Complete your Story</div>
    <div className="flex items-center ">
    <div class="w-full flex flex-col items-center">

    <textarea 
    id="srtInput"
    className="w-full h-48 px-4 text-lg bg-white border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
   
    placeholder="Enter text here..."
  ></textarea>
    <button class="h-[50px] w-[200px] bg-zinc-100 rounded-xl m-9 text-[24px] hover:bg-sky-500 hover:text-white" onClick={handleButtonClick}>Complete</button>
    </div>
   
  </div>

    </div>
  )
}

export default InputText;