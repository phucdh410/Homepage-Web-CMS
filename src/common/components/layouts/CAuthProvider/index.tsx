//#region IMPORT
import { useEffect, useState } from 'react';

import { getProfile } from '@/axios/index';
import { CPageLoader } from '@/others/';
//#endregion

const CAuthProvider = ({ children }: any) => {
  //#region Data
  // const { access_token, isLogined } = useSelector<RootState, IAuthState>(
  //   (state) => state.auth,
  // );

  const [isLoading, setLoading] = useState<boolean>(true);
  //#endregion

  //#region Event
  //#endregion

  useEffect(() => {
    const init = async () => {
      setLoading(true);

      try {
        // if (access_token && isLogined) {
        await getProfile('access_token');
        // } else {
        // await tryLogout();
        // }
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  if (isLoading) return <CPageLoader />;

  //#region Render
  return children;
  //#endregion
};

export default CAuthProvider;
