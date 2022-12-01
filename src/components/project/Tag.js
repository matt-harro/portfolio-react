import classes from './Tag.module.css';

const Tag = (props) => {
  const { tagClass } = props;

  return (
    <span className={`${classes.tag} ${classes[tagClass]}`}>
      {props.tagName}
    </span>
  );
};

export default Tag;
