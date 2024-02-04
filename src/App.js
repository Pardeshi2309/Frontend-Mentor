import './App.css';
import image from './image.jpeg';
function App() {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <div className="bg-[#1E1E1E] flex items-center justify-center w-[400px] h-[550px] text-white rounded-2xl flex-col border border-red-500">
        <img className="rounded-full object-contain h-30 w-20" src={image} alt="img" />
        <p className="font-bold">Jessica Randall</p>
        <span className="text-[#C4F82A] font-bold">London,United Kingdom</span>
        <p className="mt-5">"Front-end developer and Avid reader."</p>


      </div>


    </div>
  );
}

export default App;
