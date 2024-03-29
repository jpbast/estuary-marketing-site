import * as React from 'react';

export const ProcessedPost = ({ body }: { body: string }) => {
  return <div className="dynamic-html" dangerouslySetInnerHTML={{ __html: body }}></div>;
};
