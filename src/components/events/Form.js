import React from 'react'

const Form = ({ handleChange, handleSubmit, events }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Event Location</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="eg: "
            onChange={handleChange}
            value={ events.name || ''}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Descrition</label>
        <div className="control">
          <input
            className="input"
            name="image"
            placeholder="eg: https://gameofthrones.fandom.com/jon-snow.png"
            onChange={handleChange}
            value={events.description || ''}
          />
        </div>

      </div>
      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default Form
