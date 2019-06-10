import React from 'react'

const Contact = () => {

  return (
    <section className="section">
      <div className="container">
        <div className="column is-one-third-desktop" id="contact-page">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by2">
                <img src="https://i.imgur.com/w7qm5UP.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Sensei</p>
                  <p className="subtitle is-6">@detola3000</p>
                </div>
              </div>
              <div className="content is-multiline">
                <p className="subtitle is-5">
                Adetola Oyawoye is a Junior Software Engineer, currently based in London, Uk.
                </p>
                <br />
                <p className="subtitle is-5">
                Please contact me on any medium below, for all enquiries.
                </p>
                <br />
                <div className="social">
                  <a href="http://www.twitter.com/Detola3000" target="_blank" rel="noopener noreferrer">
                    <img className="image is-64x64
                    " src="../../assets/twitter.png" />
                  </a>
                  <a href="https://www.linkedin.com/in/adetola-oyawoye" target="_blank" rel="noopener noreferrer">
                    <img className="image is-64x64
                    " src="../../assets/linkedin.png" />
                  </a>
                  <a href="https://github.com/Sensei3k" target="_blank" rel="noopener noreferrer">
                    <img className="image is-64x64
                    " src="../../assets/github.png" />
                  </a>
                  <a href="mailto:inquiries@baatawura.io?subject=Baàtà Wúrà">
                    <img className="image is-64x64" src="../../assets/email.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
