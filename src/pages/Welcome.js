import { Link } from 'react-router-dom';
import Section from '../components/layout/sections/Section';
import SectionContent from '../components/layout/sections/SectionContent';
import Button from '../components/ui/Button';
import ThemeButton from '../components/ui/ThemeButton';

const Welcome = (props) => {
  return (
    <Section>
      <SectionContent type='narrow'>
        <hgroup className='hgroup u-text-centered'>
          <span className='superscript'>
            Frontend Dev | ReactJS | Javascript
          </span>
          <h1 className='typography-headline u-margin-top-3'>Greetings!</h1>
        </hgroup>
        <hgroup className=' hgroup u-text-centered'>
          <h3 className='typography-subhead'>Please pick your theme!</h3>
          <ThemeButton />
        </hgroup>
        <p>
          You've found Matthew Harrison's portfolio project. This portfolio is a
          react single page app.
        </p>
        <p>
          Features a few themes I've been playing with. It uses context to track
          the theme. Also the button text changes color to contrast with the
          computed background style (not as simple as i thought it would have
          been).
        </p>
        <p>
          I will be adding more projects as I build them. I need an app to track
          my strength training and a gps interval trainer for running workouts,
          so keep an eye out for those.
        </p>
        <p>
          If you would like to review some of my code... Please do! I love a
          good feedback sandwich.
        </p>
        <div className='u-flex-row u-flex-centered  u-gap-6'>
          <Button type='accent'>
            <Link to='/contact'>See Contact</Link>
          </Button>
          <Button>
            <Link to='/projects'>See Projects</Link>
          </Button>
        </div>
        {/* Picture */}
      </SectionContent>
    </Section>
  );
};

export default Welcome;
