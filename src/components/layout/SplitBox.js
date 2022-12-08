import Grid from './grids/Grid';

import classes from './SplitBox.module.css';

const SpiltBox = (props) => {
  return <Grid type='col-2-auto'>{props.children}</Grid>;
};

export default SpiltBox;
