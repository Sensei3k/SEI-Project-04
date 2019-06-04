import React from 'react'

const Contact = ({ user }) => {

  return (
    <section className="section">
      <div className="container">
        <div className="column is-half-desktop">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{user} - Sensei</p>
                  <p className="subtitle is-6">@detola3000</p>
                </div>
              </div>

              <div className="content">
              Junior Software Engineer, currently based in London, Uk.
                <br />
                {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
