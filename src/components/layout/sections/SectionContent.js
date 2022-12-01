import classes from './SectionContent.module.css';

const SectionContent = (props) => {
  return <div className={classes['section-content']}>{props.children}</div>;
};

export default SectionContent;
