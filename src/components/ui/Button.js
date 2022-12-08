import classes from './Button.module.css';

const Button = (props) => {
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
      className={`${classes.btn} ${typeClass}`}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
