import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIntercom from '../hooks/use-intercom';

export default function Home() {
  useIntercom();
  return <Redirect to={useBaseUrl("/docs/getting_started/")} />;
};
