import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function DocIssue() {
  const location = useLocation();

  return (
    <p style={{ paddingLeft: '20px' }}>
      Is something broken?{' '}
      <a
        href={`https://github.com/mauiniverse/mauiniverse.github.io/issues/new?template=docs_feedback.yml&page-url=https://docs.mauiniverse.co${location.pathname}`}
      >
        Please open an issue!
      </a>
    </p>
  );
}
