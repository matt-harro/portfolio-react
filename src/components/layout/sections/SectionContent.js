import classes from './SectionContent.module.css';

const SectionContent = (props) => {
  const typeClass = props.type ? classes[props.type] : '';

  return (
    <div className={`${classes['section-content']} ${typeClass}`}>
      {props.children}
    </div>
  );
};

export default SectionContent;
