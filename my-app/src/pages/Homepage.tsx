import React, { useEffect } from 'react';

interface HomepageProps {
  title: string;
}

function Homepage({ title }: HomepageProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <div>Homepage</div>;
}

export default Homepage;
