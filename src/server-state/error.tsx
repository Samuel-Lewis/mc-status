import React from 'react';
import { Result } from 'antd';

export type ErrorProps = {
  message?: string
}

export default function Error(props: ErrorProps) {
  return (
    <Result
      status="error"
      title="Failed to fetch server details"
      subTitle={props.message}
    />
  )

}
