import React from 'react';

import Loading from './server-state/loading';
import Status from './server-state/status';
import Query from './server-state/query';
import Offline from './server-state/offline';

export type ServerProps = {
  address: string
}

export type ServerState = {
  loading: boolean,
  status: any,
  query: any,

}

export class ServerStatus extends React.Component<ServerProps, ServerState> {
  constructor(props: ServerProps) {
    super(props);
    this.state = { loading: true, status: undefined, query: undefined }
  }

  componentDidMount() {
    fetch(`https://mcapi.us/server/status?ip=${this.props.address}`)
      .then(response => response.json())
      .then(status => this.setState({ status, loading: false }))
      .catch(err => console.error(err));

    fetch(`https://mcapi.us/server/query?ip=${this.props.address}`)
      .then(response => response.json())
      .then(query => this.setState({ query, loading: false }))
      .catch(err => console.error(err));
  }

  render() {
    const { loading, status, query } = this.state;

    if (loading) {
      return <Loading />
    }

    if (query && query.online) {
      return <Query />
    }

    if (status && status.online) {
      return <Status />
    }

    return <Offline />
  }
}