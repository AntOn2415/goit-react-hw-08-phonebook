import React from 'react';
import { BsTelephoneFill, BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

const LogoIcon = ({size, widthObject, heightObject, telY, telX, bookX, bookY, fontSizeTel, fontSizeBook}) => {
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <g transform="scale(0.6)">
        <foreignObject x={telX} y={telY} width={widthObject} height={heightObject}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ fontSize: fontSizeTel }}
          >
            <BsTelephoneFill />
          </div>
        </foreignObject>
        <foreignObject x={bookX} y={bookY} width={widthObject} height={heightObject}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ fontSize: fontSizeBook }}
          >
            <BsBook />
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};


LogoIcon.propTypes = {
  size: PropTypes.string.isRequired,
  widthObject: PropTypes.string.isRequired,
  heightObject: PropTypes.string.isRequired,
  telX: PropTypes.string.isRequired,
  telY: PropTypes.string.isRequired,
  bookX: PropTypes.string.isRequired,
  bookY: PropTypes.string.isRequired,
  fontSizeTel: PropTypes.number.isRequired,
  fontSizeBook: PropTypes.number.isRequired,
};

export default LogoIcon;