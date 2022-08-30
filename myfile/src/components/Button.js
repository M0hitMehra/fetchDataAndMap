import React, { useState,useRef } from "react";
import "../css/button.css";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import Mapple from "./Mapple";

const Button = ({ onClick, buttonSelected }) => {
  const desc = useRef(); 
  const [pos, setPos] = useState({
    lat:0,
    lng:0
  })
  const { response } = useFetch();
  if (!response || response.length === 0) {
    return <div alt="Loading...">Loading...</div>;
  }
  
  const handleClick = (user) => {
    setPos({
      lat: parseFloat(user.address.geo.lat),
           
            lng:parseFloat(user.address.geo.lng),
    })
    console.log(typeof(user.address.geo.lat))
    // console.log(pos)
  }

  return (
    <>
    <React.Fragment>
      {response.data.map((user) => (
        <button
          className={`button ${
            buttonSelected === user.name
              ? "button button--buttonSelected"
              : "button"
            }`}
            onClick={ onClick }
            onChange={ (e) =>{handleClick(user) } }
            key={user.id}
            id={user.id}
            value={user.name}
            lat={user.address.geo.lat}
           
            lng={user.address.geo.lng}
            title={user.name}
            ref= {desc}
            ariapressed={buttonSelected ? user.name : undefined}
            style={{zIndex:12}}
            >
              <div onClick={ (e) =>{handleClick(user) } } style={{zIndex:-12}}   >
               
          {user.name}
              </div>
        </button>
      ))}
      <Mapple pos={pos}/>
    </React.Fragment>
      </>
  );
};

Button.propTypes = {
  buttonSelected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
