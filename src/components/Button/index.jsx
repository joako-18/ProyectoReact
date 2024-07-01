import React from "react";
import { Link } from "react-router-dom";

function Button ({title, link}){
    return(
        <div>
        <button className="button">
        <Link to={link}>{title}</Link>
        </button>
        </div>
    )
}

export default Button