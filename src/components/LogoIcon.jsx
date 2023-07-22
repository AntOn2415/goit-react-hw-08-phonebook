import React from 'react';
import { BsTelephoneFill, BsBook } from 'react-icons/bs';

const LogoIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <g transform="scale(0.5)">
        <foreignObject x="10" y="16" width="160%" height="160%">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '20px' }}>
            <BsTelephoneFill />
          </div>
        </foreignObject>
        <foreignObject x="6" y="4" width="160%" height="160%">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: '28px' }}>
            <BsBook />
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};

export default LogoIcon;