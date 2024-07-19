import React from "react";
import { NavLink } from "react-router-dom";

function Info(props){
    return (
        <div className="recipe">
            <img src={props.img}/>
            <h2>{props.name}</h2>
            <NavLink to={`/${props.id}`}><button className="btn">get</button></NavLink>
        </div>
    )
}

export default Info;