import React from 'react'

const Card = ({name, image}) => {
  return (<div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={image} alt={name}/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">Venue:</p>
        </div>
      </div>
    </div>
  </div>)
}

export default Card
