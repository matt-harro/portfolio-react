import classes from './Grid.module.css';

const Grid = (props) => {
  const typeClass = props.type ? classes[props.type] : '';

  return <div className={`${classes.grid} ${typeClass}`}>{props.children}</div>;
};

export default Grid;
