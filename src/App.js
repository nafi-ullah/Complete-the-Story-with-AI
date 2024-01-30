
import './App.css';
import wall from './assets/wall.gif';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div class="h-screen flex flex-col">
    <div class="flex-1 bg-white"></div>
    <div class="flex-1 bg-gray-300"></div>
    
    <div class="absolute top-48 left-[400px]  space-x-72 flex">
    
    <div class="w-[500px] h-[700px] bg-red-200 ">
    <img src={wall} />
       </div>
      <div class="w-[550px] h-[700px] "> 
      <div class=" text-gray-800 text-[64px] text-center font-bold font-['Inter']">Our Story</div>
      <div class="w-[527px] h-[231px] text-center text-black text-xl font-normal font-['Inter']">
      <TypeAnimation
      sequence={[
        'Once upon a time in the whimsical town of Serenityville, there lived a peculiar character named Oliver Twizzletoes. Oliver had an extraordinary ability - whenever he wiggled his nose, and then .....',
        1000, 
        'Once upon a time there lived a peculiar character named Oliver Twizzletoes. Oliver had an extraordinary ability - whenever he wiggled his nose, and then .....',
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

      <input 
      className="w-full h-48 px-4 text-lg bg-white border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
      type="text" 
      placeholder="Enter text here..."
    />
      <button class="h-[50px] w-[200px] bg-zinc-100 rounded-xl m-9 text-[24px] hover:bg-sky-500 hover:text-white" >Complete</button>
      </div>
     
    </div>
      


      </div>
      
    </div>
  </div>
 
  );
}

export default App;
