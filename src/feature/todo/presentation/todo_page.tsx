import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <p> this is todo page</p>
      </div>
    )
  }
}
