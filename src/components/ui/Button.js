import { useRef, useState, useEffect, useContext } from 'react';

import ThemeContext from '../../store/theme-context';

import classes from './Button.module.css';

// rgb to hex helper func

function rgbToHex(rgbValuesArray) {
  const [r, g, b] = rgbValuesArray;

  function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return rgbToHex(r, g, b);
}

function Button(props) {
  const btnRef = useRef();
  const [textColor, setTextColor] = useState('');
  const { activeTheme } = useContext(ThemeContext);

  // dynamically set btn text colour to contrast with background color
  useEffect(() => {
    const timer = setTimeout(() => {
      const backgroundColor =
        btnRef.current &&
        window
          .getComputedStyle(btnRef.current, null)
          .getPropertyValue('background-color')
          .slice(4, -1)
          .split(', ');

      const hexColor = rgbToHex(backgroundColor);
      // calculate
      function getRGB(c) {
        return parseInt(c, 16) || c;
      }

      function getsRGB(c) {
        return getRGB(c) / 255 <= 0.03928
          ? getRGB(c) / 255 / 12.92
          : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
      }

      function getLuminance(hexColor) {
        return (
          0.2126 * getsRGB(hexColor.substr(1, 2)) +
          0.7152 * getsRGB(hexColor.substr(3, 2)) +
          0.0722 * getsRGB(hexColor.substr(-2))
        );
      }

      //
      function getContrast(f, b) {
        const L1 = getLuminance(f);
        const L2 = getLuminance(b);
        return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      }

      //
      function getTextColor(bgColor) {
        const whiteContrast = getContrast(bgColor, '#ffffff');
        const blackContrast = getContrast(bgColor, '#000000');

        return whiteContrast > blackContrast
          ? 'btn--light-text'
          : 'btn--dark-text';
      }
      console.log(hexColor, getTextColor(hexColor)); // TEST
      setTextColor(getTextColor(hexColor));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeTheme]);

  // useEffect(() => {
  //   if (btnRef.current) {
  //     backgroundColor = window
  //       .getComputedStyle(btnRef.current, null)
  //       .getPropertyValue('background-color');

  //     // handle if rgb
  //     if (backgroundColor.slice(0, 3) === 'rgb') {
  //       // convert to hex
  //       const hex = rgbToHex(backgroundColor.slice(4, -1).split(', '));
  //       backgroundColor = hex;
  //     }
  //   }
  //   console.log(backgroundColor);
  // }, [activeTheme]);

  let typeClass = '';
  if (props.type) {
    typeClass =
      typeof props.type !== Array
        ? `${classes['btn--' + props.type]}`
        : props.type.reduce((acc, cur) => {
            return acc + ` ${classes['btn--' + cur]}`;
          });
  }

  return (
    <button
      ref={btnRef}
      className={`${classes.btn} ${typeClass} ${classes[textColor]}`}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
}

export default Button;
