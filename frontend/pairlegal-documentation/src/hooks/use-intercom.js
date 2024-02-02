import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from '@docusaurus/router';

const useIntercom = () => {
  const [intercomShown, setIntercomShown] = useState(false);
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  useEffect(() => {
    if (typeof window !== 'undefined' &&
      queryParams.intercom &&
      !intercomShown
    ) {
      const intercomDataJson = atob(queryParams.intercom);
      const intercomData = JSON.parse(intercomDataJson);

      window.Intercom = window.Intercom || function () {
        window.Intercom.q.push(arguments);
      };
      window.Intercom.q = window.Intercom.q || [];
      window.Intercom('boot', { app_id: intercomData.AppId });

      // Insert the Intercom script into the <head>
      const ic = document.createElement('script');
      ic.type = 'text/javascript';
      ic.async = true;
      ic.src = `https://widget.intercom.io/widget/${intercomData.AppId}`;
      ic.onload = () => {
        window.Intercom('boot', {
          app_id: intercomData.AppId,
          email: intercomData.Username,
          user_hash: intercomData.HashedUsername,
        });
        window.Intercom('show');

        setIntercomShown(true);
      };

      const head = document.head || document.getElementsByTagName('head')[0];
      head.appendChild(ic);
    }
  }, [queryParams]);
};

export default useIntercom;
