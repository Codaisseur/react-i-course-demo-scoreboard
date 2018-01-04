// src/containers/Board.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Podium from './Podium'
import Player, { playerShape } from '../components/Player'
import './Board.css'

export default class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
    updatePlayer: PropTypes.func.isRequired
  }

  render() {
    const { players, updatePlayer } = this.props

    return (
      <div>
        <Title content="Scoreboard" />

        <Podium players={players} />

        <ul className="Board">
          {players
            .sort((p1, p2) => (p2.score - p1.score))
            .map((player, index) => (
            <Player
              key={index}
              onChange={updatePlayer}
              { ...player }
            />
          ))}
        </ul>
      </div>
    )
  }
}
