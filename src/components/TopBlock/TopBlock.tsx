import React from "react"
import { NavLink } from "react-router-dom"
import photo from "../../assets/photo.jpg"

const TopBlock = () => {
  return (
    <div className="top-block">
      <div className="left">
        <div className="text-in">
          <h1>Hi, I'm Ksenia! <br />Front-end Developer</h1>
          <h6>I code beautifully simple things, and I love what I do. <br /><b>2+</b> years of experience.</h6>
        </div>
        <div className="btns">
          <NavLink to="/projects" className="styled-btn styled-btn-1">Got a projects?</NavLink>
          <NavLink to="/contacts" className="styled-btn styled-btn-2">Let's talk</NavLink>
        </div>
      </div>
      <div className="right">
        <img src={photo} alt="" />
      </div>
    </div>
  )
}

export default TopBlock