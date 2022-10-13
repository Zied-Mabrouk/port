import React from 'react'
import "./ServiceCard.scss"

const ServiceCard = ({service}) => {
    const parts = service.description.includes("#")?service.description.split("#"):"";
    const link = parts?parts[1]:"";
  console.log(link);
  return (
    <div className='service-card'>
        <h1>
            {service.label}
        </h1>
        <p>
            {
                parts ?
                parts.map((part,key) => key===1? <a key={key} href={service.link}>{part}</a> : <React.Fragment key={key}>{part}</React.Fragment>)
                : service.description
            }
        </p>
    </div>
  )
}

export default ServiceCard