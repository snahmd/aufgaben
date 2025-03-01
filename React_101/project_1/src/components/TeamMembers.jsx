import React from 'react'
import TeamMember from './TeamMember'
import "../App.css";

const TeamMembers = () => {
  return (
    <ul className="team">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
    </ul>
)
}

export default TeamMembers