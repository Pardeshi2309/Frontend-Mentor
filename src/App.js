import './App.css';
import image from './image.jpeg';
function App() {
  return (
    <div className="flex items-center justify-center">
      <div className=" bg-[#1E1E1E] flex items-center justify-start p-10 w-[400px] h-screen text-white rounded-2xl flex-col border">
        <img className="rounded-full object-contain h-30 w-20" src={image} alt="img" />
        <h2 className="font-bold text-[20px] mt-10">Jessica Randall</h2>
        <h3 className="text-[#C4F82A] mt-2 font-bold">London,United Kingdom</h3>
        <span className="text-white py-5">"Front-end developer and avid reader."</span>
        <div className="flex items-center justify-center flex-col gap-5 w-full">
          <a className='text-white text-center w-full py-2 bg-[#333333] rounded-md' href='GitHub'>GitHub</a>
          <a className='text-white text-center w-full py-2 bg-[#333333] rounded-md' href='GitHub'>Frontend Mentor</a>
          <a className='text-white text-center w-full py-2 bg-[#333333] rounded-md' href='GitHub'>LinkedIn</a>
          <a className='text-white text-center w-full py-2 bg-[#333333] rounded-md' href='GitHub'>Twitter</a>
          <a className='text-white text-center w-full py-2 bg-[#333333] rounded-md' href='GitHub'>Instagram</a>
        </div>
      </div>
    </div>

  );
}

export default App;
