// src/App.test.js
import React from 'react'
import { shallow } from 'enzyme'
import App, { players } from './App'
import Board from './containers/Board'

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('has the class App', () => {
    expect(app).toHaveClassName('App')
  })
})
