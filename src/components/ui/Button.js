import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClickHandler}>
      Theme
    </button>
  );
};

export default Button;
