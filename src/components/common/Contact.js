import React from 'react'
// import Mailto from 'react-protected-mailto'


const Contact = ({ user }) => {

  return (
    <section className="section">
      <div className="container">
        <div className="column is-half-desktop" id="contact-page">
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

              <div className="content is-multiline">
              Junior Software Engineer, currently based in London, Uk.
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
                  {/* <Mailto email="oyawoye.ade@gmail.com" obfuscate={true}>
                  Email Me!
                </Mailto> */}
                  <a href="{<Mailto
                  email='oyawoye.ade@gmail.com'
                  headers={
                    {subject: 'SEI PROJECT 04'},
                    {cc: 'ade@gmail.com'}
                  }/>}">
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
