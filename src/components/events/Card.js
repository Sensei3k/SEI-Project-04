import React from 'react'

const Card = ({name, image, format}) => {
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
          <p className="subtitle is-6">Style: {format.name}</p>
        </div>
      </div>
    </div>
  </div>)
}

export default Card
