'use client';

import SubApp from '../../../public/react.html';

const ReactPage = () => {
  return <div dangerouslySetInnerHTML={{ __html: SubApp }}></div>;
};

export default ReactPage;
