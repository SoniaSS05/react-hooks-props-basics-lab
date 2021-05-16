import React from "react";
import Links from "./Links";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {((props.bio!=='') && (props.hasOwnProperty('bio')===true))? (<p>{props.bio}</p>) : null}
      {/* add your <Links /> component here */}
     <Links 
        github = {props.links.github}
        linkedin = {props.links.linkedin}
     />
    </div>
  );
}

export default About;
