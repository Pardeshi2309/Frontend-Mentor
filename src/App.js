import './App.css';
import image from './image.jpeg';
function App() {
  return (
    <div className="flex items-center justify-center">
      <div className=" bg-[#1E1E1E] flex items-center justify-center w-[400px] h-screen text-white rounded-2xl flex-col border border-red-500">
        <img className="absolute top-10 rounded-full object-contain h-30 w-20" src={image} alt="img" />
        <p className="font-bold absolute top-20 mt-20 text-[20px]">Jessica Randall</p>
        <span className="text-[#C4F82A] font-bold absolute top-[24%] mt-10">London,United Kingdom</span>
        </div>
        <div className="flex items-center justify-center absolute top-[38%]">
        <span className="text-white">"Front-end developer and avid reader."</span>
        </div>


    </div>
  );
}

export default App;
