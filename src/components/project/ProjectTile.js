// import { Link } from 'react-router-dom';
import Card from '../ui/Card';

import classes from './ProjectTile.module.css';

const ProjectTile = (props) => {
  const { imgPath, imgAltText, siteUrl } = props; // TODO id: for Link to ProjectView

  return (
    //  TODO <Link to={`/projects/${id}`}>
    <a href={`${siteUrl}`} target='_blank' rel='noreferrer'>
      <Card>
        <img
          className={classes['project-tile']}
          src={imgPath}
          alt={imgAltText}
        />
      </Card>
    </a>
    // </Link>
  );
};

export default ProjectTile;
