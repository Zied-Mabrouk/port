import React from 'react'
import "./EducationCard.scss"

const EducationCard = ({title,role,description,date}) => {
  return (
    <div className="education-card">
        <div>

        <h1>{title}</h1>
        <span>{date}</span>
        </div>
        <h2>{role}</h2>
        <p></p>
    </div>
  )
}

export default EducationCard