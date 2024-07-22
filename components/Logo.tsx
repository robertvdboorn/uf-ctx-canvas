import { registerUniformComponent } from '@uniformdev/canvas-react';
import React from 'react';

const Logo = () => {
  return (
    <svg
      height="60"
      width="60"
      viewBox="0 0 150 150"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="#7BB3FF" d="M40.824 0L0 23.569v47.139l40.824-23.569 40.823-23.57z" />
      <path fill="#498DFF" d="M0 70.709v47.139l40.824 23.569 40.823-23.569V70.709L40.824 94.278V47.14z" />
      <path fill="#E61408" d="M81.647 23.569l-40.824 23.57 40.824 23.569v47.139l40.824-23.569V47.139z" />
    </svg>
  );
};
registerUniformComponent({
  type: 'logo',
  component: Logo,
});
export default Logo;
