import Card from '../components/ui/Card';
import Tag from '../components/project/Tag';

import classes from './ProjectView.module.css';

const Project = (props) => {
  const {
    imgPath,
    imgAltText,
    title,
    description,
    tags /* TODO siteUrl, repoUrl*/,
  } = props.data;

  const tagsList = tags.map((tagName) => (
    <Tag key={tagName} tagName={tagName} tagClass={`tag--${tagName}`} />
  ));

  return (
    <Card>
      <figure className={classes.project}>
        <img className={classes.project__img} src={imgPath} alt={imgAltText} />
        <figcaption className={classes.project__figcaption}>
          <div className={classes['project__tags']}>{tagsList}</div>
          <h2 className='typography-header u-text-centered'>{title}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
    </Card>
  );
};

export default Project;
