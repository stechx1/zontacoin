import { useState } from 'react';

export const HoverableIcon = ({ image, cImage, walmart }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`relative ${walmart ? 'w-52' : 'w-40'} h-40  ${
        hover
          ? 'bg-contain bg-center bg-no-repeat hover:bg-contain-hover bg-center-hover'
          : 'bg-contain bg-center bg-no-repeat'
      }`}
      style={{
        backgroundImage: `url(${hover ? cImage : image})`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    ></div>
  );
};
