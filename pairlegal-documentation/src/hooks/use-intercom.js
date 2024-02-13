import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from '@docusaurus/router';

const useIntercom = () => {
  const [intercomLoaded, setIntercomLoaded] = useState(false);
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  useEffect(() => {
    if (typeof window !== 'undefined' && !intercomLoaded) {
      let intercomData = null;
      if (queryParams.intercom) {
        const intercomDataJson = atob(queryParams.intercom);
        intercomData = JSON.parse(intercomDataJson);
        console.log(intercomData)
      }
      let appId = intercomData?.AppId ?? 'fkcuqcco';
      console.log('got app id: ' + appId);

      window.Intercom = window.Intercom || function () {
        window.Intercom.q.push(arguments);
      };
      window.Intercom.q = window.Intercom.q || [];
      window.Intercom('boot', { app_id: appId });

      // Insert the Intercom script into the <head>
      const ic = document.createElement('script');
      ic.type = 'text/javascript';
      ic.async = true;
      ic.src = `https://widget.intercom.io/widget/${appId}`;
      ic.onload = () => {
        if (intercomData){
          window.Intercom('boot', {
            app_id: intercomData.AppId,
            user_id: intercomData.Username,
            user_hash: intercomData.HashedUsername,
          });
          window.Intercom('show');
        }
        setIntercomLoaded(true);
      };

      const head = document.head || document.getElementsByTagName('head')[0];
      head.appendChild(ic);
    }
  }, [queryParams]);
};

export default useIntercom;
