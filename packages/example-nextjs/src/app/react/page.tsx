'use client';

// @ts-expect-error raw import
import SubApp from 'example-react/dist/index.html';

const ReactPage = () => {
  return <div dangerouslySetInnerHTML={{ __html: SubApp }}></div>;
};

export default ReactPage;
