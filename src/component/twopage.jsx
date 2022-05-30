import React from "react"
import { Link } from "react-router-dom"

export const Pagetwo = () => {
    return(
        <div>
            <input type="text" name="" id="" placeholder="address" /> <br />
            <input type="text" name="" id="" placeholder="Phone no." /> <br />
                <Link to={"/"}>    <button>Prev</button></Link>
                <Link to={"/dashboard"}>    <button>Submit</button></Link>

        </div>
    )
}
