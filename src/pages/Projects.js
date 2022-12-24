import { Fragment } from 'react';

import Section from '../components/layout/sections/Section';
import SectionContent from '../components/layout/sections/SectionContent';
import Grid from '../components/layout/grids/Grid';
import ProjectTile from '../components/project/ProjectTile';

import projectDataJson from '../db/db-projects.json';

const funcProjectListFilter = (jsxData, section) => {
  return jsxData.filter((tile) => tile.props.displaySections.includes(section));
};

const Projects = (props) => {
  const projectList = projectDataJson.PROJECT_DATA.map((project) => {
    return (
      <ProjectTile
        key={project.id}
        imgName={project.imgName}
        imgAltText={project.imgAltText}
        id={project.id}
        displaySections={project.displaySections}
        siteUrl={project.siteUrl}
      />
    );
  });

  return (
    <Fragment>
      <Section>
        <SectionContent>
          <hgroup className='hgroup'>
            <h2 className='typography-headline u-text-centered'>
              <span className='superscript'>Featured</span>
              Frontend Projects
            </h2>
          </hgroup>
          <Grid type='aspect-4-3'>
            {funcProjectListFilter(projectList, 'featured')}
          </Grid>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <hgroup className='hgroup'>
            <h2 className='typography-headline u-text-centered'>
              <span className='superscript'>Learning Favourites</span>
              Built on Course
            </h2>
          </hgroup>
          <Grid type='aspect-4-3'>
            {funcProjectListFilter(projectList, 'course')}
          </Grid>
        </SectionContent>
      </Section>
    </Fragment>
  );
};

export default Projects;
