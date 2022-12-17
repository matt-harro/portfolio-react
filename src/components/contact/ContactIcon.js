import classes from './ContactIcon.module.css';
import icons from '../../img/sprite.svg';

const ContactIcon = (props) => {
  const { icon, link } = props;

  const iconClasses = `${classes['contact__icon']} ${
    classes[`contact__icon--${icon}`]
  }`;

  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <svg className={iconClasses}>
        <use href={`${icons}#${icon}`}></use>
      </svg>
    </a>
  );
};

export default ContactIcon;
