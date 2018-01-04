// src/components/PlusOneButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './PlusOneButton.css'

export default class PlusOneButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="PlusOne" onClick={this.props.onClick}>+</button>
    )
  }
}
