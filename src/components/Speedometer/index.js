import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      let {speed} = prevState
      if (speed < 200) {
        speed += 10
      }
      return {speed}
    })
  }

  applyBrake = () => {
    this.setState(prevState => {
      let {speed} = prevState
      if (speed >= 10) {
        speed -= 10
      }
      return {speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h2>Speed is {speed}mph </h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.accelerate}
            className="button btn-a"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.applyBrake}
            className="button btn-b"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
