import ParentSection from '../layout/sections/Section';
import SectionContent from '../layout/sections/SectionContent';
import Grid from '../layout/grids/Grid';
import Project from '../project/Project';

const DUMMY_PROJECT_DATA = [
  {
    id: 'p1',
    imgPath: '/img/forkify-320-240.png',
    imgAltText: 'forkify logo',
    title: 'Test Project',
    description: 'Test Project to test out the fancy new project cards',
    tags: ['html', 'css', 'js', 'react', 'redux'],
    siteUrl: 'www.google.com',
    repoUrl: 'www.github.com',
  },
  {
    id: 'p2',
    imgPath: '/img/forkify-320-240.png',
    imgAltText: 'forkify logo',
    title: 'Another Test Project',
    description: 'Test Project to test out the fancy new project cards',
    tags: ['html', 'css', 'js', 'react', 'redux'],
    siteUrl: 'www.duckduckgo.com',
    repoUrl: 'www.gitlab.com',
  },
  {
    id: 'p3',
    imgPath: '/img/forkify-320-240.png',
    imgAltText: 'forkify logo',
    title: 'Test a la trois Project',
    description: 'Test Project to test out the fancy new project cards',
    tags: ['html', 'css', 'js', 'react', 'redux'],
    siteUrl: 'www.duckduckgo.com',
    repoUrl: 'www.gitlab.com',
  },
  {
    id: 'p4',
    imgPath: '/img/forkify-320-240.png',
    imgAltText: 'forkify logo',
    title: 'Por favfour Project',
    description: 'Test Project to test out the fancy new project cards',
    tags: ['html', 'css', 'js', 'react', 'redux'],
    siteUrl: 'www.duckduckgo.com',
    repoUrl: 'www.gitlab.com',
  },
];

const Projects = (props) => {
  const projectList = DUMMY_PROJECT_DATA.map((project) => {
    return <Project key={project.id} data={project} />;
  });

  return (
    <ParentSection>
      <SectionContent>
        <hgroup className='hgroup'>
          <h2 className='typography-headline u-text-centered'>
            <span className='superscript'>Featured</span>
            Frontend Projects
          </h2>
        </hgroup>
        <Grid type='auto-rows'>{projectList}</Grid>
      </SectionContent>
    </ParentSection>
  );
};

export default Projects;