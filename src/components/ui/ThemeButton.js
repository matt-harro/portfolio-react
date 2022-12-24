import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';
import Button from './Button';

const ThemeButton = (props) => {
  const themeCtx = useContext(ThemeContext);
  const { activeTheme } = themeCtx;
  const btnText = activeTheme.split('-')[0].toUpperCase();

  const onThemeChangeHandler = () => {
    themeCtx.rotateActiveTheme();
  };

  return <Button onClickHandler={onThemeChangeHandler}>{btnText}</Button>;
};

export default ThemeButton;
