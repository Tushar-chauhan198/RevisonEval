
import React from "react"
import { Link } from "react-router-dom"

export const PageOne = () => {
    return(
        <div>
            <input type="text" name="" id="" placeholder="User name" /> <br />
            <input type="text" name="" id="" placeholder="User g-mail" /> <br />
                    
                    <Link to={"/pagetwo"}> <button>Next</button></Link>
        </div>
    )
}
