// Write your code here
import {Component} from 'react'

import './index.css'

class CoinTossApp extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    tossResult: 0,
  }

  randomNumber = () => {
    const {count, heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    this.setState({tossResult: toss, count: count + 1})

    if (toss) {
      this.setState({tails: tails + 1})
    } else {
      this.setState({heads: heads + 1})
    }
  }

  render() {
    const {tossResult, count, heads, tails} = this.state
    const imageUrl = tossResult
      ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="sub-title">Heads (or) Tails</p>
          <img className="toss-image" src={imageUrl} alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.randomNumber}
          >
            Toss coin
          </button>
          <div className="text-section">
            <p className="toss-text">Total: {count}</p>
            <p className="toss-text">Heads: {heads}</p>
            <p className="toss-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinTossApp
