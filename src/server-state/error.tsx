import React from 'react';
import Status from './status'

export default class Error extends Status {
  render() {
    if (!this.props.data) {
      return (
        <div>Loading...</div>
      )
    }

    const { online, error } = this.props.data;

    return (
      <div>
        {!online && <div>Offline</div>}
        {error && <pre>{error}</pre>}
      </div>
    )
  }
}