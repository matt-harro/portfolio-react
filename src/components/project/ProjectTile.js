import { Link } from 'react-router-dom';
import Card from '../ui/Card';

const ProjectTile = (props) => {
  const { imgPath, imgAltText, id } = props;

  return (
    <Card>
      <Link to={`/projects/${id}`}>
        <img src={imgPath} alt={imgAltText} />
      </Link>
    </Card>
  );
};

export default ProjectTile;
