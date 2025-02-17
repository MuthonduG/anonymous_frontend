// utils/framer.js

export const fadeIn = ({ direction = 'up', delay = 0 }) => {
    const x = direction === 'left' ? 80 : direction === 'right' ? -80 : 0;
    const y = direction === 'up' ? 80 : direction === 'down' ? -80 : 0;
  
    return {
      hidden: {
        x,
        y,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  