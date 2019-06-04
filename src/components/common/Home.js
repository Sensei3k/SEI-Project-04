import React from 'react'
import images from '../../images'


class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      currentImg: 0,
      images: images
    }
  }

  componentDidMount() {
    setInterval(() => {
      let currentImg = this.state.currentImg + 1
      currentImg === this.state.images.length ? currentImg = 0:null
      this.setState({ currentImg })
    }, 4000)
  }

  render() {
    return (
      <section>
        <section className="section home-container" id="background-change" style={{
          backgroundImage: `url(${images[this.state.currentImg]})`
        }}>
          <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
              <div className="container">
                {/* <h1 className="title display">Juego Bonito</h1> */}
                <h1 className="title display">Baàtà Wúrà</h1>
                <h2 className="subtitle">The Beautiful Game</h2>
              </div>
            </div>
          </section>
        </section>
      </section>
    )
  }
}

export default Home
