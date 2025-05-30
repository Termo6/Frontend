function NavBar() {
  return (
    <div className="text-[19px] flex flex-col items-baseline border-r w-[25.5rem]
                     h-screen bg-black text-white border-gray-500
                    font-[ ui-sans-serif, system-ui, sans-serif] 
                    
                    
    ">
      <div className="pl-[10rem] ">
        <ul className="space-y-5 pt-17 ">
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="home.jsx">Home</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="explore.jsx">Explore</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors"href="notifications.jsx">Notifications</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="messages.jsx">Messages</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="grog.jsx">Grok</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="bookmarks.jsx">Bookmarks</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="jobs.jsx">jobs</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="communities">Communities</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="premium.jsx">Premium</a>
          </li>
          <li>
            <a className=" py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="verifiedOrgs">Verified Orgs</a>
          </li>
          <li>
            <a className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors" href="profile">Profile</a>
          </li>
          <li>
            <a  className="py-3 px-6 rounded-4xl   hover:bg-gray-900 transition-colors"href="more">More</a>
          </li>
        </ul>
         </div>
         <div className="pl-35 pt-5  w-full">

        <button className="hover:bg-gray-200 cursor-pointer text-[17px] font-bold px-23 py-3 border rounded-4xl bg-white text-black">Post</button>
     </div>
     </div>
  
  );
}
export default NavBar;
