import { Interweave } from 'interweave';
import { UrlMatcher } from 'interweave-autolink';

import { ICParseHTML } from './types';

export const CParseHTML: React.FC<ICParseHTML> = ({ content }) => {
  return (
    <Interweave
      content={content}
      matchers={[new UrlMatcher('url')]}
      className="html-parse-content"
      newWindow={true}
    />
  );
};
