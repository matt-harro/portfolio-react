// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../ui/Card';

import classes from './ProjectTile.module.css';

const ProjectTile = (props) => {
  const [projectImg, setProjectImg] = useState(null);
  const { imgName, imgAltText, siteUrl } = props; // TODO id: for Link to ProjectView

  useEffect(() => {
    (async () => {
      const importedImg = await import(`../../img/${imgName}`);
      setProjectImg(importedImg.default);
    })();
  }, [imgName]);

  return (
    <a href={`${siteUrl}`} target='_blank' rel='noreferrer'>
      <Card>
        {projectImg && (
          <img
            className={classes['project-tile']}
            src={projectImg}
            alt={imgAltText}
          />
        )}
      </Card>
    </a>
  );
};

export default ProjectTile;
