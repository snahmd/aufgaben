import React from 'react'
import "../App.css";

const TeamMember = () => {
  return (
    <li className="member co-funder">
        <div className="thumb"><img src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120" /></div>
        <div className="description">
            <h3>Chris Coyier</h3>
            <p>Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.<br/><a href="https://codepen.io/chriscoyier/">@chriscoyier</a></p>
        </div>
    </li>
)
}

export default TeamMember