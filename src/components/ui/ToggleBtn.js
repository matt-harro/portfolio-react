import classes from './ToggleBtn.module.css';

const ToggleBtn = (props) => {
  return <button onClick={props.onChangeTheme}>Theme</button>;
};

export default ToggleBtn;
