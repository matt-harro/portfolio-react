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

  // invert text color on button for theme and type
  let invert = null;
  if (props.children === 'JEDI THEME') invert = `${classes['btn--invert']}`;
  console.log(props.type);

  return (
    <button
      className={`${invert || ''} ${classes.btn} ${typeClass}`}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
