import { useState } from 'react';

import { CCKEditor } from '@/controls/';
import { CParseHTML } from '@/others/';

const DashboardPage = () => {
  //#region Data
  const [htmlValue, setHtmlValue] = useState<string>('');

  //#endregion

  //#region Event
  const onChange = (value: string) => setHtmlValue(value);
  //#endregion

  //#region Render
  return (
    <>
      <CCKEditor value={htmlValue} onChange={onChange} />

      <h3 style={{ marginTop: '20px' }}>Here is your content:</h3>

      <CParseHTML content={htmlValue} />
    </>
  );
  //#endregion
};

export default DashboardPage;
