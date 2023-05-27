import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHeads: true,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onUpdateTossResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHeads: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHeads: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, isHeads} = this.state
    const image = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="cointoss-bg-container">
        <div className="cointoss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tail-option">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="heads-image" />
          <div>
            <button
              type="submit"
              className="button"
              onClick={this.onUpdateTossResult}
            >
              Toss Coin
            </button>
          </div>
          <div className="counts">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
