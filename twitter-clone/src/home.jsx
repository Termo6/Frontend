


function Home(){
    return(

        <div className="bg-black min-h-screen text-white w-[38rem] border-r border-gray-500 ">
       
        <div className="  bg-black/80   flex flex-nowrap justify-around h-13 border-b border-gray-500" > 
      
        <button className=" px-30  cursor-pointer   hover:bg-gray-900 whitespace-nowrap ">For you</button>
        <button className=" px-30  cursor-pointer  hover:bg-gray-900 ">Following</button>


        </div>
        <div className="border-b h-25 border-gray-500  mt-6 ">
        <div className="flex">


        <img className="ml-2 rounded-full w-10 h-10" src="https://xsgames.co/randomusers/avatar.php?g=female"></img>


        <input  className="ml-2 w-[38rem] h-10 focus:outline-none text-[20px]" type="text" placeholder="What's happening?"></input>
        </div>

        <button className="text-blue-500 rounded-full px-2 cursor-pointer ml-15 text-[14px] hidden hover:bg-gray-900"> Everyone can reply  </button>
        <div>           </div>

    
        <button> Icon1</button>
        <button>Icon2</button>
        <button>Icon3</button>
        <button>Icon4</button>
        
        </div>
        
        </div>
 
    )



}
export default Home