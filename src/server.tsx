import React from 'react';

import Status, { Payload } from './server-state/status';
import Loading from './server-state/loading';
import Error from './server-state/error';

export type ServerProps = {
  address: string
}

export type ServerState = {
  loading: boolean,
  data?: Payload,
}

export class ServerStatus extends React.Component<ServerProps, ServerState> {
  constructor(props: ServerProps) {
    super(props);
    this.state = { loading: true }
  }

  componentDidMount() {
    fetch(`https://mcapi.us/server/status?ip=${this.props.address}`)
      .then(response => response.json())
      .then(data => {
        if (!this.state.data) {
          this.setState({ data, loading: false })
        }
      })
      .catch(err => console.error(err));

    fetch(`https://mcapi.us/server/query?ip=${this.props.address}`)
      .then(response => response.json())
      .then(data => {
        if (data.online) {
          this.setState({ data, loading: false })
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    const { loading, data } = this.state;

    if (loading) {
      return <Loading />
    }

    if (data && data.online) {
      return <Status data={data} />
    }

    return <Error data={data} />
  }
}