import { useState } from "react"


function Dropdown(){
    
    const[dropped,isDropped]=useState(false)



   



    return(
        <div className="container">
        <div className="dropdown">
        <button className="Button">
            Select an Item &#x25BC;
        </button>

        <div className="dropdown-content">
            <p><button>first Item</button> </p>
            <p><button>second Item</button></p>
            <p><button>third Item</button></p> 
            <p> <button>fourth Item</button> </p>
            <p><button>fith Item</button> </p>
        </div>
        </div>


        </div>


    )
}
export default Dropdown