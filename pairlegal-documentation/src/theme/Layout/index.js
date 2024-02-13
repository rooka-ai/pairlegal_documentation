import React from 'react';
import Layout from '@theme-original/Layout';
import useIntercom from '../../hooks/use-intercom';

export default function LayoutWrapper(props) {
  useIntercom();

  return (
    <>
      <Layout {...props} />
    </>
  );
}
