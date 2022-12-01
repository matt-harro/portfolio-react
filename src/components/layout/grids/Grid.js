import classes from './Grid.module.css';

const Grid = (props) => {
  const { type } = props;

  return (
    <div className={`${classes.grid} ${classes[type]}`}>{props.children}</div>
  );
};

export default Grid;
