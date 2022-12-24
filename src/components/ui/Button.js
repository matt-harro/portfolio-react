import { useRef, useState, useEffect, useContext } from 'react';
import { findDOMNode } from 'react-dom';

import ThemeContext from '../../store/theme-context';

import classes from './Button.module.scss';

//
function getContrastYIQ(r, g, b) {
  // var r = parseInt(hexcolor.substr(0,2),16);
  // var g = parseInt(hexcolor.substr(2,2),16);
  // var b = parseInt(hexcolor.substr(4,2),16);

  const yiq = (+r * 299 + +g * 587 + +b * 114) / 1000;

  return yiq >= 128 ? 'btn--text-dark' : 'btn--text-light';
}

const Button = (props) => {
  const btnRef = useRef();
  const [btnEl, setBtnEl] = useState(null);
  const { activeTheme } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState(undefined);
  const [textColor, setTextColor] = useState(undefined);

  // finds node of btn object
  useEffect(() => {
    if (btnRef.current) {
      setBtnEl(findDOMNode(btnRef.current));
    }
  }, [btnRef]);

  // check and set background color changes
  useEffect(() => {
    if (btnEl) {
      // if btnEl has been set...
      // set background color on theme change
      setTimeout(() => {
        setBackgroundColor(getComputedStyle(btnEl).backgroundColor); // must return 'rgb(...)' value
      }, 300);
    }
  }, [btnEl, activeTheme]);

  // if background color changes set text to contrast
  useEffect(() => {
    if (backgroundColor) {
      const [r, g, b] = backgroundColor.slice(4, -1).split(', ');

      setTextColor(getContrastYIQ(r, g, b));
    }
  }, [backgroundColor]);

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
      className={`${classes.btn} ${typeClass} ${
        textColor ? classes[textColor] : ''
      }`}
      onClick={props.onClickHandler}
      data-theme={activeTheme}
    >
      {props.children}
    </button>
  );
};

export default Button;
