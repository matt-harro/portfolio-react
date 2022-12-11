import { Fragment, useCallback, useEffect } from 'react';

import Section from '../layout/sections/Section';
import SectionContent from '../layout/sections/SectionContent';
import Grid from '../layout/grids/Grid';
import ProjectTile from '../project/ProjectTile';
// import Project from '../project/Project';

import projectDataJson from '../../db/db-projects.json';

// const DUMMY_PROJECT_DATA = [
//   {
//     id: 'p1',
//     imgPath: '/img/forkify-320-240.png',
//     imgAltText: 'forkify logo',
//     title: 'Test Project',
//     description: 'Test Project to test out the fancy new project cards',
//     tags: ['html', 'css', 'js', 'react', 'redux'],
//     siteUrl: 'www.google.com',
//     repoUrl: 'www.github.com',
//   },
//   {
//     id: 'p2',
//     imgPath: '/img/forkify-320-240.png',
//     imgAltText: 'forkify logo',
//     title: 'Another Test Project',
//     description: 'Test Project to test out the fancy new project cards',
//     tags: ['html', 'css', 'js', 'react', 'redux'],
//     siteUrl: 'www.duckduckgo.com',
//     repoUrl: 'www.gitlab.com',
//   },
//   {
//     id: 'p3',
//     imgPath: '/img/forkify-320-240.png',
//     imgAltText: 'forkify logo',
//     title: 'Test a la trois Project',
//     description: 'Test Project to test out the fancy new project cards',
//     tags: ['html', 'css', 'js', 'react', 'redux'],
//     siteUrl: 'www.duckduckgo.com',
//     repoUrl: 'www.gitlab.com',
//   },
//   {
//     id: 'p4',
//     imgPath: '/img/forkify-320-240.png',
//     imgAltText: 'forkify logo',
//     title: 'Por favfour Project',
//     description: 'Test Project to test out the fancy new project cards',
//     tags: ['html', 'css', 'js', 'react', 'redux'],
//     siteUrl: 'www.duckduckgo.com',
//     repoUrl: 'www.gitlab.com',
//   },
// ];

const funcProjectListFilter = (jsxData, section) => {
  return jsxData.filter((tile) => tile.props.displaySections.includes(section));
};

const Projects = (props) => {
  const projectList = projectDataJson.PROJECT_DATA.map((project) => {
    return (
      <ProjectTile
        key={project.id}
        imgPath={project.imgPath}
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
          <Grid type='auto-rows'>
            {funcProjectListFilter(projectList, 'featured')}
          </Grid>
        </SectionContent>
      </Section>
      <Section>
        <SectionContent>
          <hgroup className='hgroup'>
            <h2 className='typography-headline u-text-centered'>
              <span className='superscript'>Learning Favourites</span>
              Built On Course
            </h2>
          </hgroup>
          <Grid type='auto-rows'>
            {funcProjectListFilter(projectList, 'course')}
          </Grid>
        </SectionContent>
      </Section>
    </Fragment>
  );
};

export default Projects;
