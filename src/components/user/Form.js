import React from 'react'

const Form = ({handleChange, handleSubmit, data, profileSubmit}) => {
  console.log(data)
  return (<section className="section user-background">
    <div className="container edit-container">
      <form className="edit-form columns is-multiline is-mobile" onSubmit={handleSubmit}>
        <div className="column is-half-desktop is-full-tablet is-mobile level-left">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name="username" placeholder="eg: Charlie" onChange={handleChange} value={data.username || ''}/>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-black">Bio</label>
          <div className="control">
            <input className="input" type="text" name="aboutMe" placeholder="eg. I enjoy socialising with friends..." onChange={handleChange} value={data.aboutMe || ''}/>
          </div>
        </div>
        <div className="field">
          <label className="label has-text-black">Interests</label>
          <div className="control">
            <input className="input" type="text" name="interests" placeholder="eg. Walking, Cooking, Socialising..." onChange={handleChange} value={data.interests || ''}/>
          </div>
        </div>
        <br/>
        <button className="button is-info submit-edit-button" onClick={profileSubmit}>
          Submit Changes
        </button>
      </form>
    </div>
  </section>)
}

export default Form
