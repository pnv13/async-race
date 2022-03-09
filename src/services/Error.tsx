import React from 'react';

const Error: React.FC<{ err: string }> = ({ err }) => (
  <div>
    Error:
    {err}
  </div>
);

export default Error;
