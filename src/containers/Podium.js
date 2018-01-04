// src/containers/Podium.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { playerShape } from '../components/Player'
import Trophy from '../components/Trophy'
import './Podium.css'

export default class Podium extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired
  }

  trophies() {
    const tropies = ['gold', 'silver', 'bronze']

    return this.props.players
      .slice(0, 3)
      .map((player, index) => ({
        ...player,
        trophy: tropies[index]
      }))
  }

  renderTropies = () => {
    return this.trophies()
      .map((trophy, index) => <Trophy key={index} { ...trophy } />)
  }

  render() {
    return (
      <div className="Podium">
        <ul>
          {this.renderTropies()}
        </ul>
      </div>
    )
  }
}
