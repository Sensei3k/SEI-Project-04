import React from 'react'

const Form = ({ handleChange, handleSubmit, events }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Event Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="eg: Astro Turf "
            onChange={handleChange}
            value={ events.name || ''}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Venue</label>
        <div className="control">
          <input
            className="input"
            name="image"
            placeholder="eg: Ahmed Musa Crescent, Abuja, Nigeria"
            onChange={handleChange}
            value={events.venue || ''}
          />
        </div>

      </div>
      <button className="button is-green submit">Submit</button>
    </form>
  )
}

export default Form
