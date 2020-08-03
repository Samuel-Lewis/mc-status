import React from 'react';

export type Payload = {
  status?: string,
  online?: boolean,
  error?: string,
  motd?: string,
  version?: string,
  game_type?: string,
  game_id?: any,
  server_mod?: string,
  map?: any,
  players?: {
    max?: number,
    now?: number,
    list?: any[]
  },
  plugins?: any[],
  last_online?: string,
  last_updated?: string,
  duration?: number
}


export type StatusProps = {
  data?: Payload
}

export default class Status extends React.Component<StatusProps> {
  render() {
    return (
      <>
        <h1>Base!</h1>
        <pre>
          {JSON.stringify(this.props.data, null, 2)}
        </pre >
      </>
    )
  }
}