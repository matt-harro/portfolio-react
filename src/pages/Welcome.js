import { Link } from 'react-router-dom';
import Section from '../components/layout/sections/Section';
import SectionContent from '../components/layout/sections/SectionContent';
import Button from '../components/ui/Button';

const Welcome = (props) => {
  const themeBtnText = props.theme.split('-').join(' ').toUpperCase();

  return (
    <Section>
      <SectionContent type='narrow'>
        <hgroup className='hgroup u-text-centered'>
          <span className='superscript'>
            Matthew Harrison | Frontend Dev | ReactJS | Javascript
          </span>
          <h1 className='typography-headline u-margin-top-3'>
            Greetings Wanderer!
          </h1>
        </hgroup>
        <div className='u-text-centered'>
          <h3 className='typography-subhead'>Please pick your theme!</h3>
          <Button onClickHandler={props.onChangeTheme} type={'accent'}>
            {themeBtnText}
          </Button>
        </div>
        {/* Picture */}
        <Button>
          <Link to='/projects'>See Projects</Link>
        </Button>
      </SectionContent>
    </Section>
  );
};

export default Welcome;

/* <p>
          Programming started for me when I wanted to build a website for my
          technical swim coaching business. I got annoyed with not being able to
          make the no-code gui to do what I wanted. So I buried myself in a few
          MOOC courses and learned the basics.
        </p>
        <p>
          I am currently in the fire brigade based in Towsville, Australia.
          Programming has been just a hobby for the last 18ish months and I am
          looking at making the transition into the world of Tech.
        </p>
        <p>
          I really enjoy the challenge of the front end and am expanding my
          knowledge of JS into the land of ReactJS. Infact i build this site as
          a Single Page App using react.
        </p>
        <p>
          I am looking to join a company where I can learn from experienced devs
          and gain a deeper, wider knowledge base.
        </p> */
