import React from "react";

import Loading from "./loading";
import Error from "./error";
import Details from "./details";
import { Payload } from "./types";

export type ServerProps = {
  address: string;
};

export type ServerState = {
  statusLoaded: boolean;
  queryLoaded: boolean;
  statusError?: Error;
  queryError?: Error;
  data?: Payload;
};

const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

const mergePositive = (lhs: any, rhs: any) => {
  const result = Object.assign({}, lhs);

  Object.keys(rhs).forEach((key) => {
    const current = result[key];
    const value = rhs[key];

    if (isObject(value)) {
      result[key] = mergePositive(current, value);
      return;
    }

    if (!current) {
      result[key] = value;
      return;
    }
  });

  return result;
};

export class ServerStatus extends React.Component<ServerProps, ServerState> {
  constructor(props: ServerProps) {
    super(props);
    this.state = { statusLoaded: false, queryLoaded: false };
  }

  componentDidMount() {
    fetch(`https://mcapi.us/server/status?ip=${this.props.address}`)
      .then((response) => response.json())
      .then((data) => {
        const toMerge = data?.status === "success" ? data : {};
        const merged = mergePositive(this.state.data, toMerge);
        this.setState({ data: merged, statusLoaded: true });
      })
      .catch((error) => {
        this.setState({ statusError: error, statusLoaded: true });
        console.error(error);
      });

    fetch(`https://mcapi.us/server/query?ip=${this.props.address}`)
      .then((response) => response.json())
      .then((data) => {
        const toMerge = data?.status === "success" ? data : {};
        const merged = mergePositive(this.state.data, toMerge);
        this.setState({ data: merged, queryLoaded: true });
      })
      .catch((error) => {
        this.setState({ queryError: error });
        console.error(error);
      });
  }

  render() {
    const {
      statusError,
      queryError,
      data,
      statusLoaded,
      queryLoaded,
    } = this.state;

    if (!statusLoaded && !queryLoaded) {
      return <Loading />;
    }

    if (!data || Object.keys(data).length === 0) {
      if (statusLoaded && queryLoaded) {
        const errorMsg = [statusError, queryError].filter((e) => e).join("/");
        return <Error message={errorMsg} />;
      } else {
        return <Loading />;
      }
    }

    if (data.error || data.status === "error") {
      if (statusLoaded && queryLoaded) {
        return <Error message={data ? data.error : "No data found??"} />;
      }
    }
    return <Details data={data} key={JSON.stringify(data)} />;
  }
}
